import { createDirectory, createFile } from "./index";
import { join } from "path";
import {
  schemaTemplate,
  mutationsTemplate,
  operationsTemplate,
  typeTemplate,
  entityTemplate,
} from "../templates";
import { capitalizeFirstLetter } from "../utils";

export function createModule(moduleName: string) {
  const pathToModule = join("src", "modules", moduleName);
  const pathToORM = join("src", "orm");
  const pathToEntity = join(pathToORM, "entity");

  createDirectory(pathToORM);
  createDirectory(pathToEntity);
  // root module folder
  createDirectory(pathToModule);

  // graphql
  createDirectory(join(pathToModule, "graphql"));
  // type.graphql
  createFile(
    join(pathToModule, "graphql", "type.graphql"),
    typeTemplate(moduleName)
  );
  // operations.graphql
  createFile(
    join(pathToModule, "graphql", "operations.graphql"),
    operationsTemplate(moduleName)
  );
  // mutations.ts
  createFile(join(pathToModule, "mutations.ts"), mutationsTemplate(moduleName));
  // schema.ts
  createFile(join(pathToModule, "schema.ts"), schemaTemplate(moduleName));
  // index.ts
  createFile(join(pathToModule, "index.ts"), 'export * from "./schema"');
  // validations.ts
  createFile(join(pathToModule, "validations.ts"), "");
  // queries.ts
  createFile(join(pathToModule, "queries.ts"), "");
  createFile(
    join(pathToEntity, `${capitalizeFirstLetter(moduleName)}.ts`),
    entityTemplate(moduleName)
  );
}
