import { Callout } from "fumadocs-ui/components/callout"
import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import defaultComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

import { openapi } from "@/app/source"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    img: ImageZoom as (props: React.ImgHTMLAttributes<HTMLImageElement>) => React.ReactElement,
    Callout: Callout,
    APIPage: openapi.APIPage
  }
}
