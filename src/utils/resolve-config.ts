import resolveConfig from 'tailwindcss/src/public/resolve-config.js'

export function resolveTwConfig(path: any) {
  let _tailwindConfig: any | undefined
  try {
    _tailwindConfig = resolveConfig(path)
  }
  catch (error) {
    throw new Error(`Failed to load Tailwind config at ${path}`)
  }

  if (_tailwindConfig && !_tailwindConfig.content)
    _tailwindConfig.content = _tailwindConfig.purge

  return _tailwindConfig || {}
}
