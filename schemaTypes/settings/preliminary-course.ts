import {defineField, defineType} from 'sanity'
import {convertDayIdToName, joinValues} from '../../utils'

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
      name: 'slug',
      title: 'Odkaz na kurz',
      type: 'slug',
      options: {
        source: 'title',
      },
      description:
        'Odkaz na kurz, který se zobrazí v URL adrese. Tlačítko Generate vygeneruje odkaz z Úvodního textu, ale lze vyplnit ručně bez generovaní.',
      validation: (Rule) => Rule.required().error('Je nutné vyplnit odkaz na kurz'),
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
        list: [
          {title: '15:00', value: '15:00'},
          {title: '15:15', value: '15:15'},
          {title: '15:30', value: '15:30'},
          {title: '15:45', value: '15:45'},
          {title: '16:00', value: '16:00'},
          {title: '16:15', value: '16:15'},
          {title: '16:30', value: '16:30'},
          {title: '16:45', value: '16:45'},
          {title: '17:00', value: '17:00'},
          {title: '17:15', value: '17:15'},
          {title: '17:30', value: '17:30'},
          {title: '17:45', value: '17:45'},
          {title: '18:00', value: '18:00'},
        ],
      },
    }),
    defineField({
      name: 'timeTo',
      title: 'Čas konání do',
      validation: (Rule) => Rule.required(),
      type: 'string',
      options: {
        list: [
          {title: '15:45', value: '15:45'},
          {title: '16:00', value: '16:00'},
          {title: '16:15', value: '16:15'},
          {title: '16:30', value: '16:30'},
          {title: '16:45', value: '16:45'},
          {title: '17:00', value: '17:00'},
          {title: '17:15', value: '17:15'},
          {title: '17:30', value: '17:30'},
          {title: '17:45', value: '17:45'},
          {title: '18:00', value: '18:00'},
          {title: '18:15', value: '18:15'},
          {title: '18:30', value: '18:30'},
          {title: '18:45', value: '18:45'},
          {title: '19:00', value: '19:00'},
        ],
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
      name: 'price',
      title: 'Cena za kurz',
      type: 'price',
      validation: (Rule) => Rule.required(),
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
        list: [
          {title: 'Začátečníci', value: 'basic'},
          {title: 'Pokročilí', value: 'advanced'},
          {title: 'Kondičky', value: 'condition'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      media: 'swimmingPool.image',
      timeFrom: 'timeFrom',
      timeTo: 'timeTo',
      price: 'price',
      discount: 'discount',
      isFull: 'isFull',
      dayId: 'dayId',
    },
    prepare(selection) {
      const {media, timeFrom, timeTo, price, discount, isFull, dayId} = selection
      const timeRange = `${timeFrom} - ${timeTo}`
      const priceLabel = `cena: ${joinValues([price?.priceSemester, price?.priceYear], {separator: '/'})} Kč`
      const discountLabel = discount ? `sleva: ${discount}%` : ''
      const available = isFull ? '🔴' : '🟢'

      return {
        title: joinValues([convertDayIdToName(dayId), available]),
        subtitle: joinValues([timeRange, priceLabel, discountLabel], {separator: ', '}),
        media,
      }
    },
  },
})
