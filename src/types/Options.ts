interface Options {
  addBodyClass?: Boolean
  display: string | null | undefined
  subset: string[]
}

const defaultOptions = {
  addBodyClass: false,
  display: 'swap',
}

export { Options, defaultOptions }
