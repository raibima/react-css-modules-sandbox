import React from 'react';

import Counter from './components/Counter/Counter';

class Sandbox extends React.Component {
  render() {
    return (
      <div>
        <Counter initialValue={1} />
      </div>
    );
  }
}

export default Sandbox;
