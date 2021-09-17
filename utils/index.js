export const sortByDate = (a, b) => {
  return new Date(b.front_matter.date) - new Date(a.front_matter.date);
};
