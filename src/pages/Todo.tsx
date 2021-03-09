import React, { ReactElement, Component } from 'react';
import Layout from '@theme/Layout';
import styles from './Todo.module.css';
import Item from '../components/todoCard';
import v4 from 'uuid/v4';

import type { todoItem } from '../data/todoData';

export type updateHandler = {
  toggle: Function;
  remove: Function;
  setPriority: Function;
  rename: Function;
}

interface todoProps {

}

interface todoState {
  list: todoItem[];
}

class Todo extends Component<todoProps, todoState> {

  handler: updateHandler;

  constructor(props: todoProps) {
    super(props);
    let history: string|null = localStorage.getItem("jc_todolistData");
    let list: todoItem[] = [];
    if (history != null) {
      list = JSON.parse(history);
    } else {
      list.push({id: v4(), name: "Todo item", priority: 0, deadline: "1", done: false})
      list.push({id: v4(), name: "Todo item", priority: 0, deadline: "2", done: false})
      list.push({id: v4(), name: "Todo item", priority: 0, deadline: "3", done: false})
    }
    this.state = {list: list};

    this.handler = {
      toggle: (item: todoItem): void => {
        this.setState(state => {
          return {
            list: state.list.map(el => (el.id === item.id ? {...el, done: !item.done} : el))
          }
        });
      },
      remove: (item: todoItem): void => {
        this.setState(state => {
          return {
            list: state.list.filter((i) => { return i.id !== item.id; }),
          }
        });
      },
      setPriority: (item: todoItem, value: number): void => {
        this.setState(state => {
          let nlist = state.list.map(el => (el.id === item.id ? {...el, priority: value} : el))
          nlist = nlist.sort((a: todoItem, b: todoItem): number => { return a.priority - b.priority });
          return {
            list: nlist
          }
        });
      },
      rename: (item: todoItem): void => {
      },
    };

    this.addItem = this.addItem.bind(this)
  }

  addItem(): void {
    this.setState(state => {
      return {
        list: state.list.concat(
          [{id: v4(), name: "Todo item", priority: 0, deadline: "1", done: false}]
        )
      };
    })
  };

  render() {
    let todos: todoItem[] = this.state.list.filter(i => { return !i.done; });
    let dones: todoItem[] = this.state.list.filter(i => { return i.done; });
    
    return (
      <Layout
        title="Todo list"
        description="A convenient todo list"
      >
        <main>
          <div className="container margin-vert--lg">
            <div className={styles.todolist}>
              <h1>Todo list</h1>
              <p>A convenient todo list. Run on your own browser.</p>
              <h2>Todo</h2>
              <div className={styles.cardContainer}>
                {todos.map(
                  (item): ReactElement => (
                    <Item key={item.id} item={item} handler={this.handler} />
                  )
                )}
              </div>
              <h2>Done</h2>
              <div className={styles.cardContainer}>
                {dones.map(
                  (item): ReactElement => (
                    <Item key={item.id} item={item} handler={this.handler} />
                  )
                )}
              </div>
              <input placeholder="New item..." id={styles.addTextBox}/>
              <button onClick={this.addItem}>Add</button>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default Todo;
