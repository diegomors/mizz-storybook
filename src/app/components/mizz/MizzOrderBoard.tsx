import { useState, useCallback, type ReactNode } from 'react';
import { cn } from '../ui/utils';

/** Configuração de uma coluna do board */
export interface OrderBoardColumn {
  /** Identificador do status */
  status: string;
  /** Rótulo exibido no cabeçalho da coluna */
  label: string;
  /** Cor do badge de contagem (classe Tailwind de background) */
  badgeColor?: string;
}

/** Um pedido no board */
export interface OrderBoardItem {
  /** ID único do pedido */
  id: string;
  /** Número/ID visível do pedido */
  orderNumber: string;
  /** Status atual do pedido */
  status: string;
  /** Tempo relativo (ex: "há 5 min") */
  timeAgo?: string;
  /** Valor total formatado */
  total?: string;
  /** Itens do pedido (resumo) */
  items?: string[];
  /** Identificador da mesa */
  tableLabel?: string;
}

/** Propriedades para o componente MizzOrderBoard */
export interface MizzOrderBoardProps {
  /** Título do painel */
  title?: string;
  /** Descrição do painel */
  description?: string;
  /** Colunas do board (status e rótulos) */
  columns: OrderBoardColumn[];
  /** Pedidos a serem exibidos */
  orders: OrderBoardItem[];
  /** Callback ao clicar em um pedido */
  onOrderClick?: (order: OrderBoardItem) => void;
  /** Callback ao mover um pedido para outro status (drag & drop ou ação) */
  onOrderMove?: (orderId: string, fromStatus: string, toStatus: string) => void;
  /** Render customizado para o card de pedido */
  renderOrder?: (order: OrderBoardItem) => ReactNode;
  /** Mensagem quando a coluna está vazia */
  emptyMessage?: string;
  /** Classes CSS adicionais */
  className?: string;
}

const statusBadgeConfig: Record<string, { bg: string; text: string }> = {
  pending: { bg: 'bg-warning-1', text: 'text-warning-2' },
  confirmed: { bg: 'bg-info-1', text: 'text-info-2' },
  preparing: { bg: 'bg-info-1', text: 'text-info-2' },
  ready: { bg: 'bg-positive-1', text: 'text-positive-2' },
  delivering: { bg: 'bg-primary/10', text: 'text-primary' },
  delivered: { bg: 'bg-neutral-20', text: 'text-neutral-500' },
  cancelled: { bg: 'bg-negative-1', text: 'text-negative-2' },
};

function getStatusBadge(status: string) {
  return statusBadgeConfig[status] || { bg: 'bg-neutral-20', text: 'text-neutral-500' };
}

function getStatusLabel(status: string, columns: OrderBoardColumn[]) {
  const col = columns.find((c) => c.status === status);
  return col?.label || status;
}

/** Card de pedido padrão dentro do board */
function DefaultOrderCard({
  order,
  columns,
  onClick,
}: {
  order: OrderBoardItem;
  columns: OrderBoardColumn[];
  onClick?: () => void;
}) {
  const badge = getStatusBadge(order.status);
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card p-3.5 transition-all',
        onClick && 'cursor-pointer hover:shadow-md active:scale-[0.98]'
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-semibold text-foreground text-sm">#{order.orderNumber}</span>
        <span
          className={cn(
            'text-[10px] font-medium px-2 py-0.5 rounded-full',
            badge.bg,
            badge.text
          )}
        >
          {getStatusLabel(order.status, columns)}
        </span>
      </div>

      {order.timeAgo && (
        <p className="text-xs text-muted-foreground mb-1.5">{order.timeAgo}</p>
      )}

      {order.items && order.items.length > 0 && (
        <div className="space-y-0.5 mb-2">
          {order.items.slice(0, 3).map((item, i) => (
            <p key={i} className="text-xs text-muted-foreground truncate">
              {item}
            </p>
          ))}
          {order.items.length > 3 && (
            <p className="text-xs text-muted-foreground">
              +{order.items.length - 3} itens
            </p>
          )}
        </div>
      )}

      {order.total && (
        <p className="text-sm font-semibold text-foreground">
          Total: {order.total}
        </p>
      )}
    </div>
  );
}

