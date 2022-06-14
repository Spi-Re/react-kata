import Task from '../Task';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskList extends Component {
  static propTypes = {
    onToggleCompleted: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
  render() {
    const { onToggleCompleted, onDelete, todoData } = this.props;
    return (
      <ul className={'todo-list'}>
        {todoData.map((item) => {
          return (
            <Task
              key={item.id}
              {...item}
              onDelete={() => onDelete(item.id)}
              onToggleCompleted={() => onToggleCompleted(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}
