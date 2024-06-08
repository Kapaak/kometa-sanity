import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {csCZLocale} from '@sanity/locale-cs-cz'
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemaTypes'
import {structure} from './src/structure'
import {schemaTemplates} from './schemaTemplates'

export default defineConfig({
  name: 'default',
  title: 'kometa-web',

  projectId: '9vkkla99',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    csCZLocale(),
    visionTool(),
    media(),
  ],

  tools: (prev, {currentUser}) => {
    const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator')

    // If the user has the administrator role, return all tools.
    // If the user does not have the administrator role, filter out the vision tool.
    return isAdmin ? prev : prev.filter((tool) => tool.name !== 'vision')
  },

  schema: {
    types: schemaTypes,
    templates: schemaTemplates,
  },
})
