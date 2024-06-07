import {defineField, defineType} from 'sanity'
import {PersonSimpleSwim as icon} from '@phosphor-icons/react'

export default defineType({
  name: 'kidCourse',
  title: 'Kurzy pro děti',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'swimmingPoolDetail',
      title: 'Bazén',
      type: 'reference',
      to: [{type: 'swimmingPool'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'basic',
      title: 'Základní plavání',
      type: 'object',
      options: {
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'age',
          title: 'Věková kategorie',
          type: 'ageCategory',
        }),
        defineField({
          name: 'url',
          title: 'Odkaz na přihlášku do kurzu',
          type: 'string',
        }),
        defineField({
          name: 'availableCourses',
          title: 'Dostupné kurzy',
          type: 'array',
          of: [{type: 'course'}],
        }),
      ],
    }),
    defineField({
      name: 'advanced',
      title: 'Zdokonalovací plavání',
      type: 'object',
      options: {
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'age',
          title: 'Věková kategorie',
          type: 'ageCategory',
        }),
        defineField({
          name: 'url',
          title: 'Odkaz na přihlášku do kurzu',
          type: 'string',
        }),
        defineField({
          name: 'availableCourses',
          title: 'Dostupné kurzy',
          type: 'array',
          of: [{type: 'course'}],
        }),
      ],
    }),
    defineField({
      name: 'condition',
      title: 'Kondiční plavání',
      type: 'object',
      options: {
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'age',
          title: 'Věková kategorie',
          type: 'ageCategory',
        }),
        defineField({
          name: 'url',
          title: 'Odkaz na přihlášku do kurzu',
          type: 'string',
        }),
        defineField({
          name: 'availableCourses',
          title: 'Dostupné kurzy',
          type: 'array',
          of: [{type: 'course'}],
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'swimmingPoolDetail.name'},
  },
})
