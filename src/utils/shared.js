import moment from 'moment';

export const timestampToDate = unixTimestamp => moment(unixTimestamp).format('MM/DD/YYYY HH:mm');
// Function used to convert an array of objects with id into an object
// of objects which have the id as theis key
export const organizeByKey = (key, array) => array.reduce((acc, curr) => ({
  ...acc,
  [curr[key]]: {
    ...curr,
  },
}), {});

export const getInitials = (string) => {
  const initials = string
    ? `${string[0]}${string[Math.floor(string.length / 2)]}${
      string[string.length - 1]}`.toUpperCase()
    : '+';
  return initials;
};

export const generateId = () => Math.random().toString(36).substring(2)
  + (new Date()).getTime().toString(36);

export const sortList = (posts, sort) => {
  const list = Object.values(posts).sort((a, b) => {
    if (sort.order === 'Ascending') {
      return a[sort.field].toString().localeCompare(b[sort.field].toString());
    }
    return b[sort.field].toString().localeCompare(a[sort.field].toString());
  });
  return organizeByKey('id', list);
};
