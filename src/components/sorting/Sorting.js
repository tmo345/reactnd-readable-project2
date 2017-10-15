import React from 'react';

const sortOrders = [
  {
    value: 'timestamp-descending',
    text: 'Newest First',
  },
  {
    value: 'timestamp-ascending',
    text: 'Oldest First',
  },
  {
    value: 'voteScore-descending',
    text: 'Highest Votes First',
  },
  {
    value: 'voteScore-ascending',
    text: 'Lowest Votes First',
  },
];

const Sorting = ({ currentSort, setSortFlags }) => {
  return (
    <select
      onChange={e => {
        const order = e.target.value;
        const [flag, direction] = order.split('-');
        setSortFlags(flag, direction);
      }}
      value={currentSort}
    >
      {sortOrders.map(order => (
        <option key={order.value} value={order.value}>
          {order.text}
        </option>
      ))}
    </select>
  );
};

export default Sorting;
