import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'LSD Starters',
  description: 'Creating new projects to the LSD standard',
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
    sidebar: [
      {
        text: 'MicroPython',
        children: [
          {
            text: 'Esp32',
            link: 'micropython/esp32-project'
          }
        ]
      }
    ]
  }),
})