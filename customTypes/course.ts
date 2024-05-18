import {defineField, defineType} from 'sanity'
import {CoursePreview} from '../components/CoursePreview'

export const courseType = defineType({
  title: 'Kurz',
  name: 'course',
  type: 'object',
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
  ],
  components: {
    preview: CoursePreview,
  },
  preview: {
    select: {
      dayId: 'dayId',
      isFull: 'isFull',
      timeFrom: 'timeFrom',
      timeTo: 'timeTo',
      price: 'price',
      discount: 'discount',
    },
  },
})
