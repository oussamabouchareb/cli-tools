import { capitalizeFirstLetter } from "../../utils";

export function typeTemplate(moduleName: string) {
  return `
  type ${capitalizeFirstLetter(moduleName)} {
    name: String
  }
  `;
}
