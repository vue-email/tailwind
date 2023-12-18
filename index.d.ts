import type { Config } from 'tailwindcss'

export interface TailwindConfig {
  important?: Config['important']
  prefix?: Config['prefix']
  separator?: Config['separator']
  safelist?: Config['safelist']
  presets?: Config['presets']
  future?: Config['future']
  experimental?: Config['experimental']
  darkMode?: Config['darkMode']
  theme?: Config['theme']
  corePlugins?: Config['corePlugins']
  plugins?: Config['plugins']
}
