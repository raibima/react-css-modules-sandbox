import React from 'react';

import styles from './Counter.css';

class Counter extends React.Component {
  state = {
    value: this.props.initialValue || 0,
  };

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className={styles.container}>
        <button onClick={this.decrement}>-</button>
        <div>{this.state.value}</div>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
