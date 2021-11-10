import { capitalizeFirstLetter } from "../../utils";

export function operationsTemplate(moduleName: string) {
  return `
  type Query {
  }
  type mutation {
    create${capitalizeFirstLetter(
      moduleName,
    )}(name: String!):${capitalizeFirstLetter(moduleName)}
  }
  type Subscription {
  }
  `;
}
