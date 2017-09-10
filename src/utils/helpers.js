// @flow

import moment from 'moment';

export const formatTime = (momentDate) =>
  momentDate.format('MMMM D, YYYY hh:mm A')
