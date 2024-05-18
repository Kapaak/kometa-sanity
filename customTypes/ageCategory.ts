import {defineField, defineType} from 'sanity'

export const ageCategoryType = defineType({
  name: 'ageCategory',
  title: 'Duration',
  type: 'object',
  fields: [
    defineField({
      name: 'ageFrom',
      title: 'Věk od',
      type: 'number',
    }),
    defineField({
      name: 'ageTo',
      title: 'Věk do',
      type: 'number',
    }),
  ],
  // make the fields render next to each other
  options: {columns: 2},
})
