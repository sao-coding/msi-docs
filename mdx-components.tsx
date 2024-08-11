import defaultComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

import { openapi } from "@/app/source"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    APIPage: openapi.APIPage
  }
}
