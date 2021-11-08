import { capitalizeFirstLetter } from "../../utils";

export function indexTemplate(moduleName: string) {
  return `
import express from "express";
import { graphqlHTTP } from "express-graphql";
import {${
    moduleName.toLowerCase
  }SubSchema} from "./modules/${capitalizeFirstLetter(moduleName)}";
import {context} from "./context"
import {createConnection} from "typeorm"
// build the combined schema
export const gatewaySchema = stitchSchemas({
  subschemas: [${moduleName.toLowerCase}SubSchema],
});
createConnection()
const app = express();
app.use(
  "/",
  graphqlHTTP({ schema: gatewaySchema, graphiql: true, context: context })
);

app.listen("4000", () => {
  console.info("🚀 Server ready at http://localhost:4000");
});`;
}
