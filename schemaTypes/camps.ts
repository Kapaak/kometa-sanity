import {defineField, defineType} from 'sanity'
import {Tent as icon} from '@phosphor-icons/react'

export default defineType({
  name: 'camp',
  title: 'Tábory',
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
      name: 'image',
      title: 'Obrázek bazénu',
      type: 'imageAlt',
    }),
    defineField({
      name: 'tag',
      title: 'Štítky',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(3),
      description: 'Maximálně 3 štítky',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'url',
      title: 'Odkaz na hlavní stránku',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
