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
          const returnValue = usePathTitles ? value.name : value.path;

          return [returnValue, ...path];
        }

        return path;
      }
    }
  }

  return false;
};

const checkNavItemLevel = (navItem) => {
  let level = 0;

  if (navItem.path) {
    const split = navItem.path.split('/');

    split.forEach((part) => {
      const partLength = part.trim().length;

      if (partLength > 0) {
        level++;
      }
    });
  }

  return level;
};

const addLevelsToNavItems = (_nav) => {
  const nav = _nav;

  if (Array.isArray(nav)) {
    nav.forEach((_navItem) => {
      const navItem = _navItem;
      const level = checkNavItemLevel(navItem);

      if (level > 0) {
        navItem.level = level;
      }

      addLevelsToNavItems(navItem);
    });
  } else if (typeof nav === 'object') {
    const keys = Object.keys(nav);

    keys.forEach((key) => {
      const navItem = nav[key];

      const level = checkNavItemLevel(navItem);

      if (level > 0) {
        navItem.level = level;
      }

      addLevelsToNavItems(navItem);
    });
  }

  return nav;
};

export { addLevelsToNavItems, getPathOfNavItem };
