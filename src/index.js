export function cssStringToObject(cssString, options = { useCamelCase: true }) {
  const declarationRegex = /([\w-]*)\s*:\s*([^;]*)/g;
  let match,
    cssObject = {};

  while ((match = declarationRegex.exec(cssString))) {
    let property = match[1];

    if (options.useCamelCase) {
      property = property.replace(/-(\w)/g, (match, char) =>
        char.toUpperCase()
      );
    }

    cssObject[property] = match[2].trim();
  }
  return cssObject;
}

export function cssObjectToString(cssObject) {
  return Object.entries(cssObject)
    .map(([property, value]) => {
      property = property.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
      return `${property}: ${value};`;
    })
    .join(" ");
}

const StyleSerializer = {
  cssStringToObject: cssStringToObject,
  cssObjectToString: cssObjectToString
};

export default StyleSerializer;
