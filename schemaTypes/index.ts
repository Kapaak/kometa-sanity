import {ageCategoryType, blockContentType, courseType, imageAlt, priceType} from '../customTypes'
import camps from './camps'
import swimmingPool from './swimmingPool'
import {siteSettings} from './siteSettings'
import {colors} from './colors'
import {navigation} from './navigation'
import {kidsCourse2} from './kidsCourse'
import blog from './blog'

export const schemaTypes = [
  //Document types
  camps,
  swimmingPool,
  siteSettings,
  colors,
  navigation,
  kidsCourse2,
  blog,
  //Custom types
  imageAlt,
  priceType,
  ageCategoryType,
  blockContentType,
  courseType,
]
