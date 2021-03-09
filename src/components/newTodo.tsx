import React, { ReactElement, Component } from 'react';
import classnames from 'classnames';
import styles from './newTodo.module.css';

import type { updateHandler } from '../pages/Todo';

interface ntodoProps {
  handler: updateHandler;
}

interface ntodoState {
  name: string;
  deadline: string;
  priority: number;
  editing: boolean;
}

class NewTodo extends Component<ntodoProps, ntodoState> {
  constructor(props: ntodoProps) {
    super(props);
    this.state = {name: '', deadline: '', priority: 0, editing: false};
  }

  addItem(): void {
    this.props.handler.addItem(this.state.name, this.state.deadline, this.state.priority);
    this.setState(state => {
      return {name: '', deadline: '', priority: 0, editing: false};
    });
  }

  changeName(nname: string): void {
    this.setState(state => {
      return {...state, name: nname};
    });
  }

  changeDeadline(ndeadline: string): void {
    this.setState(state => {
      return {...state, deadline: ndeadline};
    });
  }

  changePriority(npriority: number): void {
    this.setState(state => {
      return {...state, priority: npriority};
    });
  }

  render(): ReactElement {
    return (
      <div className={classnames(styles.additem)}>
        {!this.state.editing && (
          <div
            className={styles.cover}
            onClick={e => this.setState(state => {return {...state, editing: true}})}
          >+</div>
        )}
        <div className={classnames(styles.content)}>
          <div>
            <p><input
              placeholder="New item..."
              value={this.state.name}
              onChange={e => this.changeName(e.currentTarget.value)}
            /></p>
            <p>Due by: <input
              placeholder="Deadline..."
              value={this.state.deadline}
              onChange={e => this.changeDeadline(e.currentTarget.value)}
            /></p>
          </div>
          <div>
            <input
              type="range"
              value={this.state.priority}
              min='0'
              max='10'
              onChange={e => this.changePriority(parseInt(e.currentTarget.value))}
            />
            <span className={styles.priority}>{this.state.priority}</span>
          </div>
          <div>
            <a className={styles.del} onClick={e => this.addItem()}>Add</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTodo;
