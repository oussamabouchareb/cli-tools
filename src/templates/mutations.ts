import { capitalizeFirstLetter } from "../utils";

export function mutationsTemplate(moduleName: string) {
  return `import { getConnection } from "typeorm";
import { ${capitalizeFirstLetter(
    moduleName,
  )} } from "../../orm/entity/${capitalizeFirstLetter(moduleName)}";

export async function create${capitalizeFirstLetter(moduleName)}(
  __root: any,
  args: any,
  __ctx: any,
  __info: any
) {
  const ${moduleName.toLowerCase()} = new ${capitalizeFirstLetter(
    moduleName,
  )}();

  ${moduleName.toLowerCase()}.name = args.name;

  return await getConnection()
    .manager.save(${capitalizeFirstLetter(moduleName)})
    .then((data) => data)
    .catch((err) => err);
}`;
}
