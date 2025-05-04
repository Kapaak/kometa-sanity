import {defineField, defineType} from 'sanity'
import {swimmingCategories} from '../../constants/categories'

export const categorySkillRequirement = defineType({
  name: 'categorySkillRequirement',
  title: 'Petřebné dovednosti',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      title: 'Potřebné dovednosti',
      name: 'skillRequirement',
      type: 'array',
      of: [{type: 'string', title: 'Dovednost'}],
    }),
    defineField({
      name: 'swimmingPool',
      title: 'Bazén',
      type: 'reference',
      to: [{type: 'swimmingPool'}],
      hidden: true,
    }),
    defineField({
      name: 'categoryId',
      title: 'Kategorie',
      type: 'string',
      hidden: true,
      options: {
        list: swimmingCategories.map((category) => ({
          title: category.label,
          value: category.name,
        })),
      },
    }),
  ],
})
