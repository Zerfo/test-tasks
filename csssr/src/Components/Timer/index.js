import connect from '../../Slomux/Connect';

import Timer from './Timer.component';

const mapStateToProps = state => ({
  currentInterval: state,
});

export default connect(
  mapStateToProps,
  null,
)(Timer);
