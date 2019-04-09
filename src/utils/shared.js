export const timestampToDate = (unixTimestamp) => {
  const date = new Date(unixTimestamp);
  return date.toDateString();
};
