export const timestampToDate = (unixTimestamp) => {
  const date = new Date(unixTimestamp);
  return date.toDateString();
};
// Function used to convert an array of objects with id into an object
// of objects which have the id as theis key
export const organizeByKey = (key, array) => array.reduce((acc, curr) => ({
  ...acc,
  [curr[key]]: {
    ...curr,
  },
}), {});

export const getInitials = string => `${
  string[0]}${
  string[Math.floor(string.length / 2)]
}${string[string.length - 1]}`.toUpperCase();
