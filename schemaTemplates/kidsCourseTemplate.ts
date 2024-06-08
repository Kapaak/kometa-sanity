import {Template} from 'sanity'

type PostTemplate = {
  swimmingPoolId: string
  categoryId: string
}

export const kidsCourseTemplate: Template = {
  id: 'kids-course-template',
  title: 'Filled Post',
  schemaType: 'kidsCourse',
  value: (params: PostTemplate) => ({
    swimmingPool: {_type: 'reference', _ref: params.swimmingPoolId},
    categoryId: params.categoryId,
  }),
}
