import { unix } from 'moment';

export function isTimestampBetween(timestamp: number, from: number, to: number): boolean {
  const date = unix(timestamp);
  const fromDate = unix(from);
  const toDate = unix(to);

  return date.isSame(fromDate) || date.isSame(toDate) || date.isBetween(fromDate, toDate);
}

export function isValidDate(timestamp: number) {
  return unix(timestamp).isValid();
}
