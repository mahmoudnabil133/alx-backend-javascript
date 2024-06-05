const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [k, v] in map.entries()) {
    if (v === 1) {
      map.set(k, 100);
    }
  }

  return map;
};

export default updateUniqueItems;
