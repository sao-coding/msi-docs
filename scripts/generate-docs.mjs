import { generateFiles } from "fumadocs-openapi"

void generateFiles({
  input: ["./Knowledge-Base-API.yaml"], // the OpenAPI schemas
  output: "./content/docs/Knowledge-Base-API",
  per: "operation",
  groupBy: "tag"
})
