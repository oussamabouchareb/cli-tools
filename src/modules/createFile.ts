import fs from "fs";
import { join } from "path";
import chalk from "chalk";

export function createFile(fileName: string, data: string) {
  let path = join(process.cwd(), fileName);

  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, data);
  } else {
    console.log(chalk.bgYellow(chalk.black(`${path} already exists`)));
  }
}
