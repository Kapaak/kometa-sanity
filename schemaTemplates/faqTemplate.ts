import {Template} from 'sanity'

type PostTemplate = {
  swimmingPoolId: string
}

export const faqTemplate: Template = {
  id: 'faq-template',
  title: 'Filled Faq',
  schemaType: 'faq',
  value: (params: PostTemplate) => ({
    swimmingPool: {_type: 'reference', _ref: params.swimmingPoolId},
  }),
}
