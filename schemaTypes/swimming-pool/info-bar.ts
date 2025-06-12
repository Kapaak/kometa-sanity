import {defineField, defineType} from 'sanity'

export const swimmingPoolInfoBar = defineType({
  name: 'infoBar',
  title: 'Informační lišta',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'visible',
      title: 'Viditelnost',
      type: 'boolean',
      initialValue: false,
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
      title: 'value',
    },
  },
})
