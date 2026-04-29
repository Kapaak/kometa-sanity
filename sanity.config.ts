import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {csCZLocale} from '@sanity/locale-cs-cz'
import {media} from 'sanity-plugin-media'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemaTypes'
import {structure} from './src/structure'
import {schemaTemplates} from './schemaTemplates'

const sharedConfig = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',

  plugins: [
    structureTool({
      structure,
    }),
    csCZLocale(),
    visionTool(),
    media(),
  ],

  tools: (prev: any, {currentUser}: any) => {
    const isAdmin = currentUser?.roles.some((role: any) => role.name === 'administrator')
    return isAdmin ? prev : prev.filter((tool: any) => tool.name !== 'vision')
  },

  schema: {
    types: schemaTypes,
    templates: schemaTemplates,
  },
}

export default defineConfig([
  {
    ...sharedConfig,
    name: 'production',
    title: 'kometa-web',
    basePath: '/production',
    dataset: 'production',
  },
  {
    ...sharedConfig,
    name: 'development',
    title: 'kometa-web (test)',
    basePath: '/development',
    dataset: 'development',
  },
])
