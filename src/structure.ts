import {PersonSimpleSwim} from '@phosphor-icons/react'
import {StructureBuilder} from 'sanity/structure'
import {swimmingCategories} from '../constants/categories'

const filterTypes = [
  'siteSettings',
  'media.tag',
  'swimmingPool',
  'camp',
  'kidsCourse',
  'colors',
  'navigation',
  'home',
  'fileUpload',
  'faq',
  'infoBar',
  'preliminaryCourse',
  'swimmingPoolDetail',
]

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Kometa web - Studio')
    .items([
      S.listItem()
        .title('Detail bazénu')
        .icon(PersonSimpleSwim)
        .child(
          S.documentTypeList('swimmingPool')
            .title('Seznam bazénů')
            .child((swimmingPoolId) =>
              S.list()
                .title('Kategorie')
                .items([
                  S.listItem()
                    .title('Lekce')
                    .child(
                      S.list()
                        .title('Kategorie')
                        .items(
                          swimmingCategories.map((category) =>
                            S.listItem()
                              .title(category.label)
                              .child(() =>
                                S.documentTypeList('kidsCourse')
                                  .title(`${category.label} - Kurzy`)
                                  .filter(
                                    '_type == "kidsCourse" && categoryId == $categoryId && swimmingPool._ref == $swimmingPoolId',
                                  )
                                  .params({swimmingPoolId, categoryId: category.name})
                                  .initialValueTemplates([
                                    S.initialValueTemplateItem('kids-course-template', {
                                      swimmingPoolId,
                                      categoryId: category.name,
                                    }),
                                  ]),
                              ),
                          ),
                        ),
                    ),
                  S.listItem()
                    .title('Předbězné lekce')
                    .child(
                      S.list()
                        .title('Kategorie')
                        .items(
                          swimmingCategories.map((category) =>
                            S.listItem()
                              .title(category.label)
                              .child(() =>
                                S.documentTypeList('preliminaryCourse')
                                  .title(`${category.label} - Kurzy`)
                                  .filter(
                                    '_type == "preliminaryCourse" && categoryId == $categoryId && swimmingPool._ref == $swimmingPoolId',
                                  )
                                  .params({swimmingPoolId, categoryId: category.name})
                                  .initialValueTemplates([
                                    S.initialValueTemplateItem('kids-course-template', {
                                      swimmingPoolId,
                                      categoryId: category.name,
                                    }),
                                  ]),
                              ),
                          ),
                        ),
                    ),
                  //TODO: aktualne neresim
                  // S.documentTypeListItem('infoBar').child(
                  //   S.documentTypeList('infoBar')
                  //     .filter('_type == "infoBar" && swimmingPool._ref == $swimmingPoolId')
                  //     .params({swimmingPoolId})
                  //     .initialValueTemplates([
                  //       S.initialValueTemplateItem('info-bar-template', {
                  //         swimmingPoolId,
                  //       }),
                  //     ]),
                  // ),
                  S.listItem()
                    .title('Data ke stránce')
                    .child(
                      S.list()
                        .title('Kategorie')
                        .items(
                          swimmingCategories.map((category) =>
                            S.listItem()
                              .title(category.label)
                              .child(() =>
                                S.documentWithInitialValueTemplate(
                                  'swimming-pool-details-template',
                                  {
                                    swimmingPoolId,
                                    categoryId: category.name,
                                  },
                                )
                                  .documentId(`${category.name}-${swimmingPoolId}`)
                                  .title(category.label),
                              ),
                          ),
                        ),
                    ),
                ]),
            ),
        ),
      S.documentTypeListItem('swimmingPool'),
      S.divider(),
      S.documentTypeListItem('camp'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !filterTypes.includes(listItem.getId() ?? ''),
      ),
    ])
