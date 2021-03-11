import React, { ReactElement, Component } from 'react';
import classnames from 'classnames';
import styles from './newTodo.module.css';
import DatePicker from 'react-datepicker';
import InputRange from 'react-input-range';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';

import type { updateHandler } from '../pages/Todo';

interface ntodoProps {
  handler: updateHandler;
}

interface ntodoState {
  name: string;
  deadline: Date;
  priority: number;
  editing: boolean;
}

class NewTodo extends Component<ntodoProps, ntodoState> {
  constructor(props: ntodoProps) {
    super(props);
    this.state = {name: '', deadline: new Date(), priority: 0, editing: false};
  }

  addItem(): void {
    this.props.handler.addItem(this.state.name, this.state.deadline, this.state.priority);
    this.setState(state => {
      return {name: '', deadline: new Date(), priority: 0, editing: false};
    });
  }

  changeName(nname: string): void {
    this.setState(state => {
      return {...state, name: nname};
    });
  }

  changeDeadline(ndeadline: Date): void {
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
            onClick={() => this.setState(state => {return {...state, editing: true}})}
          >+</div>
        )}
        <div className={classnames(styles.content)}>
          <div>
            <span>
              <input
                className={styles.todoTitle}
                placeholder="New item..."
                value={this.state.name}
                onChange={e => this.changeName(e.currentTarget.value)}
              />
            </span>
            <span className={styles.deadline}>
              Due by: 
              <DatePicker
                selected={this.state.deadline}
                onChange={(date: Date) => this.changeDeadline(date)}
              />
            </span>
          </div>
          <div className={styles.cardActions}>
            <div>
              <span className={styles.priority}>
                Priority: {this.state.priority}
              </span>
              <InputRange
                value={this.state.priority}
                minValue={0}
                maxValue={10}
                onChange={value => this.changePriority(value)}
                formatLabel={() => ''}
              />
            </div>
            <div>
              <a className={styles.del} onClick={() => this.addItem()}>Add</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTodo;
