const sortByKey = (items, sortKey) => {
  items.sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];
    let result = 0;

    if (valueA > valueB) {
      result = 1;
    } else if (valueA < valueB) {
      result = -1;
    }

    return result;
  });

  return items;
};

export default sortByKey;
