import {defineField, defineType} from 'sanity'

export const swimmingPoolMainPage = defineType({
  name: 'swimmingPoolMainPage',
  title: 'Data k hlavní stránce',
  type: 'document',
  fields: [
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
      name: 'infoBars',
      title: 'Informační lišta',
      type: 'array',
      of: [
        {
          type: 'infoBar',
        },
      ],
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
          type: 'faqObjectType',
        },
      ],
    }),
    defineField({
      name: 'basicInformation',
      title: 'Základní informace',
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
              name: 'text',
              title: 'Text',
              type: 'blockContent',
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
  ],
})
