import moment from 'moment';

export const formatTime = (timestamp: string): string =>
  moment(timestamp).format('MMMM D, YYYY hh:mm A')

export const convertToList = (byIdObject) => {
  return Object.keys(byIdObject).map((id) => byIdObject[id]);
}
