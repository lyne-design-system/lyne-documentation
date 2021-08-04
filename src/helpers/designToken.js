/**
 * Condition to determine if we found the final token object.
 * if we found keys for value, name, attributes and path then
 * we can be sure we found it.
 */
const isDesignTokenObject = (designTokenObject) => {
  const keys = Object.keys(designTokenObject);
  let foundCounter = 0;
  const keysToFind = [
    'value',
    'name',
    'attributes',
    'path'
  ];

  keysToFind.forEach((key) => {
    if (keys.indexOf(key) !== -1) {
      foundCounter++;
    }
  });

  return foundCounter === keysToFind.length;
};

/**
 * Recursively iterate over JSON until design token object
 * is found.
 */
const getDesignTokens = (json, _finalJson) => {
  const finalJson = _finalJson || [];

  if (!(typeof json === 'object' && json !== null)) {
    return finalJson;
  }

  const keys = Object.keys(json);

  while (keys.length > 0) {
    const key = keys.pop();
    const value = json[key];
    const isTokenObject = isDesignTokenObject(value);

    if (isTokenObject) {
      const fullName = value.path.join('-');

      value['fullName'] = fullName;
      finalJson.push(value);
    } else {
      getDesignTokens(value, finalJson);
    }
  }

  return finalJson;

};

export default getDesignTokens;
