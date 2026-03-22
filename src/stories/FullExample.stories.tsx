import type { Meta, StoryObj } from '@storybook/react';
import { MizzLogo } from '../app/components/mizz/MizzLogo';
import { MizzButton } from '../app/components/mizz/MizzButton';
import { MizzCard, MizzCardHeader, MizzCardTitle, MizzCardDescription, MizzCardContent, MizzCardFooter } from '../app/components/mizz/MizzCard';
import { MizzBadge } from '../app/components/mizz/MizzBadge';
import { MizzTextField } from '../app/components/mizz/MizzTextField';
import { MizzRadioGroup } from '../app/components/mizz/MizzRadioGroup';
import { useState } from 'react';
import { Mail, Lock, User, ShoppingCart, Clock } from 'lucide-react';

const meta = {
  title: 'Exemplos/Telas Completas',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Tela de login com formulário completo
 */
export const LoginScreen: Story = {
  render: () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleLogin = async () => {
      const newErrors: Record<string, string> = {};
      
      if (!email) {
        newErrors.email = 'Email é obrigatório';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email inválido';
      }
      
      if (!password) {
        newErrors.password = 'Senha é obrigatória';
      } else if (password.length < 8) {
        newErrors.password = 'Senha deve ter no mínimo 8 caracteres';
      }
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        // Simula chamada de API
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert('Login realizado com sucesso!');
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#ff5c00] to-[#d14a00] flex items-center justify-center p-4">
        <MizzCard variant="elevated" className="w-full max-w-md">
          <MizzCardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <MizzLogo variant="icon" size="md" />
            </div>
            <MizzCardTitle>Bem-vindo ao Mizz</MizzCardTitle>
            <MizzCardDescription>
              Faça login para continuar
            </MizzCardDescription>
          </MizzCardHeader>
          
          <MizzCardContent className="space-y-4">
            <MizzTextField
              label="Email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({});
              }}
              error={errors.email}
              startIcon={<Mail size={20} />}
              required
            />
            
            <MizzTextField
              label="Senha"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({});
              }}
              error={errors.password}
              startIcon={<Lock size={20} />}
              required
            />
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span>Lembrar-me</span>
              </label>
              <a href="#" className="text-[#ff5c00] hover:underline">
                Esqueceu a senha?
              </a>
            </div>
          </MizzCardContent>
          
          <MizzCardFooter className="flex-col gap-3">
            <MizzButton 
              variant="primary" 
              size="lg" 
              className="w-full"
              onClick={handleLogin}
            >
              Entrar
            </MizzButton>
            
            <p className="text-sm text-gray-600 text-center">
              Não tem uma conta?{' '}
              <a href="#" className="text-[#ff5c00] hover:underline font-medium">
                Cadastre-se
              </a>
            </p>
          </MizzCardFooter>
        </MizzCard>
      </div>
    );
  },
};

/**
 * Tela de cardápio com produtos
 */
