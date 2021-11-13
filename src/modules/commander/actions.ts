import chalk from "chalk";
import { createModule } from "../index";

export function actions(name: string, options: any) {
  if (name.length >= 1 && typeof name === "string") {
    if (options.module && options.project) {
      console.error(
        chalk.bgBlack(
          chalk.red("Please, use either module or project not both"),
        ),
      );
      process.exit();
    } else {
      if (options.module) {
        createModule(name, options.typeorm);
      } else if (options.project) {
        //createProject(name, options.typeorm);
      } else {
        console.error(
          chalk.bgBlack(chalk.red("an Unexpected Error has occured")),
        );
        process.exit();
      }
    }
  } else {
    console.error(
      chalk.bgBlack(
        chalk.red(`Expected an argument of type string got ${name}`),
      ),
    );
    process.exit();
  }
}
