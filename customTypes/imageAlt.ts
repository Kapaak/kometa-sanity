import {defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const imageAlt = defineType({
  name: 'imageAlt',
  title: 'Image',
  type: 'image',
  icon: ImageIcon,
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
