import { loader } from "fumadocs-core/source"
import { createMDXSource, defaultSchemas } from "fumadocs-mdx"
import { createOpenAPI } from "fumadocs-openapi/server"
import { attachFile } from "fumadocs-openapi/server"
import path from "path"
import { z } from "zod"

import { map } from "@/.map"

const frontmatter = defaultSchemas.frontmatter.extend({
  method: z.string().optional()
})

export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map, {
    schema: {
      frontmatter
    }
  }),
  pageTree: {
    attachFile
  }
  // other props
})

export const openapi = createOpenAPI({
  // Your OpenAPI Schema (content, url, or path)
  // relative to `cwd`
  // documentOrPath: "./Knowledge-Base-API.yaml"
  documentOrPath: path.resolve(process.cwd(), "Knowledge-Base-API.yaml")
})
