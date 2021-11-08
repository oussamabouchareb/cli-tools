export function packageTemplate(projectName: string) {
  return `
  {
    "name": "${projectName.toLowerCase()}",
    "version": "0.0.1",
    "main": "index.ts",
    "license": "MIT",
    "scripts": {
      "start": "nodemon",
      "test": "npm run generate && jest"
    },
    "jest": {
      "preset": "ts-jest",
      "globals": {
        "ts-jest": {
          "diagnostics": {
            "warnOnly": true
          }
        }
      },
      "testEnvironment": "node"
    },
    "dependencies": {
      "@graphql-tools/graphql-file-loader": "^7.3.2",
      "@graphql-tools/load": "^7.4.1",
      "@graphql-tools/schema": "^8.3.0",
      "@graphql-tools/stitch": "^8.4.0",
      "express": "^4.17.1",
      "express-graphql": "^0.12.0",
      "graphql": "^15.5.0",
      "pg": "^8.5.1",
      "reflect-metadata": "^0.1.13",
      "typeorm": "^0.2.31"
    },
    "devDependencies": {
      "@types/jest": "^26.0.20",
      "@types/node": "^14.14.34",
      "jest": "^26.6.3",
      "nodemon": "^2.0.7",
      "prettier": "^2.2.1",
      "ts-jest": "^26.5.3",
      "ts-node": "^9.1.1",
      "tslint": "^6.1.3",
      "typescript": "^4.2.3"
    }
  }
  `;
}
