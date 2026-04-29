import {Template} from 'sanity'

type CourseCategoryPricingTemplate = {
  swimmingPoolId: string
  categoryId: string
}

export const courseCategoryPricingTemplate: Template = {
  id: 'course-category-pricing-template',
  title: 'Category pricing template',
  schemaType: 'courseCategoryPricing',
  value: (params: CourseCategoryPricingTemplate) => ({
    swimmingPool: {_type: 'reference', _ref: params.swimmingPoolId},
    categoryId: params.categoryId,
  }),
}
