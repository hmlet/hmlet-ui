import type {Preview} from '@storybook/react'

import {ThemeProvider} from '../src/theme/ThemeProvider'
import '../src/styles/index.css'
import './storybook-preview.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light or dark mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          {value: 'light', title: 'Light'},
          {value: 'dark', title: 'Dark'},
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme =
        (context.globals.theme as 'light' | 'dark' | undefined) ?? 'light'

      return (
        <ThemeProvider mode={theme}>
          <div className="bg-background text-foreground p-6">
            <Story />
          </div>
        </ThemeProvider>
      )
    },
  ],
}

export default preview
