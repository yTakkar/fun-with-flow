// @flow

import * as React from 'react'

type State = {
  count: number,
};

class Counter extends React.Component<{}, State> {
  static defaultProps = {
    count: 0
  }

  state = {
    count: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  render() {
    return <div>Count: {this.state.count}</div>;
  }
}
export default Counter