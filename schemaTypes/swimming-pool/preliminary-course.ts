import {defineField, defineType} from 'sanity'
import {convertDayIdToName, joinValues} from '../../utils'
import {swimmingCategories} from '../../constants/categories'
import {kidsCourseDurationsFrom, kidsCourseDurationsTo} from '../../constants/course-duration'

export const preliminaryCourse = defineType({
  name: 'preliminaryCourse',
  title: 'Předběžný kurz',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      name: 'dayId',
      title: 'Den v týdnu',
      type: 'number',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: 'Pondělí',
            value: 1,
          },
          {
            title: 'Úterý',
            value: 2,
          },
          {
            title: 'Středa',
            value: 3,
          },
          {
            title: 'Čtvrtek',
            value: 4,
          },
          {
            title: 'Pátek',
            value: 5,
          },
        ],
      },
    }),
    defineField({
      title: 'Nastavit datum platnosti předběžného kurzu',
      description: 'V rozmezí dat od - do bude kurz zobrazen na webu.',
      name: 'activeDate',
      type: 'object',
      options: {columns: 2},
      validation: (Rule) =>
        Rule.required().error('Je nutné vyplnit datum platnosti předběžného kurzu'),
      fields: [
        {
          title: 'Od',
          name: 'activeDateFrom',
          type: 'date',
          options: {
            dateFormat: 'YYYY-MM-DD',
            calendarTodayLabel: 'Today',
          },
          validation: (Rule) =>
            Rule.required().error('Je nutné vyplnit počáteční datum platnosti předběžného kurzu'),
        },
        {
          title: 'Do',
          name: 'activeDateTo',
          type: 'date',
          options: {
            dateFormat: 'YYYY-MM-DD',
            calendarTodayLabel: 'Today',
          },
        },
      ],
    }),
    defineField({
      name: 'age',
      title: 'Věková kategorie',
      type: 'ageCategory',
    }),
    defineField({
      name: 'timeFrom',
      title: 'Čas konání od',
      validation: (Rule) => Rule.required(),
      type: 'string',
      options: {
        list: kidsCourseDurationsFrom.map((duration) => ({
          title: duration.title,
          value: duration.value,
        })),
      },
    }),
    defineField({
      name: 'timeTo',
      title: 'Čas konání do',
      validation: (Rule) => Rule.required(),
      type: 'string',
      options: {
        list: kidsCourseDurationsTo.map((duration) => ({
          title: duration.title,
          value: duration.value,
        })),
      },
    }),
    defineField({
      name: 'isFull',
      title: 'Je kurz zaplněný?',
      description: 'Pokud je kurz plný, zaklikněte.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'discount',
      description: 'Zadejte procentuální slevu pro cenu za pololetí a školní rok.',
      title: 'Sleva',
      type: 'number',
    }),
    defineField({
      name: 'swimmingPool',
      title: 'Bazén',
      type: 'reference',
      to: [{type: 'swimmingPool'}],
    }),
    defineField({
      name: 'categoryId',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: swimmingCategories.map((category) => ({
          title: category.label,
          value: category.name,
        })),
      },
    }),
  ],
  preview: {
    select: {
      media: 'swimmingPool.image',
      timeFrom: 'timeFrom',
      timeTo: 'timeTo',
      discount: 'discount',
      isFull: 'isFull',
      dayId: 'dayId',
    },
    prepare(selection) {
      const {media, timeFrom, timeTo, discount, isFull, dayId} = selection
      const timeRange = `${timeFrom} - ${timeTo}`

      const discountLabel = discount ? `sleva: ${discount}%` : ''
      const available = isFull ? '🔴' : '🟢'

      return {
        title: joinValues([convertDayIdToName(dayId), available]),
        subtitle: joinValues([timeRange, discountLabel], {separator: ', '}),
        media,
      }
    },
  },
})
