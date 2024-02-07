// utils.ts
export const formatDateHuman = (inputDate: string): string => {
  const date = new Date(inputDate);

  const monthNames = [
    "ene", "feb", "mar", "abr", "may", "jun",
    "jul", "ago", "sep", "oct", "nov", "dic"
  ];

  const monthName = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${day} ${monthName}, ${year}`;
};
