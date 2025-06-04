export interface I18nConfig {
  autoTransform: boolean
  languages: string[]
}

export interface AIResponseData {
  i18n: Record<string, string>
  slide: string
}
