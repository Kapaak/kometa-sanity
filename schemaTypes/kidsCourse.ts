import {defineField, defineType} from 'sanity'
import {convertDayIdToName, joinValues} from '../utils'
import {swimmingCategories} from '../constants/categories'
import {kidsCourseDurationsFrom, kidsCourseDurationsTo} from '../constants/course-duration'

export const kidsCourse2 = defineType({
  name: 'kidsCourse',
  title: 'Kurz',
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
      name: 'url',
      title: 'Odkaz na kurz',
      type: 'string',
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
