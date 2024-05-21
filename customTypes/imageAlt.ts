import {Image} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export const imageAlt = defineType({
  name: 'imageAlt',
  title: 'Image',
  type: 'image',
  icon: Image,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alternativní text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
})
