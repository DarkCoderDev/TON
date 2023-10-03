export const toTime = (date: Date): string => {
  const [hours, minutes] = date.toTimeString().slice(0, 8).split(':');

  return `${hours}:${minutes}`;
};
