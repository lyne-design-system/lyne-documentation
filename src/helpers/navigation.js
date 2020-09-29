const getPathOfNavItem = (obj, search, usePathTitles) => {
  for (const item of Object.entries(obj)) {
    const value = item[1];

    if (value === search) {
      return [];
    }

    if (value && typeof value === 'object') {
      const path = getPathOfNavItem(value, search, usePathTitles);

      if (path) {
        if (value.path) {

          const returnValue = usePathTitles
            ? value.name
            : value.path;

          return [
            returnValue,
            ...path
          ];
        }

        return path;
      }
    }
  }

  return false;
};

export default getPathOfNavItem;
