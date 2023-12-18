import type { Config as TailwindOriginalConfig } from 'tailwindcss'

export type TailwindConfig = Omit<TailwindOriginalConfig, 'content'>
