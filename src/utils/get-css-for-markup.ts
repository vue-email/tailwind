import type { CorePluginsConfig } from 'tailwindcss/types/config'
import postcss from 'postcss'
import postcssCssVariables from 'postcss-css-variables'
import type { TailwindConfig } from '../..'
import { createTailwindcssPlugin } from './create-tailwind-css-plugint'

export async function getCssForMarkup(markup: string, config: TailwindConfig | undefined) {
  const corePlugins = config?.corePlugins as CorePluginsConfig

  const tailwindConfig = {
    ...config,
    corePlugins: {
      preflight: false,
      ...corePlugins,
    },
  }

  const tailwindcssPlugin = createTailwindcssPlugin({ config: tailwindConfig, content: markup })

  const processor = postcss([
    tailwindcssPlugin,
    postcssCssVariables(),
  ])
  const result = await processor.process(
    String.raw`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
        `,
    { from: undefined }, // no need to use from since the `content` context is sent into tailwind
  )

  return result.css
}
