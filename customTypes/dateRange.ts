import {defineField, defineType} from 'sanity'

export const dateRange = defineType({
  name: 'dateRange',
  title: 'Datum od do',
  type: 'object',
  fields: [
    defineField({
      name: 'dateFrom',
      title: 'Datum od',
      type: 'date',
    }),
    defineField({
      name: 'dateTo',
      title: 'Datum do',
      type: 'date',
    }),
  ],
  // make the fields render next to each other
  options: {columns: 2},
})
