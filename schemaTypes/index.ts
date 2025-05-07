import {
  ageCategoryType,
  blockContentType,
  ratingType,
  faqObjectType,
  imageAlt,
  yearMonthRange,
  availableIconType,
  lectureFrequencyPricing,
  priceType,
} from '../customTypes'
import camps from './camps'
import swimmingPool from './swimmingPool'
import {siteSettings} from './siteSettings'
import {colors} from './colors'
import {navigation} from './navigation'
import {kidsCourse2} from './kidsCourse'
import blog from './blog'
import {preliminaryCourse, swimmingPoolInfoBar, swimmingPoolDetail} from './swimming-pool'

export const schemaTypes = [
  //Document types
  swimmingPool,
  camps,
  siteSettings,
  colors,
  navigation,
  kidsCourse2,
  blog,
  swimmingPoolInfoBar,
  swimmingPoolDetail,
  preliminaryCourse,

  //Custom types
  imageAlt,
  priceType,
  ageCategoryType,
  blockContentType,
  ratingType,
  faqObjectType,
  availableIconType,
  yearMonthRange,
  lectureFrequencyPricing,
]
