import {defineField, defineType} from 'sanity'

export const swimmingPoolInfoBar = defineType({
  name: 'infoBar',
  title: 'Informační lišta',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulek',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'visibility',
      title: 'Viditelnost',
      type: 'boolean',
    }),
    defineField({
      name: 'swimmingPool',
      title: 'Bazén',
      type: 'reference',
      to: [{type: 'swimmingPool'}],
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
