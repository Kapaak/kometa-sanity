import {defineField, defineType} from 'sanity'
import {RatingInput} from '../../components/RatingInput'

export default defineType({
  name: 'home',
  title: 'Úvod',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulek',
      type: 'string',
    }),
    defineField({
      name: 'visibility',
      title: 'Viditelnost',
      type: 'boolean',
    }),
    defineField({
      name: 'order',
      title: 'Pořadí',
      type: 'rating',
      validation: (rule) => rule.min(1).max(5),
      description: '1 = nejvýše, 5 = nejnižší',
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
    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
