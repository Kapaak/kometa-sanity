import {defineField, defineType} from 'sanity'
import {RatingInput} from '../../components/RatingInput'

export default defineType({
  name: 'faq',
  title: 'Časté dotazy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulek',
      type: 'string',
    }),
    defineField({
      name: 'faqItems',
      title: 'Objekt',
      type: 'array',
      of: [{type: 'faqObjectType'}],
    }),
    defineField({
      name: 'order',
      title: 'Pořadí',
      type: 'rating',
      validation: (rule) => rule.min(1).max(3),
      description: '1 = nejvýše, 3 = nejnižší',
      components: {
        input: RatingInput,
      },
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
