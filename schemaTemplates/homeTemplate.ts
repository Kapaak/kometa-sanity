import {Template} from 'sanity'

type PostTemplate = {
  swimmingPoolId: string
}

export const homeTemplate: Template = {
  id: 'home-template',
  title: 'Filled Home',
  schemaType: 'home',
  value: (params: PostTemplate) => ({
    swimmingPool: {_type: 'reference', _ref: params.swimmingPoolId},
  }),
}