/**
 * MizzOrderBoard - Painel kanban de gerenciamento de pedidos do Design System Mizz.
 *
 * Exibe pedidos organizados por status em colunas (desktop) ou abas com scroll (mobile).
 * Suporta colunas configuráveis, cards customizáveis e callbacks para interação.
 */
export const MizzOrderBoard = ({
  title = 'Painel de Pedidos',
  description = 'Gerencie o fluxo de preparo e entrega em tempo real.',
  columns,
  orders,
  onOrderClick,
  onOrderMove,
  renderOrder,
  emptyMessage = 'SEM PEDIDOS',
  className,
}: MizzOrderBoardProps) => {
  const [activeTab, setActiveTab] = useState(columns[0]?.status || '');

  const getOrdersByStatus = useCallback(
    (status: string) => orders.filter((o) => o.status === status),
    [orders]
  );

  const renderColumn = (column: OrderBoardColumn) => {
    const columnOrders = getOrdersByStatus(column.status);

    return (
      <div key={column.status} className="flex flex-col min-w-0">
        {/* Column header */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-foreground tracking-wide uppercase">
            {column.label}
          </h3>
          <span
            className={cn(
              'min-w-6 h-6 text-xs font-medium rounded-full inline-flex items-center justify-center',
              columnOrders.length > 0
                ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'
            )}
          >
            {columnOrders.length}
          </span>
        </div>

        {/* Column body */}
        <div
          className={cn(
            'flex-1 rounded-xl border border-dashed border-neutral-200 dark:border-neutral-700 p-2 space-y-2 min-h-[120px]',
            columnOrders.length === 0 && 'flex items-center justify-center'
          )}
        >
          {columnOrders.length === 0 ? (
            <span className="text-sm text-muted-foreground select-none">
              {emptyMessage}
            </span>
          ) : (
            columnOrders.map((order) =>
              renderOrder ? (
                <div key={order.id}>{renderOrder(order)}</div>
              ) : (
                <DefaultOrderCard
                  key={order.id}
                  order={order}
                  columns={columns}
                  onClick={onOrderClick ? () => onOrderClick(order) : undefined}
                />
              )
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Header */}
      {(title || description) && (
        <div className="mb-5">
          {title && (
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          )}
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      )}

      {/* Desktop: grid of columns */}
      <div className="hidden md:grid gap-4" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
        {columns.map(renderColumn)}
      </div>

      {/* Mobile: tabs + single column */}
      <div className="md:hidden">
        {/* Tab bar */}
        <div
          role="tablist"
          className="flex overflow-x-auto border-b border-neutral-30 mb-3 -mx-1 px-1 scrollbar-none"
        >
          {columns.map((column) => {
            const count = getOrdersByStatus(column.status).length;
            const isActive = activeTab === column.status;
            return (
              <button
                key={column.status}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(column.status)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold uppercase tracking-wide whitespace-nowrap border-b-2 -mb-px transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                )}
              >
                {column.label}
                <span
                  className={cn(
                    'min-w-5 h-5 text-[10px] font-medium rounded-full inline-flex items-center justify-center',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400'
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active tab content */}
        {columns
          .filter((c) => c.status === activeTab)
          .map((column) => {
            const columnOrders = getOrdersByStatus(column.status);
            return (
              <div key={column.status} className="space-y-2">
                {columnOrders.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-neutral-200 dark:border-neutral-700 p-6 flex items-center justify-center min-h-[120px]">
                    <span className="text-sm text-muted-foreground select-none">
                      {emptyMessage}
                    </span>
                  </div>
                ) : (
                  columnOrders.map((order) =>
                    renderOrder ? (
                      <div key={order.id}>{renderOrder(order)}</div>
                    ) : (
                      <DefaultOrderCard
                        key={order.id}
                        order={order}
                        columns={columns}
                        onClick={onOrderClick ? () => onOrderClick(order) : undefined}
                      />
                    )
                  )
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
