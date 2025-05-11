import {Template} from 'sanity'

type PostTemplate = {
  swimmingPoolId: string
}

export const swimmingPoolMainPageTemplate: Template = {
  id: 'swimming-pool-main-template',
  title: '',
  schemaType: 'swimmingPoolMainPage',
  value: (params: PostTemplate) => ({
    swimmingPool: {_type: 'reference', _ref: params.swimmingPoolId},
  }),
}
