import {defineType} from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigace',
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
