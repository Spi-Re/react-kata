import { formatDistanceToNow } from 'date-fns';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  static defaultProps = {
    time: new Date(),
    desc: 'Пусто',
    editing: false,
    completed: false,
  };

  static propTypes = {
    time: PropTypes.instanceOf(Date),
    desc: PropTypes.node,
    editing: PropTypes.bool,
    completed: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onToggleCompleted: PropTypes.func.isRequired,
  };

  createTime = this.props.time;

  state = {
    time: formatDistanceToNow(this.createTime, {
      includeSeconds: true,
    }),
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      time: formatDistanceToNow(this.createTime, {
        includeSeconds: true,
      }),
    });
  }

  render() {
    const { editing, desc, onDelete, onToggleCompleted, completed } = this.props;

    let classNames = '';
    if (completed) classNames += 'completed';
    if (editing) classNames += 'editing';

    return (
      <li className={classNames}>
        <div className={'view'}>
          <input className={'toggle'} type="checkbox" defaultChecked={completed} onClick={onToggleCompleted} />
          <label>
            <span className={'description'}>{desc}</span>
            <span className={'created'}>created {this.state.time} ago</span>
          </label>
          <button className={'icon icon-edit'}></button>
          <button className={'icon icon-destroy'} onClick={onDelete}></button>
        </div>

        {editing ? <input type="text" className={'edit'} placeHolder={desc} /> : null}
      </li>
    );
  }
}
