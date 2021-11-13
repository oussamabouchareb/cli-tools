#!/usr/bin/env node

import { CommanderInit } from "./modules/commander";
import chalk from "chalk";

if (process.argv[2]) {
  CommanderInit();
} else {
  console.error(
    chalk.bgBlack(
      chalk.red(`
usage: tdp-tools <name> [flags]
help: tdp-tools -h
`),
    ),
  );
  process.exit();
}
