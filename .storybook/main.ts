import type {StorybookConfig} from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/storybook/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/storybook/**/*.mdx',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async viteConfig => {
    viteConfig.server = {
      ...viteConfig.server,
      allowedHosts: [
        '.ngrok-free.dev',
        '.ngrok-free.app',
        '.ngrok.app',
        '.ngrok.io',
      ],
    }

    return viteConfig
  },
}

export default config
