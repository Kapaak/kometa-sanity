import {Template} from 'sanity'

type PostTemplate = {
  swimmingPoolId: string
}

export const fileUploadTemplate: Template = {
  id: 'file-upload-template',
  title: 'Filled FileUpload',
  schemaType: 'fileUpload',
  value: (params: PostTemplate) => ({
    swimmingPool: {_type: 'reference', _ref: params.swimmingPoolId},
  }),
}
