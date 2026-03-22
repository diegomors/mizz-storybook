import type { Meta, StoryObj } from '@storybook/react';
import Guide from '../imports/Guide';
import Materials from '../imports/Materials';
import Colors from '../imports/Colors';
import Components from '../imports/Components';

const meta = {
  title: 'Fundamentos/Arquivos do Figma',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const VisualIdentityGuide: Story = {
  render: () => <Guide />,
  parameters: {
    docs: {
      description: {
        story: 'Guia completo de identidade visual importado do Figma com conceito da marca, desenho do logo, assinaturas, cromias e usos proibidos.',
      },
    },
  },
};

export const VisualMaterials: Story = {
  render: () => <Materials />,
  parameters: {
    docs: {
      description: {
        story: 'Materiais visuais de apoio como banners, posts para Instagram e materiais publicitários.',
      },
    },
  },
};

export const ColorPalette: Story = {
  render: () => <Colors />,
  parameters: {
    docs: {
      description: {
        story: 'Paleta completa de cores e tons do sistema visual da marca.',
      },
    },
  },
};

export const ComponentSpecifications: Story = {
  render: () => <Components />,
  parameters: {
    docs: {
      description: {
        story: 'Especificações técnicas e design de tokens dos componentes do sistema.',
      },
    },
  },
};

export const AvailableFiles: Story = {
  render: () => (
    <div className="bg-gray-50 w-full min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">Arquivos Importados do Figma</h1>
        <p className="text-lg text-gray-600 mb-8">
          Os seguintes componentes foram importados diretamente do Figma e estão disponíveis no projeto:
        </p>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-bold mb-2">📄 Colors.tsx</h3>
            <p className="text-gray-600 mb-2">
              Paleta completa de cores do design system com valores RGB e hexadecimais.
            </p>
            <code className="bg-gray-100 px-3 py-1 rounded text-sm">
              /src/imports/Colors.tsx
            </code>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-bold mb-2">📘 Guide.tsx</h3>
            <p className="text-gray-600 mb-2">
              Guia completo de identidade visual com logo, assinaturas e diretrizes de uso.
            </p>
            <code className="bg-gray-100 px-3 py-1 rounded text-sm">
              /src/imports/Guide.tsx
            </code>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-bold mb-2">🎨 Materials.tsx</h3>
            <p className="text-gray-600 mb-2">
              Materiais visuais de apoio: banners, posts e materiais promocionais.
            </p>
            <code className="bg-gray-100 px-3 py-1 rounded text-sm">
              /src/imports/Materials.tsx
            </code>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-bold mb-2">🧩 Components.tsx</h3>
            <p className="text-gray-600 mb-2">
              Especificações técnicas dos componentes do Material Theme.
            </p>
            <code className="bg-gray-100 px-3 py-1 rounded text-sm">
              /src/imports/Components.tsx
            </code>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
          <h3 className="text-lg font-bold mb-2 text-blue-900">💡 Como usar</h3>
          <p className="text-blue-800">
            Para usar estes componentes em seu código, importe-os diretamente:
          </p>
          <pre className="bg-blue-900 text-blue-100 p-4 rounded-lg mt-3 overflow-x-auto">
{`import Guide from './imports/Guide';
import Colors from './imports/Colors';
import Materials from './imports/Materials';
import Components from './imports/Components';

function MyApp() {
  return <Guide />;
}`}
          </pre>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Visão geral de todos os arquivos importados do Figma disponíveis no projeto.',
      },
    },
  },
};
