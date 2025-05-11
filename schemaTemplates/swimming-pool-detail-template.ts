import {Template} from 'sanity'

type PostTemplate = {
  swimmingPoolId: string
  categoryId: string
}

export const swimmingPoolDetailTemplate: Template = {
  id: 'swimming-pool-details-template',
  title: 'Whatever',
  schemaType: 'swimmingPoolDetail',
  value: (params: PostTemplate) => ({
    swimmingPool: {_type: 'reference', _ref: params.swimmingPoolId},
    categoryId: params.categoryId,
  }),
}
