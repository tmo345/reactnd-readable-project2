// @flow

import moment from 'moment';

export const formatTime = (timestamp: string): string =>
  moment(timestamp).format('MMMM D, YYYY hh:mm A')
