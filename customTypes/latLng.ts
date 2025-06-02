import {defineType} from 'sanity'

export const latLngType = defineType({
  name: 'latLng',
  title: 'Pozice na mapě',
  type: 'object',
  fields: [
    {
      name: 'lat',
      title: 'Zeměpisná šířka',
      type: 'number',
      validation: (Rule) => Rule.required().min(-90).max(90),
    },
    {
      name: 'lng',
      title: 'Zeměpisná délka',
      type: 'number',
      validation: (Rule) => Rule.required().min(-180).max(180),
    },
  ],
})
