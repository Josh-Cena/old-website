import React, { ReactElement, Component } from 'react';
import Layout from '@theme/Layout';
import styles from './Todo.module.css';
import Item from '../components/todoCard';
import NewItem from '../components/newTodo';
import v4 from 'uuid/v4';

import type { todoItem } from '../data/todoData';

export type updateHandler = {
  toggle: Function;
  remove: Function;
  setPriority: Function;
  rename: Function;
  addItem: Function;
  update: Function;
}

interface todoProps {}

interface todoState {
  list: todoItem[];
}

class Todo extends Component<todoProps, todoState> {

  handler: updateHandler;

  constructor(props: todoProps) {
    super(props);
    let history: string|null = localStorage.getItem("jc_todolistData");
    let list: todoItem[] = [];
    if (history != null)
      list = JSON.parse(history);
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
          let nlist = state.list.map(el => (el.id === item.id ? {...el, priority: value} : el));
          return {
            list: nlist
          }
        });
      },
      rename: (item: todoItem): void => {
      },
      addItem: (title: string, deadline: string, priority: number): void => {
        this.setState(state => {
          let nlist = state.list.concat(
            [{id: v4(), name: title, priority: priority, deadline: deadline, done: false}]
          );
          nlist.sort((a: todoItem, b: todoItem): number => { return b.priority - a.priority });
          return {
            list: nlist
          };
        })
      },
      update: (): void => {
        this.setState(state => {
          let nlist = [...state.list];
          nlist.sort((a: todoItem, b: todoItem): number => { return b.priority - a.priority });
          return {
            list: nlist
          }
        });
      }
    };
  }

  render(): ReactElement {
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
                <NewItem handler={this.handler}></NewItem>
              </div>
              <h2>Done</h2>
              <div className={styles.cardContainer}>
                {dones.map(
                  (item): ReactElement => (
                    <Item key={item.id} item={item} handler={this.handler} />
                  )
                )}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default Todo;
