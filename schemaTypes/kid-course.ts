import {defineField, defineType} from 'sanity'
import {SwimmingPool as icon} from '@phosphor-icons/react'

export default defineType({
  name: 'kidCourse',
  title: 'Kurzy pro děti',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Název bazénu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Odkaz na hlavní stránku',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Obrázek bazénu',
      type: 'imageAlt',
    }),
    defineField({
      name: 'privateSwimmingPool',
      title: 'Jedná se o školní bazén?',
      description:
        'Pokud je bazén školní, zaklikněte. Pokud je bazén veřejný, nechte pole nezaškrtnuté.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isSchoolOrKindergartenAvailable',
      title: 'Školy nebo školky jsou dostupné?',
      description: 'Pokud jsou školy nebo školky dostupné, zaklikněte.',
      type: 'boolean',
      initialValue: false,
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
    select: {title: 'name'},
  },
})
