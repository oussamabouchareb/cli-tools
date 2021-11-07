import { capitalizeFirstLetter } from "../utils";

export function schemaTemplate(moduleName: string) {
  return `
import { addResolversToSchema } from "@graphql-tools/schema";
import { create${capitalizeFirstLetter(moduleName)} } from "./mutations";
import { loadSchemaSync } from "@graphql-tools/load";
import { join } from "path";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

export const ${moduleName.toLowerCase()}SubSchema = addResolversToSchema({
  schema: loadSchemaSync(
    [
      join(__dirname, "./graphql/type.graphql"),
      join(__dirname, "./graphql/operations.graphql"),

    ],
    {
      loaders: [new GraphQLFileLoader()],
    }
  ),
  resolvers: {
    Query: {
    },
    Mutation: {
      create${capitalizeFirstLetter(moduleName)}:create${capitalizeFirstLetter(
    moduleName
  )},
    },
    Subscription: {
    }
  },
});`;
}
