import {Template} from 'sanity'

type PostTemplate = {
  swimmingPoolId: string
  categoryId: string
}

export const skillRequirementTemplate: Template = {
  id: 'category-skill-required-template',
  title: 'Filled Post',
  schemaType: 'categorySkillRequirement',
  value: (params: PostTemplate) => ({
    swimmingPool: {_type: 'reference', _ref: params.swimmingPoolId},
    categoryId: params.categoryId,
  }),
}
