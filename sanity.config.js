import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// document structure
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'jioujiou-sanity',

  projectId: 'icgcx46h',
  dataset: 'production',

  plugins: [structureTool({structure, defaultDocumentNode}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
