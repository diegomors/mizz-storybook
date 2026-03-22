import { MizzButton, mizzButtonVariants } from './components/mizz/MizzButton';
import { MizzCard, MizzCardHeader, MizzCardTitle, MizzCardDescription, MizzCardContent } from './components/mizz/MizzCard';
import { cn } from './components/ui/utils';

/** Base URL do Storybook (porta 6006 no dev). O app Vite não entende `?path=` — isso só existe no servidor do Storybook. */
const storybookOrigin =
  import.meta.env.VITE_STORYBOOK_URL?.replace(/\/$/, '') ?? 'http://localhost:6006';

/**
 * Mesmo formato do Storybook (`?path=/story/…` ou `?path=/docs/…` com barras literais).
 * Não use `URLSearchParams` para `path`: ele codifica `/` como `%2F` e o parser do
 * Storybook deixa de reconhecer a rota (página em branco / inválida).
 */
function storybookHref(path: string): string {
  return `${storybookOrigin}/?path=${encodeURI(path)}`;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Mizz Design System
          </h1>
          <p className="text-xl text-gray-700">
            Sistema de design completo e acessível para criar experiências digitais incríveis
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <MizzCard variant="elevated">
            <MizzCardHeader>
              <MizzCardTitle>🎨 Colors</MizzCardTitle>
              <MizzCardDescription>
                Paleta de cores cuidadosamente selecionada
              </MizzCardDescription>
            </MizzCardHeader>
            <MizzCardContent>
              <div className="flex gap-2 mb-4">
                <div className="w-12 h-12 bg-[#ff5c00] rounded-lg" title="Laranja Mizz" />
                <div className="w-12 h-12 bg-black rounded-lg border-2 border-white" title="Preto" />
                <div className="w-12 h-12 bg-white rounded-lg border-2 border-gray-200" title="Branco" />
              </div>
              <p className="text-sm text-gray-600">
                Cores primárias, semânticas e neutras com acessibilidade garantida
              </p>
            </MizzCardContent>
          </MizzCard>

          <MizzCard variant="elevated">
            <MizzCardHeader>
              <MizzCardTitle>✏️ Typography</MizzCardTitle>
              <MizzCardDescription>
                Be Vietnam Pro - moderna e legível
              </MizzCardDescription>
            </MizzCardHeader>
            <MizzCardContent>
              <div className="space-y-2 mb-4">
                <p className="text-2xl font-extrabold">ExtraBold</p>
                <p className="text-xl font-bold">Bold</p>
                <p className="text-lg font-semibold">SemiBold</p>
                <p className="text-base font-medium">Medium</p>
                <p className="text-sm">Regular</p>
              </div>
            </MizzCardContent>
          </MizzCard>

          <MizzCard variant="elevated">
            <MizzCardHeader>
              <MizzCardTitle>🧩 Components</MizzCardTitle>
              <MizzCardDescription>
                Biblioteca completa de componentes acessíveis
              </MizzCardDescription>
            </MizzCardHeader>
            <MizzCardContent>
              <div className="space-y-2">
                <MizzButton variant="primary" size="sm" className="w-full">
                  Button with Loading
                </MizzButton>
                <input 
                  type="text" 
                  placeholder="Text Field" 
                  className="w-full h-9 px-3 rounded-lg border-2 border-gray-300 text-sm"
                />
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-[#ff5c00]" />
                  <span className="text-sm">Radio Button</span>
                </div>
              </div>
            </MizzCardContent>
          </MizzCard>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Storybook
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Acesse a documentação completa com code snippets copiáveis, exemplos interativos e componentes 100% acessíveis
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={storybookHref('/docs/introduction-welcome--docs')}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(mizzButtonVariants({ variant: 'secondary', size: 'lg' }))}
            >
              View Documentation
            </a>
            <a
              href={storybookHref('/story/mizz-button--primary')}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                mizzButtonVariants({ variant: 'outline', size: 'lg' }),
                'bg-black text-white border-black hover:bg-gray-800'
              )}
            >
              View Components
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Desenvolvido com ❤️ pela equipe Mizz
          </p>
        </div>
      </div>
    </div>
  );
}