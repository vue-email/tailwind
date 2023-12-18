import type { Config as TailwindOriginalConfig } from 'tailwindcss'

export * from './utils'

export type TailwindConfig = Omit<TailwindOriginalConfig, 'content'>
