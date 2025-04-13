import {defineType} from 'sanity'

export const lectureFrequencyPricing = defineType({
  name: 'lectureFrequencyPricing',
  title: 'Počet lekcí a cena',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Název',
      type: 'string',
    },
    {
      name: 'lectureFrequency',
      title: 'Počet lekcí týdně',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Cena',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
  ],
  icon: () => '💰',
  preview: {
    select: {
      title: 'title',
      price: 'price',
    },
    prepare(selection) {
      const {title, price} = selection
      return {...selection, title, price: price && `${price} Kč`}
    },
  },
})
