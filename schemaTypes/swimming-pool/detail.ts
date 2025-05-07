import {defineField, defineType} from 'sanity'
import {swimmingCategories} from '../../constants/categories'

export const swimmingPoolDetail = defineType({
  name: 'swimmingPoolDetail',
  title: 'Data ke stránce',
  type: 'document',
  fields: [
    defineField({
      name: 'skillRequirement',
      title: 'Potřebné dovednosti',
      type: 'array',
      of: [{type: 'string', title: 'Dovednost'}],
    }),
    defineField({
      name: 'announcements',
      title: 'Aktuality',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Název',
              type: 'string',
            }),
            defineField({
              name: 'visible',
              title: 'Viditelnost',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'blockContent',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'sampleTraining',
      title: 'Vzorový trénink',
      type: 'file',
    }),
    defineField({
      name: 'fileUploads',
      title: 'Dokumenty',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Název',
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
              title: 'Soubor',
              type: 'file',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'faq',
      title: 'Časté dotazy',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'columnTitle',
              title: 'Nadpis sloupce',
              type: 'string',
            },
            defineField({
              name: 'questions',
              title: 'Otázky',
              type: 'array',
              of: [{type: 'faqObjectType'}],
            }),
          ],
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
