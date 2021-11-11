#!/usr/bin/env node

import inquirer from "inquirer";
import { createModule } from "./modules";
import { Command } from "commander";
import { defaultModuleName } from "./config";
import { createProject } from "./modules/createProject";
const program = new Command();
program.version("0.0.1");

program
  .description("a CLI tool from and for the delta project")
  .version("0.0.1", "-v, - version")
  .option("-m --module <string>", "create a module in an existing project")
  .option("-t --typeorm <boolean>", "create a module or a project with typeorm")
  .option("-p --project <string>", "create a new project")
  .parse(process.argv);

if (program.opts().module) {
  createModule(program.opts().module, program.opts().typeorm);
  process.exit();
} else if (program.opts().project) {
  createProject(program.opts().project, program.opts().typeorm);
  process.exit();
}

inquirer
  .prompt([
    {
      type: "confirm",
      name: "project",
      message: "create a new graphql-tools project?",
    },
  ])
  .then((answers) => {
    if (answers.project) {
      inquirer.prompt([
        { type: "confirm", name: "typescript", message: "include typescript?" },
        { type: "confirm", name: "typeorm", message: "include typeorm?" },
      ]);
    } else {
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "module",
            message: "Create a new graphql module?",
          },
        ])
        .then((answers) => {
          if (answers.module) {
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "moduleName",
                  message: "what's your module's name?",
                  default() {
                    return defaultModuleName;
                  },
                },
              ])
              .then((answers) => {
                if (answers.moduleName) {
                  const moduleName = answers.moduleName;
                  inquirer
                    .prompt([
                      {
                        type: "confirm",
                        name: "typeorm",
                        message:
                          "do you want to add a typeorm entity with this module?",
                        default() {
                          return false;
                        },
                      },
                    ])
                    .then((answers) => {
                      createModule(moduleName, answers.typeorm);
                    })
                    .catch((error) => {
                      throw error;
                    });
                }
              })
              .catch((error) => {
                throw error;
              });
          }
        })
        .catch((error) => {
          throw error;
        });
    }
  })
  .catch((error) => {
    throw error;
  });
