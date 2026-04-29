import {defineField, defineType} from 'sanity'

export const priceType = defineType({
  name: 'price',
  title: 'Cena',
  type: 'object',
  fields: [
    defineField({
      name: 'priceFirstHalf',
      title: 'Cena za 1. pololetí',
      type: 'number',
    }),
    defineField({
      name: 'priceSecondHalf',
      title: 'Cena za 2. pololetí',
      type: 'number',
    }),
    defineField({
      name: 'priceYear',
      title: 'Cena za školní rok',
      type: 'number',
    }),
  ],
  // make the fields render next to each other
  options: {columns: 3},
})
