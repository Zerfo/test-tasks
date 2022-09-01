import React from 'react';
import Pt from 'prop-types';

import Interval from '../Interval';

class Timer extends React.Component {
  interval = null

  static propTypes = {
    currentInterval: Pt.number.isRequired,
  }

  state = {
    currentTime: 0,
  }

  handleStart = () => {
    const { currentInterval } = this.props;
    this.interval = setInterval(
      () => this.setState(prevState => ({
        currentTime: prevState.currentTime + currentInterval,
      })),
      currentInterval * 1000,
    );
  }

  handleStop = () => {
    clearInterval(this.interval);
    this.setState({ currentTime: 0 });
  }

  render() {
    const { currentTime } = this.state;
    return (
      <div>
        <Interval />
        <div>Секундомер: {currentTime} сек.</div>
        <div>
          <button onClick={this.handleStart}>Старт</button>
          <button onClick={this.handleStop}>Стоп</button>
        </div>
      </div>
    );
  }
}

export default Timer;
