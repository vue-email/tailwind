import resolveConfig from 'tailwindcss/src/public/resolve-config.js'

export function resolveTwConfig(config: any) {
  let _tailwindConfig: any | undefined
  try {
    _tailwindConfig = resolveConfig(config)
  }
  catch (error) {
    throw new Error(`Failed to load Tailwind config at ${config}`)
  }

  if (_tailwindConfig && !_tailwindConfig.content)
    _tailwindConfig.content = _tailwindConfig.purge

  return _tailwindConfig || {}
}
