export function capitalizeFirstLetter(str: string) {
  const preparedString = str.toLowerCase().replace(/ /g, "");
  return str.charAt(0).toUpperCase().concat(preparedString.slice(1));
}
