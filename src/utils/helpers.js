import moment from 'moment';

export const formatTime = timestamp =>
  moment(timestamp).format('MMMM D, YYYY hh:mm A');

export const convertToList = objectToConvert => {
  return Object.values(objectToConvert).map(object => object);
};