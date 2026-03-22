import { MizzButton, mizzButtonVariants } from './components/mizz/MizzButton';
import { cn } from './components/ui/utils';

const storybookOrigin =
  import.meta.env.VITE_STORYBOOK_URL?.replace(/\/$/, '') ?? 'http://localhost:6006';

function storybookHref(path: string): string {
  return `${storybookOrigin}/?path=${encodeURI(path)}`;
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-0 flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">
          Mizz Design System
        </h1>
        <p className="text-neutral-500 mb-8">
          Guia de estilo do aplicativo
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href={storybookHref('/docs/introdução--docs')}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(mizzButtonVariants({ variant: 'filled', size: 'md' }))}
          >
            Abrir Storybook
          </a>
        </div>
      </div>
    </div>
  );
}
