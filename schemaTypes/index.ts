import {
  ageCategoryType,
  blockContentType,
  ratingType,
  faqObjectType,
  imageAlt,
  availableIconType,
  priceType,
} from '../customTypes'
import camps from './camps'
import swimmingPool from './swimmingPool'
import {siteSettings} from './siteSettings'
import {colors} from './colors'
import {navigation} from './navigation'
import {kidsCourse2} from './kidsCourse'
import blog from './blog'
import infoBar from './settings/info-bar'
import home from './settings/home'
import fileUpload from './settings/file-upload'
import faq from './settings/faq'

export const schemaTypes = [
  //Document types
  swimmingPool,
  camps,
  siteSettings,
  colors,
  navigation,
  kidsCourse2,
  blog,
  home,
  fileUpload,
  faq,
  infoBar,
  // perliminaryCourse, -- tohle jeste pridat do tech obecnych kurzu

  //Custom types
  imageAlt,
  priceType,
  ageCategoryType,
  blockContentType,
  ratingType,
  faqObjectType,
  availableIconType,
]
