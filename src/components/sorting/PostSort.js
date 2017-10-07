import React, { Component } from 'react';
import { List, Icon } from 'semantic-ui-react';

class PostSort extends Component {
  state = {
    activeSortValue: 'timestamp-descending',
  };

  sortOrders = [
    {
      value: 'timestamp-descending',
      text: 'Newest Posts First',
    },
    {
      value: 'timestamp-ascending',
      text: 'Oldest Posts First',
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

  setActiveSort = sort => this.setState({ activeSortValue: sort });

  handleSetPostFlag = e => {
    const order = e.target.value;
    this.setActiveSort(order);

    const flag = order.split('-')[0];
    const direction = order.split('-')[1];
    this.props.setSortPostByFlag(flag, direction);
  };

  render() {
    return (
      <select
        onChange={this.handleSetPostFlag}
        value={this.state.activeSortValue}
      >
        {this.sortOrders.map(order => (
          <option key={order.value} value={order.value}>
            {order.text}
          </option>
        ))}
      </select>
    );
  }
}

export default PostSort;
