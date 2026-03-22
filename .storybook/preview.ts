import type { Preview } from '@storybook/react';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
  },
  globalTypes: {
    theme: {
      description: 'Esquema de cores (light/dark)',
      toolbar: {
        title: 'Tema',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
    brand: {
      description: 'Marca white-label',
      toolbar: {
        title: 'Marca',
        icon: 'paintbrush',
        items: [
          { value: '', title: 'Mizz (Orange)' },
          { value: 'theme-green', title: 'Green' },
          { value: 'theme-blue', title: 'Blue' },
          { value: 'theme-purple', title: 'Purple' },
          { value: 'theme-red', title: 'Red' },
          { value: 'theme-pink', title: 'Pink' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    brand: '',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      const brand = context.globals.brand || '';

      // Apply classes to the Storybook body for proper theming
      const root = document.documentElement;
      const body = document.body;

      // Clean up previous theme classes
      root.classList.remove('dark', 'theme-green', 'theme-blue', 'theme-purple', 'theme-red', 'theme-pink');
      body.classList.remove('dark', 'theme-green', 'theme-blue', 'theme-purple', 'theme-red', 'theme-pink');

      if (theme === 'dark') {
        root.classList.add('dark');
        body.classList.add('dark');
      }
      if (brand) {
        root.classList.add(brand);
        body.classList.add(brand);
      }

      // Update body background for Storybook
      body.style.backgroundColor = theme === 'dark' ? '#121212' : '#ffffff';
      body.style.color = theme === 'dark' ? '#f5f5f5' : '#000000';

      return Story();
    },
  ],
};

export default preview;
