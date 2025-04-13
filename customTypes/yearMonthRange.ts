import {defineField, defineType} from 'sanity'
import {SemesterMonthYearInput} from '../components/SemesterMonthYearInput'

export const yearMonthRange = defineType({
  name: 'yearMonthRange',
  type: 'object',
  fields: [
    defineField({
      name: 'yearMonthFrom',
      title: 'Začátek pololetí',
      type: 'object',
      fields: [
        {
          name: 'year',
          title: 'Year',
          type: 'string',
        },
        {
          name: 'month',
          title: 'Month',
          type: 'string',
        },
      ],
      components: {
        input: SemesterMonthYearInput,
      },
    }),
    defineField({
      name: 'yearMonthTo',
      title: 'Konec pololetí',
      type: 'object',
      fields: [
        {
          name: 'year',
          title: 'Year',
          type: 'string',
        },
        {
          name: 'month',
          title: 'Month',
          type: 'string',
        },
      ],
      components: {
        input: SemesterMonthYearInput,
      },
    }),
  ],
})
