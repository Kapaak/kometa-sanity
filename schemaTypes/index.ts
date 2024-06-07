import kidCourse from './kid-course'
import {ageCategoryType, blockContentType, courseType, imageAlt, priceType} from '../customTypes'
import camps from './camps'
import swimmingPool from './swimmingPool'

export const schemaTypes = [
  //Document types
  kidCourse,
  camps,
  swimmingPool,
  //Custom types
  imageAlt,
  priceType,
  ageCategoryType,
  blockContentType,
  courseType,
]
