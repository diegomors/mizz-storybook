import type { Meta, StoryObj } from '@storybook/react';
import { MizzRadioGroup } from '../app/components/mizz/MizzRadioGroup';
import { useState } from 'react';

const meta = {
  title: 'Componentes/RadioButton',
  component: MizzRadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Orientação do layout',
    },
    required: { control: 'boolean', description: 'Campo obrigatório' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MizzRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

// --- Selected ---

export const SelectedFalse: Story = {
  name: 'Selected: false',
  args: {
    name: 'unselected',
    options: defaultOptions,
  },
};

export const SelectedTrue: Story = {
  name: 'Selected: true',
  args: {
    name: 'selected',
    options: defaultOptions,
    value: 'option1',
  },
};

// --- States ---

export const Enabled: Story = {
  name: 'Enabled (default)',
  args: {
    name: 'enabled',
    options: defaultOptions,
    value: 'option1',
  },
};

export const DisabledState: Story = {
  name: 'Disabled',
  args: {
    name: 'disabled',
    options: [
      { value: 'option1', label: 'Option 1', disabled: true },
      { value: 'option2', label: 'Option 2', disabled: true },
    ],
    value: 'option1',
  },
};

// --- Visão geral ---

export const Properties: Story = {
  name: 'Properties',
  render: () => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('option1');

    return (
      <div className="flex flex-col gap-8 p-4">
        <div>
          <p className="text-xs text-neutral-500 mb-3">Selected: false</p>
          <MizzRadioGroup
            name="props-unselected"
            options={defaultOptions}
            value={val1}
            onChange={setVal1}
          />
        </div>
        <div>
          <p className="text-xs text-neutral-500 mb-3">Selected: true</p>
          <MizzRadioGroup
            name="props-selected"
            options={defaultOptions}
            value={val2}
            onChange={setVal2}
          />
        </div>
      </div>
    );
  },
};

export const States: Story = {
  name: 'States',
  render: () => (
    <div className="flex flex-col gap-8 p-4">
      <div>
        <p className="text-xs text-neutral-500 mb-3">Enabled (default)</p>
        <MizzRadioGroup
          name="state-enabled"
          options={defaultOptions}
          value="option1"
        />
      </div>
      <div>
        <p className="text-xs text-neutral-500 mb-3">Disabled</p>
        <MizzRadioGroup
          name="state-disabled"
          options={defaultOptions.map((o) => ({ ...o, disabled: true }))}
          value="option1"
        />
      </div>
    </div>
  ),
};
