import { sort, compose, ascend, descend, prop } from 'ramda';
import moment from 'moment';

export const formatTime = timestamp =>
  moment(timestamp).format('MMMM D, YYYY hh:mm A');

/**
 * Accepts an object whose values are objects and returns are array of the object values.
 * For example, the post state is made up of key:value pairs of postId:postObject. This function
 * accepts the post state and returns and array of post objects.
 */
export const convertToList = objectToConvert =>
  Object.values(objectToConvert).map(object => object);

/**
 * Compose ramda prop, ascend, and sort. Resulting function accepts a property and an array and
 * returns a new array sorted by that flag in an ascending direction.
 */
const sortAscending = compose(sort, ascend, prop);

/**
 * Compose ramda functions: prop, descend, and sort. Resulting function accepts a property and an array and
 * returns a new array sorted by that flag in a descending direction.
 */
const sortDescending = compose(sort, descend, prop);

/**
 * Takes a property flag and direction. Checks direction and partially applies either sortAscending
 * or sortDescending to the passed in flag. Resulting function accepts an array and returns a new array
 * sorted by the flag and direction.
 */
export const sortListBy = (flag, direction) => {
  return direction === 'ascending' ? sortAscending(flag) : sortDescending(flag);
};

/**
 *  Build a sort function by accepting a property flag and direction. Compose convertToList and the
 *  partially applied result of sortListBy(flag, direction). The composed function accepts an object
 *  (post or comment state) and returned a new sorted array.
 */
export const buildSortFunction = (flag, direction) => {
  const sortListByFlagDirection = sortListBy(flag, direction);
  return compose(sortListByFlagDirection, convertToList);
};