export const MenuScreen: Story = {
  render: () => {
    const products = [
      {
        id: 1,
        name: 'Pizza Margherita',
        description: 'Molho de tomate, mussarela, manjericão fresco',
        price: 44.90,
        emoji: '🍕',
        badge: 'Mais vendida',
        badgeVariant: 'primary' as const,
      },
      {
        id: 2,
        name: 'Hamburger Artesanal',
        description: 'Pão brioche, blend 180g, queijo cheddar',
        price: 32.90,
        emoji: '🍔',
        badge: 'Novo',
        badgeVariant: 'success' as const,
      },
      {
        id: 3,
        name: 'Sushi Combinado',
        description: '20 peças variadas de sushi e sashimi',
        price: 89.90,
        emoji: '🍱',
        badge: 'Premium',
        badgeVariant: 'warning' as const,
      },
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <MizzLogo variant="full" size="sm" />
            
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#" className="hover:text-[#ff5c00] transition-colors">Início</a>
              <a href="#" className="hover:text-[#ff5c00] transition-colors">Cardápio</a>
              <a href="#" className="hover:text-[#ff5c00] transition-colors">Sobre</a>
              <a href="#" className="hover:text-[#ff5c00] transition-colors">Contato</a>
            </nav>
            
            <MizzButton variant="primary" startIcon={<ShoppingCart size={18} />}>
              Carrinho (3)
            </MizzButton>
          </div>
        </header>

        {/* Hero */}
        <div className="bg-gradient-to-r from-[#ff5c00] to-[#e55200] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Nosso Cardápio</h1>
            <p className="text-xl opacity-90">
              Pratos deliciosos preparados com ingredientes frescos
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-3 flex-wrap">
            <MizzButton variant="primary" size="sm">Todos</MizzButton>
            <MizzButton variant="ghost" size="sm">Pizzas</MizzButton>
            <MizzButton variant="ghost" size="sm">Hamburgers</MizzButton>
            <MizzButton variant="ghost" size="sm">Sushi</MizzButton>
            <MizzButton variant="ghost" size="sm">Bebidas</MizzButton>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <MizzCard key={product.id} variant="elevated">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 rounded-t-2xl flex items-center justify-center">
                  <span className="text-6xl">{product.emoji}</span>
                </div>
                <MizzCardHeader>
                  <div className="flex items-center justify-between">
                    <MizzCardTitle>{product.name}</MizzCardTitle>
                    <MizzBadge variant={product.badgeVariant}>
                      {product.badge}
                    </MizzBadge>
                  </div>
                  <MizzCardDescription>
                    {product.description}
                  </MizzCardDescription>
                </MizzCardHeader>
                <MizzCardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-[#ff5c00]">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500">Serve 2 pessoas</span>
                  </div>
                </MizzCardContent>
                <MizzCardFooter>
                  <MizzButton 
                    variant="primary" 
                    className="w-full"
                    startIcon={<ShoppingCart size={18} />}
                  >
                    Adicionar ao carrinho
                  </MizzButton>
                </MizzCardFooter>
              </MizzCard>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Tela de checkout com formulário de pedido
 */
export const CheckoutScreen: Story = {
  render: () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [delivery, setDelivery] = useState('delivery');
    const [payment, setPayment] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = async () => {
      const newErrors: Record<string, string> = {};
      
      if (!name) newErrors.name = 'Nome é obrigatório';
      if (!email) newErrors.email = 'Email é obrigatório';
      if (!payment) newErrors.payment = 'Selecione uma forma de pagamento';
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert('Pedido realizado com sucesso!');
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8 text-center">
            <MizzLogo variant="full" size="md" />
            <h1 className="text-4xl font-extrabold mt-6 mb-2">Finalizar Pedido</h1>
            <p className="text-gray-600">Complete as informações abaixo</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <MizzCard variant="outlined">
                <MizzCardHeader>
                  <MizzCardTitle>Informações do pedido</MizzCardTitle>
                  <MizzCardDescription>
                    Preencha seus dados para continuar
                  </MizzCardDescription>
                </MizzCardHeader>
                
                <MizzCardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MizzTextField
                      label="Nome completo"
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrors({});
                      }}
                      error={errors.name}
                      startIcon={<User size={20} />}
                      required
                    />
                    
                    <MizzTextField
                      label="Email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors({});
                      }}
                      error={errors.email}
                      startIcon={<Mail size={20} />}
                      required
                    />
                  </div>
                  
                  <MizzRadioGroup
                    name="delivery"
                    label="Método de entrega"
                    value={delivery}
                    onChange={setDelivery}
                    options={[
                      {
                        value: 'delivery',
                        label: 'Entrega',
                        description: 'Receba em casa em até 45 minutos',
                      },
                      {
                        value: 'pickup',
                        label: 'Retirada',
                        description: 'Retire na loja em 30 minutos',
                      },
                    ]}
                  />
                  
                  <MizzRadioGroup
                    name="payment"
                    label="Forma de pagamento"
                    value={payment}
                    onChange={(val) => {
                      setPayment(val);
                      setErrors({});
                    }}
                    error={errors.payment}
                    required
                    options={[
                      {
                        value: 'credit',
                        label: 'Cartão de crédito',
                        description: 'Até 12x sem juros',
                      },
                      {
                        value: 'pix',
                        label: 'PIX',
                        description: 'Aprovação instantânea',
                      },
                      {
                        value: 'money',
                        label: 'Dinheiro',
                        description: 'Pagar na entrega',
                        disabled: delivery !== 'delivery',
                      },
                    ]}
                  />
                </MizzCardContent>
              </MizzCard>
            </div>

            {/* Resumo */}
            <div>
              <MizzCard variant="elevated" className="sticky top-4">
                <MizzCardHeader>
                  <MizzCardTitle>Resumo do pedido</MizzCardTitle>
                </MizzCardHeader>
                
                <MizzCardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">2x Pizza Margherita</span>
                      <span className="font-medium">R$ 89,80</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">1x Refrigerante</span>
                      <span className="font-medium">R$ 8,00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Taxa de entrega</span>
                      <span className="font-medium">R$ 5,00</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-2xl font-bold text-[#ff5c00]">
                        R$ 102,80
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <MizzBadge variant="success" className="w-full justify-start">
                      Tempo estimado: 45 min
                    </MizzBadge>
                    <MizzBadge variant="primary" startIcon={<Clock size={14} />} className="w-full justify-start">
                      Entrega grátis acima de R$ 50
                    </MizzBadge>
                  </div>
                </MizzCardContent>
                
                <MizzCardFooter className="flex-col gap-2">
                  <MizzButton 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    onClick={handleSubmit}
                  >
                    Confirmar pedido
                  </MizzButton>
                  <MizzButton variant="ghost" className="w-full">
                    Voltar ao cardápio
                  </MizzButton>
                </MizzCardFooter>
              </MizzCard>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const OrderStatus: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <MizzLogo variant="icon" size="sm" />
          <h1 className="text-2xl font-bold">Meus Pedidos</h1>
          <MizzButton variant="ghost" size="sm">
            Menu
          </MizzButton>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-4">
          <MizzCard variant="outlined">
            <MizzCardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">Pedido #1234</h3>
                  <p className="text-gray-600">22 de março, 2026 às 14:30</p>
                </div>
                <MizzBadge variant="success">Entregue</MizzBadge>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm">• Combo X-Burger</p>
                <p className="text-sm">• Pizza Margherita</p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="font-bold text-lg">Total: R$ 74,90</span>
                <MizzButton variant="outline" size="sm">
                  Ver detalhes
                </MizzButton>
              </div>
            </MizzCardContent>
          </MizzCard>
        </div>

        <div className="mt-8 text-center">
          <MizzButton variant="primary" size="lg">
            Fazer novo pedido
          </MizzButton>
        </div>
      </main>
    </div>
  ),
};
