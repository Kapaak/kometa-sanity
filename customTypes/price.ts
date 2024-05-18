import {defineField, defineType} from 'sanity'

export const priceType = defineType({
  name: 'price',
  title: 'Duration',
  type: 'object',
  fields: [
    defineField({
      name: 'priceSemester',
      title: 'Cena za pololetí',
      type: 'number',
    }),
    defineField({
      name: 'priceYear',
      title: 'Cena za školní rok',
      type: 'number',
    }),
  ],
  // make the fields render next to each other
  options: {columns: 2},
})
