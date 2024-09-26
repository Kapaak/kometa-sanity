import {Notebook} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  icon: Notebook,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nadpis',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Krátký popis',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Obrázek',
      type: 'imageAlt',
      validation: (Rule) => Rule.required().error('Obrázek je povinný.'),
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'description',
      title: 'Obsah',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {
              title: 'Nadpis',
              value: 'h2',
            },
            {
              title: 'Podnadpis',
              value: 'h3',
            },
            {
              title: 'Normální',
              value: 'normal',
            },
          ],
          marks: {
            decorators: [
              {title: 'Tučné', value: 'strong'},
              {title: 'Podtržené', value: 'underline'},
              {title: 'Kurzíva', value: 'em'},
            ],
          },
          lists: [
            {
              title: 'Neseřazený seznam',
              value: 'bullet',
            },
            {
              title: 'Seřazený seznam',
              value: 'number',
            },
          ],
        },
        {
          type: 'imageAlt',
        },
      ],
    }),
    defineField({
      name: 'createdAt',
      title: 'Datum vytvoření',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
    }),
    defineField({
      name: 'readTime',
      title: 'Délka čtení',
      description: 'V minutách',
      type: 'number',
    }),
    defineField({
      name: 'tags',
      title: 'Tagy',
      type: 'array',
      validation: (Rule) => Rule.unique().error('Tagy by měly být přidány pouze jednou.'),
      options: {
        sortable: true,
      },
      of: [
        {
          type: 'string',
          options: {
            list: [
              {
                title: 'Vybavení',
                value: 'equipment',
              },
              {
                title: 'Trénink',
                value: 'training',
              },
              {
                title: 'Tipy',
                value: 'tips',
              },
              {
                title: 'Zajímavosti',
                value: 'funFact',
              },
            ],
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
