export const getExperience = () => {
  const start = new Date(2024, 7, 1);
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    now.getMonth() -
    start.getMonth();

  return Math.floor((months / 12) * 2) / 2;
};
