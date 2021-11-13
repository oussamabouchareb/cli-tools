import { Command } from "commander";
import { actions } from "./index";

export function CommanderInit() {
  const program = new Command();

  program
    .description("a CLI tool from and for the delta project")
    .version("1.0.2", "-v, - version")
    .argument("<name>", "name of a module or a project")
    .option("-m --module", "create a module in an existing project")
    .option("-t --typeorm", "create a module or a project with typeorm")
    .option("-p --project", "create a new project")
    .action((name, options) => {
      actions(name, options);
    })
    .parse(process.argv);
}
