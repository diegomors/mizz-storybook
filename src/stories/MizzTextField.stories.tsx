import type { Meta, StoryObj } from '@storybook/react';
import { MizzTextField } from '../app/components/mizz/MizzTextField';
import { Mail, Lock, Search as SearchIcon, User } from 'lucide-react';

/**
 * # MizzTextField
 * 
 * Campo de texto do Design System Mizz com suporte completo a acessibilidade
 * e validação de formulários.
 * 
 * ## Recursos de Acessibilidade
 * - Labels associados corretamente via `htmlFor` e IDs únicos
 * - Suporte a `aria-invalid`, `aria-describedby` e `aria-required`
 * - Mensagens de erro com `role="alert"` e `aria-live="polite"`
 * - Navegação completa por teclado
 * - Compatível com leitores de tela
 */
const meta = {
  title: 'Mizz/TextField',
  component: MizzTextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Campo de entrada de texto com suporte a labels, erros, textos auxiliares e ícones.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo do campo',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder',
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro',
    },
    helperText: {
      control: 'text',
      description: 'Texto auxiliar para orientação',
    },
    required: {
      control: 'boolean',
      description: 'Campo obrigatório',
    },
    disabled: {
      control: 'boolean',
      description: 'Campo desabilitado',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MizzTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'seu@email.com',
    helperText: 'Utilize seu email corporativo',
  },
};

export const WithError: Story = {
  args: {
    label: 'Senha',
    type: 'password',
    placeholder: '••••••••',
    error: 'A senha deve ter no mínimo 8 caracteres',
  },
};

export const Required: Story = {
  args: {
    label: 'CPF',
    placeholder: '000.000.000-00',
    required: true,
    helperText: 'Este campo é obrigatório',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    placeholder: 'Não editável',
    disabled: true,
    value: 'Valor fixo',
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'seu@email.com',
    startIcon: <Mail size={20} />,
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'Buscar',
    placeholder: 'Digite para buscar...',
    endIcon: <SearchIcon size={20} />,
  },
};

export const Password: Story = {
  args: {
    label: 'Senha',
    type: 'password',
    placeholder: '••••••••',
    startIcon: <Lock size={20} />,
    helperText: 'Mínimo de 8 caracteres',
  },
};

export const Search: Story = {
  args: {
    placeholder: 'Buscar produtos...',
    startIcon: <SearchIcon size={20} />,
  },
};

export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'seu@email.com',
    startIcon: <Mail size={20} />,
    required: true,
  },
};

/**
 * Exemplo de formulário completo com diferentes estados
 */
export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-gray-50 rounded-xl" style={{ width: '500px' }}>
      <h3 className="text-lg font-semibold text-gray-900">Cadastro de usuário</h3>
      
      <MizzTextField
        label="Nome completo"
        placeholder="Digite seu nome"
        startIcon={<User size={20} />}
        required
      />
      
      <MizzTextField
        label="Email"
        type="email"
        placeholder="seu@email.com"
        startIcon={<Mail size={20} />}
        helperText="Utilize seu email principal"
        required
      />
      
      <MizzTextField
        label="Senha"
        type="password"
        placeholder="••••••••"
        startIcon={<Lock size={20} />}
        error="A senha deve ter no mínimo 8 caracteres"
        required
      />
      
      <MizzTextField
        label="Código promocional"
        placeholder="Digite o código (opcional)"
      />
      
      <MizzTextField
        label="Campo desabilitado"
        placeholder="Não editável"
        disabled
        value="Valor predefinido"
      />
    </div>
  ),
};

/**
 * Exemplo mostrando todos os estados possíveis
 */
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8 bg-gray-50 rounded-xl" style={{ width: '500px' }}>
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Estados básicos</h3>
        <div className="flex flex-col gap-4">
          <MizzTextField label="Normal" placeholder="Digite algo..." />
          <MizzTextField label="Com valor" value="Texto digitado" readOnly />
          <MizzTextField label="Desabilitado" placeholder="Não editável" disabled />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Com feedback</h3>
        <div className="flex flex-col gap-4">
          <MizzTextField 
            label="Com texto auxiliar" 
            placeholder="Digite..." 
            helperText="Este é um texto de ajuda"
          />
          <MizzTextField 
            label="Com erro" 
            placeholder="Digite..." 
            error="Este campo contém um erro"
          />
          <MizzTextField 
            label="Obrigatório" 
            placeholder="Digite..." 
            required
            helperText="Este campo é obrigatório"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Com ícones</h3>
        <div className="flex flex-col gap-4">
          <MizzTextField 
            label="Ícone no início" 
            placeholder="Digite..." 
            startIcon={<User size={20} />}
          />
          <MizzTextField 
            label="Ícone no final" 
            placeholder="Digite..." 
            endIcon={<SearchIcon size={20} />}
          />
        </div>
      </div>
    </div>
  ),
};
