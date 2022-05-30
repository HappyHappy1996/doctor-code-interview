import * as moment from 'moment';

export function isTimestampBetween(timestamp: number, from: number, to: number): boolean {
  const date = moment(timestamp);
  return date.isBetween(moment(from), moment(to));
}
