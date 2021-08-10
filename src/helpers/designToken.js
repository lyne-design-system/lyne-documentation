/**
 * Find design tokens by category
 */
const designTokensByCategory = (json, category) => json.filter((token) => token.attributes.category === category);

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
  designTokensByCategory,
  groupedTokens
};
