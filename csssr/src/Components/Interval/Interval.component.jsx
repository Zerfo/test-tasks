import React from 'react';
import Pt from 'prop-types';

class Interval extends React.Component {
  static propTypes = {
    currentInterval: Pt.number.isRequired,
    changeInterval: Pt.func.isRequired,
  }

  render() {
    const { currentInterval, changeInterval } = this.props;
    return (
      <div>
        <span>Интервал обновления секундомера: {currentInterval} сек.</span>
        <span>
          <button onClick={() => changeInterval(-1)}>-</button>
          <button onClick={() => changeInterval(1)}>+</button>
        </span>
      </div>
    );
  }
}

export default Interval;
