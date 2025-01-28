import { defineDocs, defineConfig, defineCollections } from 'fumadocs-mdx/config'
import { remarkTypeScriptToJavaScript } from 'fumadocs-docgen'

export const { docs, meta } = defineDocs({
  dir: 'content/docs',


})

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
})

export const utils = defineCollections({
  type: 'doc',
  dir: 'content/utils',
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkTypeScriptToJavaScript],
  },
})
