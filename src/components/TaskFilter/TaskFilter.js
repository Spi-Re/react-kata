import { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskFilter extends Component {
  static defaultProps = {
    status: '',
    desc: 'button',
  };

  static propTypes = {
    status: PropTypes.string,
    desc: PropTypes.node,
    onFilter: PropTypes.func.isRequired,
  };
  render() {
    let { status, desc, onFilter } = this.props;

    return (
      <li>
        <button className={status} onClick={onFilter}>
          {desc}
        </button>
      </li>
    );
  }
}
