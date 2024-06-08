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

export function convertDayIdToName(dayId: number): string {
  switch (dayId) {
    case 1:
      return 'Pondělí'
    case 2:
      return 'Úterý'
    case 3:
      return 'Středa'
    case 4:
      return 'Čtvrtek'
    case 5:
      return 'Pátek'
    default:
      return ''
  }
}
