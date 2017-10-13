import { sort, compose, ascend, descend, prop } from 'ramda';
import moment from 'moment';

export const formatTime = timestamp =>
  moment(timestamp).format('MMMM D, YYYY hh:mm A');

export const convertToList = objectToConvert =>
  Object.values(objectToConvert).map(object => object);

const sortAscendingBy = compose(sort, ascend, prop);
const sortDescendingBy = compose(sort, descend, prop);

export const sortListBy = (flag, direction) => {
  return direction === 'ascending'
    ? sortAscendingBy(flag)
    : sortDescendingBy(flag);
};
