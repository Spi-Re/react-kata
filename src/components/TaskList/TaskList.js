import { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

export default class TaskList extends Component {
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

TaskList.propTypes = {
  onToggleCompleted: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
