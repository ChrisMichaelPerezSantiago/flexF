const Enum = (enumeration) => {
  const result = Object.entries(enumeration).reduce((result, [key, value]) => {
    result[(result[key] = value)] = key;
    return result;
  }, {});
  return Object.freeze(result);
};

module.exports = Enum;
