import {defineType} from 'sanity'

export const colors = defineType({
  name: 'colors',
  title: 'Barvičky',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
  ],
})
