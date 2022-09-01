import connect from '../../Slomux/Connect';
import { changeInterval } from '../../actions';

import Interval from './Interval.component';

const mapStateToProps = state => ({
  currentInterval: state,
});
const mapDispatchToProps = dispatch => ({
  changeInterval: value => dispatch(changeInterval(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Interval);
