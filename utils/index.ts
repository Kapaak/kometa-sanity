type Options<T> = {
  separator?: string
  defaultValue?: string
  filterFn?: (value: T) => boolean
}

export function joinValues<T>(values: T[], opts?: Options<T>): string {
  const options = {
    separator: ' ',
    defaultValue: '',
    filterFn: (value: T) => !!value,
    ...opts,
  }

  return values.filter(options.filterFn).join(options.separator) || options.defaultValue
}
