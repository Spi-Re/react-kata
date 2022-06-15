import { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  render() {
    const { onAddItem } = this.props;
    return (
      <header className={'header'}>
        <h1>todos</h1>
        <input
          className={'new-todo'}
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              onAddItem(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </header>
    );
  }
}

NewTaskForm.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};
