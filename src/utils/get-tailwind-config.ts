import loadConfig from 'tailwindcss/loadConfig.js'
import type { TailwindConfig } from '../..'

export function loadTailwindConfig(path: string) {
  let _tailwindConfig: Partial<TailwindConfig> | undefined
  try {
    _tailwindConfig = loadConfig(path)
  }
  catch (error) {
    throw new Error(`Failed to load Tailwind config at ${path}`)
  }

  if (_tailwindConfig && !_tailwindConfig.content)
    _tailwindConfig.content = _tailwindConfig.purge

  return _tailwindConfig || {}
}
