import {PersonSimpleSwim} from '@phosphor-icons/react'
import {StructureBuilder} from 'sanity/structure'

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
                        .items([
                          S.listItem()
                            .title('Začátečníci')
                            .child(() =>
                              S.documentTypeList('kidsCourse')
                                .title('Začátečníci - Kurzy')
                                .filter(
                                  '_type == "kidsCourse" && categoryId == "basic" && swimmingPool._ref == $swimmingPoolId',
                                )
                                .params({swimmingPoolId})
                                .initialValueTemplates([
                                  S.initialValueTemplateItem('kids-course-template', {
                                    swimmingPoolId,
                                    categoryId: 'basic',
                                  }),
                                ]),
                            ),
                          S.listItem()
                            .title('Pokročilí')
                            .child(() =>
                              S.documentTypeList('kidsCourse')
                                .title('Pokročilí - Kurzy')
                                .filter(
                                  '_type == "kidsCourse" && categoryId == "advanced" && swimmingPool._ref == $swimmingPoolId',
                                )
                                .params({swimmingPoolId})
                                .initialValueTemplates([
                                  S.initialValueTemplateItem('kids-course-template', {
                                    swimmingPoolId,
                                    categoryId: 'advanced',
                                  }),
                                ]),
                            ),
                          S.listItem()
                            .title('Kondiční')
                            .child(() =>
                              S.documentTypeList('kidsCourse')
                                .title('Kondiční - Kurzy')
                                .filter(
                                  '_type == "kidsCourse" && categoryId == "condition" && swimmingPool._ref == $swimmingPoolId',
                                )
                                .params({swimmingPoolId})
                                .initialValueTemplates([
                                  S.initialValueTemplateItem('kids-course-template', {
                                    swimmingPoolId,
                                    categoryId: 'condition',
                                  }),
                                ]),
                            ),
                        ]),
                    ),
                  S.listItem()
                    .title('Předbězné lekce')
                    .child(
                      S.list()
                        .title('Kategorie')
                        .items([
                          S.listItem()
                            .title('Začátečníci')
                            .child(() =>
                              S.documentTypeList('preliminaryCourse')
                                .title('Začátečníci - Kurzy')
                                .filter(
                                  '_type == "preliminaryCourse" && categoryId == "basic" && swimmingPool._ref == $swimmingPoolId',
                                )
                                .params({swimmingPoolId})
                                .initialValueTemplates([
                                  S.initialValueTemplateItem('kids-course-template', {
                                    swimmingPoolId,
                                    categoryId: 'basic',
                                  }),
                                ]),
                            ),
                          S.listItem()
                            .title('Pokročilí')
                            .child(() =>
                              S.documentTypeList('preliminaryCourse')
                                .title('Pokročilí - Kurzy')
                                .filter(
                                  '_type == "preliminaryCourse" && categoryId == "advanced" && swimmingPool._ref == $swimmingPoolId',
                                )
                                .params({swimmingPoolId})
                                .initialValueTemplates([
                                  S.initialValueTemplateItem('kids-course-template', {
                                    swimmingPoolId,
                                    categoryId: 'advanced',
                                  }),
                                ]),
                            ),
                          S.listItem()
                            .title('Kondiční')
                            .child(() =>
                              S.documentTypeList('preliminaryCourse')
                                .title('Kondiční - Kurzy')
                                .filter(
                                  '_type == "preliminaryCourse" && categoryId == "condition" && swimmingPool._ref == $swimmingPoolId',
                                )
                                .params({swimmingPoolId})
                                .initialValueTemplates([
                                  S.initialValueTemplateItem('kids-course-template', {
                                    swimmingPoolId,
                                    categoryId: 'condition',
                                  }),
                                ]),
                            ),
                        ]),
                    ),
                  S.documentTypeListItem('home').child(
                    S.documentTypeList('home')
                      .filter('_type == "home" && swimmingPool._ref == $swimmingPoolId')
                      .params({swimmingPoolId})
                      .initialValueTemplates([
                        S.initialValueTemplateItem('home-template', {
                          swimmingPoolId,
                        }),
                      ]),
                  ),
                  S.documentTypeListItem('fileUpload').child(
                    S.documentTypeList('fileUpload')
                      .filter('_type == "fileUpload" && swimmingPool._ref == $swimmingPoolId')
                      .params({swimmingPoolId})
                      .initialValueTemplates([
                        S.initialValueTemplateItem('file-upload-template', {
                          swimmingPoolId,
                        }),
                      ]),
                  ),
                  S.documentTypeListItem('faq').child(
                    S.documentTypeList('faq')
                      .filter('_type == "faq" && swimmingPool._ref == $swimmingPoolId')
                      .params({swimmingPoolId})
                      .initialValueTemplates([
                        S.initialValueTemplateItem('faq-template', {
                          swimmingPoolId,
                        }),
                      ]),
                  ),
                  S.documentTypeListItem('infoBar').child(
                    S.documentTypeList('infoBar')
                      .filter('_type == "infoBar" && swimmingPool._ref == $swimmingPoolId')
                      .params({swimmingPoolId})
                      .initialValueTemplates([
                        S.initialValueTemplateItem('info-bar-template', {
                          swimmingPoolId,
                        }),
                      ]),
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
