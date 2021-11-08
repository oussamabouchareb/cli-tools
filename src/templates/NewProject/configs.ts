export const tsconfigTemplate = `
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "commonjs",
    "lib": ["esnext"],
    "strict": true,
    "strictPropertyInitialization": false,
    "rootDir": ".",
    "outDir": "dist",
    "sourceMap": true,
    "esModuleInterop": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  },
  "include": [
    "src/**/*",
    "orm/**/*",
  ],
  "exclude": ["node_modules"]
}
`;

export const gitignoreTemplate = "node_modules";

export const ormconfigTemplate = `{
  "type": "postgres",
  "host": "localhost",
  "port": "5432",
  "username": "postgres",
  "password": "postgres",
  "database": "postgres",

  "synchronize": true,
  "logging": false,
  "entities": ["src/orm/entity/**/*.ts"],
  "migrations": ["src/orm/migration/**/*.ts"],
  "subscribers": ["src/orm/subscriber/**/*.ts"],
  "cli": {
    "entitiesDir": "src/orm/entity",
    "migrationsDir": "src/orm/migration",
    "subscribersDir": "src/orm/subscriber"
  }
}`;
export const nodemonTemplate = `
{
  "watch": ["src"],
  "ext": "ts,json",
  "ignore": ["src/tests", "node_modules"],
  "exec": "ts-node  --transpile-only ./src/index.ts"
}
`;
export const contextTemplate = `
import {getConnection } from "typeorm";

export interface Context {
  db: getConnection
}

export const context = {

  db: getConnection(),
};
`;
