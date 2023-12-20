import type { Config } from 'tailwindcss'

export type TailwindConfig = Partial<Config>

export function cssToJsxStyle(cssText: string): Record<string, string>
export function escapeClassName(className: string): string
export function getCssForMarkup(markup: string, config: TailwindConfig | undefined): Promise<string>
export function getStylesPerClassMap(css: string): Record<string, string>
export function minifyCss(css: string): string
export function useRgbNonSpacedSyntax(css: string): string
