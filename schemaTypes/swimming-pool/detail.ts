import {defineField, defineType} from 'sanity'
import {swimmingCategories} from '../../constants/categories'

export const swimmingPoolDetail = defineType({
  name: 'swimmingPoolDetail',
  title: 'Data ke kategorii',
  type: 'document',
  fields: [
    defineField({
      name: 'skillRequirement',
      title: 'Potřebné dovednosti',
      type: 'array',
      of: [{type: 'string', title: 'Dovednost'}],
    }),
    defineField({
      name: 'sampleTraining',
      title: 'Vzorový trénink',
      type: 'file',
    }),
    defineField({
      name: 'imageGallery',
      title: 'Galerie obrázků',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            accept: 'image/*',
          },
        },
      ],
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
