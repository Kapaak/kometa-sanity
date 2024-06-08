import {Gear, PersonSimpleSwim} from '@phosphor-icons/react'
import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Kometa web - Studio')
    .items([
      S.listItem()
        .title('Kurzy pro děti - updated')
        .icon(PersonSimpleSwim)
        .child(
          S.documentTypeList('swimmingPool').child((swimmingPoolId) =>
            S.list()
              .title('Kategorie')
              .items([
                S.listItem()
                  .title('Začátečníci')
                  .child(() =>
                    S.documentTypeList({title: 'Pokročilí', schemaType: 'kidsCourse'})
                      .title('Kurzy')
                      .filter(
                        '_type == "kidsCourse" && categoryId == "basic" && swimmingPool._ref == $swimmingPoolId',
                      )
                      .params({swimmingPoolId})
                      //to prefill new document with some data
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
                    S.documentTypeList({title: 'Pokročilí', schemaType: 'kidsCourse'})
                      .title('Kurzy')
                      .filter(
                        '_type == "kidsCourse" && categoryId == "advanced" && swimmingPool._ref == $swimmingPoolId',
                      )
                      .params({swimmingPoolId})
                      //to prefill new document with some data
                      .initialValueTemplates([
                        S.initialValueTemplateItem('kids-course-template', {
                          swimmingPoolId,
                          categoryId: 'advanced',
                        }),
                      ]),
                  ),
                S.listItem()
                  .title('Kondiční')
                  .child(
                    S.documentTypeList({title: 'Kondiční', schemaType: 'kidsCourse'})
                      .title('Kurzy')
                      .filter(
                        '_type == "kidsCourse" && categoryId == "condition" && swimmingPool._ref == $swimmingPoolId',
                      )
                      .params({swimmingPoolId})
                      //to prefill new document with some data
                      .initialValueTemplates([
                        S.initialValueTemplateItem('kids-course-template', {
                          swimmingPoolId,
                          categoryId: 'condition',
                        }),
                      ]),
                  ),
              ]),
          ),
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['siteSettings', 'media.tag', 'kidsCourse', 'colors', 'navigation'].includes(
            listItem.getId() ?? '',
          ),
      ),
      S.divider(),
      S.listItem()
        .title('Nastavení webu')
        .icon(Gear)
        .child(
          S.list()
            .title('Nastavení webu')
            .items([
              S.listItem()
                .title('Metadata')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              S.listItem()
                .title('Změna barev')
                .child(S.document().schemaType('colors').documentId('colors')),
              S.listItem()
                .title('Změna navigace')
                .child(S.document().schemaType('navigation').documentId('navigation')),
            ]),
          // S.document().title('Nastavení stránky'), //singleton
          // .schemaType('siteSettings')
          // .documentId('siteSettings'),
        ), //singleton
    ])
