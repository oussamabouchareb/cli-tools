import fs from "fs";
import { join } from "path";
import chalk from "chalk";

export function createDirectory(dirName: string) {
  const path = join(process.cwd(), dirName);
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  } else {
    console.warn(chalk.bgYellow(chalk.black(`${path} already exists`)));
  }
}
