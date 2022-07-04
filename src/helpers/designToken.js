/**
 * Find design tokens by category.
 */
const designTokensByCategory = (json, category) =>
  json.filter((token) => token.attributes.category === category);

/**
 * Find design tokens by path.
 */
const designTokensByPath = (json, path) => json.filter((token) => token.path.indexOf(path) !== -1);

/**
 * Find design tokens by type.
 */
const designTokensByType = (json, type) => json.filter((token) => token.attributes.type === type);

/**
 * Adds the unit to the value of the given token.
 */
const addUnitToTokenValue = (_token, unit) => {
  const token = _token;

  token.value = `${token.value}${unit}`;

  return token;
};

/**
 * Group design tokens by attribute key
 */
const groupedTokens = (tokens, attribute) => {
  const tokensByGroups = {};

  tokens.forEach((token) => {
    const currentGroupKeys = Object.keys(tokensByGroups);
    const tokenGroup = token.attributes[attribute];

    if (tokenGroup) {
      if (currentGroupKeys.indexOf(tokenGroup.toString()) === -1) {
        tokensByGroups[tokenGroup] = [token];
      } else {
        tokensByGroups[tokenGroup].push(token);
      }
    }
  });

  return tokensByGroups;
};

export {
  addUnitToTokenValue,
  designTokensByCategory,
  designTokensByPath,
  designTokensByType,
  groupedTokens,
};
