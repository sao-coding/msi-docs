import { loader } from "fumadocs-core/source"
import { createMDXSource } from "fumadocs-mdx"
import { createOpenAPI } from "fumadocs-openapi/server"

import { map } from "../.map"

export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map)
})

export const openapi = createOpenAPI({
  // Your OpenAPI Schema (content, url, or path)
  // relative to `cwd`
  documentOrPath: "./unkey.json"
})
