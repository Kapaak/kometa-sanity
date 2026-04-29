import {defineField, defineType} from 'sanity'
import {swimmingCategories} from '../constants/categories'
import {joinValues} from '../utils'

function getCategoryLabel(categoryId?: string) {
  return (
    swimmingCategories.find((category) => category.name === categoryId)?.label ?? categoryId ?? ''
  )
}

function getPriceLabel(price?: {
  priceFirstHalf?: number
  priceSecondHalf?: number
  priceYear?: number
}) {
  const values = joinValues([price?.priceFirstHalf, price?.priceSecondHalf, price?.priceYear], {
    separator: '/',
  })
  return values ? `${values} Kč` : '-'
}

export const courseCategoryPricing = defineType({
  name: 'courseCategoryPricing',
  title: 'Ceník kategorií',
  type: 'document',
  fields: [
    defineField({
      name: 'swimmingPool',
      title: 'Bazén',
      type: 'reference',
      to: [{type: 'swimmingPool'}],
      validation: (Rule) => Rule.required(),
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'categoryId',
      title: 'Kategorie',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: swimmingCategories.map((category) => ({
          title: category.label,
          value: category.name,
        })),
      },
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'coursePrice',
      title: 'Lekce',
      type: 'price',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preliminaryCoursePrice',
      title: 'Předběžné lekce',
      type: 'price',
    }),
  ],
  preview: {
    select: {
      categoryId: 'categoryId',
      coursePrice: 'coursePrice',
      preliminaryCoursePrice: 'preliminaryCoursePrice',
    },
    prepare(selection) {
      const {categoryId, coursePrice, preliminaryCoursePrice} = selection

      return {
        title: getCategoryLabel(categoryId),
        subtitle: joinValues(
          [
            `Lekce: ${getPriceLabel(coursePrice)}`,
            `Předběžné: ${getPriceLabel(preliminaryCoursePrice)}`,
          ],
          {separator: ' | '},
        ),
      }
    },
  },
})
