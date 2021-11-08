import inquirer from "inquirer";
import { createModule } from "./modules";
import { Command } from "commander";

const program = new Command();
program.version("0.0.1");

program
  .description("a CLI tool from and for the delta project")
  .version("0.0.1", "-v, - version");

program.option("-m --module <string>").option("-t --typeorm <boolean>");

program.parse(process.argv);

if (program.opts().module) {
  createModule(program.opts().module, program.opts().typeorm);
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
                    return "myModule";
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
