import {defineType} from 'sanity'
import {IconInput} from '../components/IconInput'
import {FaqPreview} from '../components/FaqPreview'

export const faqObjectType = defineType({
  name: 'faqObjectType',
  type: 'object',
  title: 'FAQ',
  fields: [
    {
      name: 'title',
      title: 'Nadpis',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Vyber ikonu',
      type: 'availableIconType',
      components: {
        input: IconInput,
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    },
  ],
  components: {
    preview: FaqPreview,
  },
  preview: {
    select: {
      title: 'title',
      icon: 'icon',
    },
  },
})
