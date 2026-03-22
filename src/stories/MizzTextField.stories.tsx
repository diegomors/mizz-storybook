import type { Meta, StoryObj } from '@storybook/react';
import { MizzTextField } from '../app/components/mizz/MizzTextField';
import { Search, X } from 'lucide-react';

const meta = {
  title: 'Componentes/TextField',
  component: MizzTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Rótulo do campo' },
    placeholder: { control: 'text', description: 'Texto de placeholder' },
    error: { control: 'text', description: 'Mensagem de erro' },
    supportingText: { control: 'text', description: 'Texto de suporte' },
    required: { control: 'boolean', description: 'Campo obrigatório' },
    disabled: { control: 'boolean', description: 'Campo desabilitado' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MizzTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Style ---

export const Outlined: Story = {
  name: 'outlined (default)',
  args: {
    label: 'Label',
    placeholder: 'Input',
  },
};

// --- States ---

export const Enabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Input',
  },
};

export const WithError: Story = {
  name: 'Error',
  args: {
    label: 'Label',
    error: 'Supporting text',
    defaultValue: 'Input',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Input',
    disabled: true,
  },
};

// --- Text configurations ---

export const InputText: Story = {
  name: 'input-text (default)',
  args: {
    label: 'Label',
    defaultValue: 'Input',
  },
};

export const LabelText: Story = {
  name: 'label-text',
  args: {
    label: 'Label',
  },
};

export const PlaceholderText: Story = {
  name: 'placeholder-text',
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
  },
};

// --- Leading icon ---

export const LeadingIconTrue: Story = {
  name: 'Leading icon: true',
  args: {
    label: 'Label',
    placeholder: 'Input',
    leadingIcon: <Search size={20} />,
  },
};

// --- Trailing icon ---

export const TrailingIconTrue: Story = {
  name: 'Trailing icon: true (default)',
  args: {
    label: 'Label',
    defaultValue: 'Input',
    trailingIcon: <X size={20} />,
  },
};

// --- Supporting text ---

export const WithSupportingText: Story = {
  name: 'Show supporting text',
  args: {
    label: 'Label',
    placeholder: 'Input',
    supportingText: 'Supporting text',
  },
};

// --- Visão geral ---

export const AllStates: Story = {
  name: 'States',
  render: () => (
    <div className="flex flex-col gap-6 p-4" style={{ width: '360px' }}>
      <div>
        <p className="text-xs text-neutral-500 mb-2">enabled (default)</p>
        <MizzTextField label="Label" placeholder="Input" />
      </div>
      <div>
        <p className="text-xs text-neutral-500 mb-2">error</p>
        <MizzTextField label="Label" defaultValue="Input" error="Supporting text" />
      </div>
      <div>
        <p className="text-xs text-neutral-500 mb-2">disabled</p>
        <MizzTextField label="Label" placeholder="Input" disabled />
      </div>
    </div>
  ),
};
