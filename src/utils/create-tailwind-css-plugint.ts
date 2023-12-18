import processTailwindFeatures from 'tailwindcss/src/processTailwindFeatures.js'
import resolveConfig from 'tailwindcss/src/public/resolve-config.js'
import type { AcceptedPlugin } from 'postcss'
import type { TailwindConfig } from '../..'

export function createTailwindcssPlugin(props: {
  config?: TailwindConfig
  content: any
}): AcceptedPlugin {
  const tailwindConfig = resolveConfig(props.config ?? {})
  const tailwindcssPlugin = processTailwindFeatures(
    processOptions => () =>
      processOptions.createContext(tailwindConfig, [{ content: props.content }]),
  )
  return tailwindcssPlugin
}
