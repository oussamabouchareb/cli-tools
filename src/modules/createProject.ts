import { createDirectory, createFile } from "./index";
import {
  tsconfigTemplate,
  gitignoreTemplate,
  indexTemplate,
  nodemonTemplate,
  ormconfigTemplate,
  packageTemplate,
} from "../templates";
import { defaultModuleName } from "../config";
import { createModule } from "./createModule";

export function createProject(projectName: string, typeorm: boolean) {
  // create src directory
  createDirectory("src");

  // create modules directory
  createDirectory("src/modules");

  // create package.json
  createFile("package.json", packageTemplate(projectName));

  // check if typeorm arg is set to true
  if (typeorm) {
    // create ormconfig.json
    createFile("ormconfig.json", ormconfigTemplate);
  }

  // create nodemon.json
  createFile("nodemon.json", nodemonTemplate);

  // create .gitignore
  createFile(".gitignore", gitignoreTemplate);

  // create tsconfig.ts
  createFile("tsconfig.ts", tsconfigTemplate);

  // create default module
  createModule(defaultModuleName, typeorm);

  // create index file for src
  createFile("src/index.ts", indexTemplate(defaultModuleName));
}
