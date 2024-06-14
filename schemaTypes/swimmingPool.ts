import {defineField, defineType} from 'sanity'
import {SwimmingPool as icon} from '@phosphor-icons/react'

export default defineType({
  name: 'swimmingPool',
  title: 'Bazény',
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
      name: 'slug',
      title: 'Název bazénu v URL',
      description: "Vygenerujte tuto URL kliknutím na tlačítko 'Vygenerovat'",
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
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
      name: 'location',
      title: 'Lokalita bazénu',
      type: 'geopoint',
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
