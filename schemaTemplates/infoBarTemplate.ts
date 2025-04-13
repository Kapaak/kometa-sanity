import {Template} from 'sanity'

type PostTemplate = {
  swimmingPoolId: string
}

export const infoBarTemplate: Template = {
  id: 'info-bar-template',
  title: 'Filled InfoBar',
  schemaType: 'infoBar',
  value: (params: PostTemplate) => ({
    swimmingPool: {_type: 'reference', _ref: params.swimmingPoolId},
  }),
}
