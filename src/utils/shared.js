export const timestampToDate = (unixTimestamp) => {
  const date = new Date(unixTimestamp);
  return date.toDateString();
};
// Function used to convert an array of objects with id into an object of objects which have the id as theis key
export const organizeById = array => array.reduce((acc, curr) => {
  acc = {
    ...acc,
    [curr.id]: {
      ...curr,
    },
  };
  return acc;
}, {});
