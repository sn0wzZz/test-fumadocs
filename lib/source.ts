import { docs, meta, blog as blogPosts, utils as utilsContent } from '@/.source'
import { createMDXSource } from 'fumadocs-mdx'
import { loader } from 'fumadocs-core/source'
import { createOpenAPI } from 'fumadocs-openapi/server'
import { attachFile } from 'fumadocs-openapi/server'

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
})

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts, []),
})

export const utils = loader({
  pageTree: {
    attachFile,
  },
  baseUrl: '/utils',
  source: createMDXSource(utilsContent, []),
})

export const openapi = createOpenAPI()
