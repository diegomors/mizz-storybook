import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MizzThemeProvider, useMizzTheme, type MizzBrand } from '../app/components/mizz/MizzThemeProvider';
import { MizzButton } from '../app/components/mizz/MizzButton';
import { MizzTextField } from '../app/components/mizz/MizzTextField';
import { MizzChip } from '../app/components/mizz/MizzChip';
import { MizzSwitch } from '../app/components/mizz/MizzSwitch';
import { MizzAlert } from '../app/components/mizz/MizzAlert';
import { MizzText, MizzHighlight } from '../app/components/mizz/MizzText';

const meta = {
  title: 'Foundation/ThemeProvider',
  component: MizzThemeProvider,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof MizzThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const ThemeControls = () => {
  const { colorScheme, brand, toggleColorScheme, setTheme } = useMizzTheme();

  const brands: { value: MizzBrand; label: string }[] = [
    { value: '', label: 'Mizz (Orange)' },
    { value: 'theme-green', label: 'Green' },
    { value: 'theme-blue', label: 'Blue' },
    { value: 'theme-purple', label: 'Purple' },
    { value: 'theme-red', label: 'Red' },
    { value: 'theme-pink', label: 'Pink' },
  ];

  return (
    <div className="p-6 bg-background min-h-screen transition-colors">
      <MizzText variant="h2" className="mb-6">White-label Theme System</MizzText>

      {/* Theme controls */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-4">
          <MizzText variant="label">Color Scheme:</MizzText>
          <MizzButton
            variant={colorScheme === 'light' ? 'filled' : 'outlined'}
            size="sm"
            onClick={() => setTheme({ colorScheme: 'light' })}
          >
            Light
          </MizzButton>
          <MizzButton
            variant={colorScheme === 'dark' ? 'filled' : 'outlined'}
            size="sm"
            onClick={() => setTheme({ colorScheme: 'dark' })}
          >
            Dark
          </MizzButton>
          <MizzButton
            variant={colorScheme === 'system' ? 'filled' : 'outlined'}
            size="sm"
            onClick={() => setTheme({ colorScheme: 'system' })}
          >
            System
          </MizzButton>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <MizzText variant="label">Brand:</MizzText>
          {brands.map((b) => (
            <MizzChip
              key={b.value}
              variant="outlined"
              selected={brand === b.value}
              onClick={() => setTheme({ brand: b.value })}
            >
              {b.label}
            </MizzChip>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 p-6 rounded-xl bg-card border border-border">
          <MizzText variant="h3">Componentes</MizzText>
          <MizzButton>Botão Primary</MizzButton>
          <MizzButton variant="outlined">Botão Outlined</MizzButton>
          <MizzButton loading>Loading...</MizzButton>
          <MizzTextField label="Campo de texto" />
          <MizzSwitch label="Toggle switch" />
        </div>

        <div className="flex flex-col gap-4 p-6 rounded-xl bg-card border border-border">
          <MizzText variant="h3">Tipografia e Alertas</MizzText>
          <MizzText variant="body">
            Texto com <MizzHighlight color="primary" variant="background">destaque principal</MizzHighlight> e <MizzHighlight color="success">sucesso</MizzHighlight>.
          </MizzText>
          <MizzAlert variant="info">Alerta informativo adaptado ao tema.</MizzAlert>
          <MizzAlert variant="success">Operação concluída!</MizzAlert>
          <MizzAlert variant="error">Algo deu errado.</MizzAlert>
        </div>
      </div>
    </div>
  );
};

export const WhiteLabel: Story = {
  name: 'White-label Demo',
  render: () => (
    <MizzThemeProvider>
      <ThemeControls />
    </MizzThemeProvider>
  ),
};

const BrandsGrid = () => {
  const brands: { value: MizzBrand; label: string }[] = [
    { value: '', label: 'Mizz (Orange)' },
    { value: 'theme-green', label: 'Green' },
    { value: 'theme-blue', label: 'Blue' },
    { value: 'theme-purple', label: 'Purple' },
    { value: 'theme-red', label: 'Red' },
    { value: 'theme-pink', label: 'Pink' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-background min-h-screen">
      {brands.map((b) => (
        <div key={b.value} className={`${b.value} p-4 rounded-xl bg-card border border-border flex flex-col gap-3`}>
          <MizzText variant="label">{b.label}</MizzText>
          <MizzButton size="sm">Primary</MizzButton>
          <MizzButton variant="outlined" size="sm">Outlined</MizzButton>
          <div className="flex gap-2">
            <MizzChip variant="filled">Tag</MizzChip>
            <MizzChip variant="filled" selected onClick={() => {}}>Active</MizzChip>
          </div>
        </div>
      ))}
    </div>
  );
};

export const AllBrands: Story = {
  name: 'Todas as marcas',
  render: () => <BrandsGrid />,
};
