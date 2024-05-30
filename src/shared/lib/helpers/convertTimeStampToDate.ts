import { checkLessThanTen } from '@/shared/lib/helpers/checkLessThanTen';

export const convertTimeStampToDate = (timestamp: number) => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = checkLessThanTen(date.getMonth() + 1);
  const day = checkLessThanTen(date.getDate());

  const hours = checkLessThanTen(date.getHours());
  const minutes = checkLessThanTen(date.getMinutes());

  return `${year}.${month}.${day} - ${hours}:${minutes}`;
};
