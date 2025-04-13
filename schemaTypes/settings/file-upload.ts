import {defineField, defineType} from 'sanity'
import {RatingInput} from '../../components/RatingInput'

export default defineType({
  name: 'fileUpload',
  title: 'Dokumenty',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název dokumentu',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .error('Název dokumentu musí být vyplněn a mít maximálně 40 znaků.')
          .min(0)
          .max(40),
    }),
    defineField({
      name: 'file',
      title: 'Vložit PDF',
      type: 'file',
    }),
    defineField({
      name: 'order',
      title: 'Pořadí',
      type: 'rating',
      validation: (rule) => rule.min(1).max(8),
      description: '1 = nejvýše, 8 = nejnižší',
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
