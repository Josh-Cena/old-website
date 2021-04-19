import React, { ReactElement, useState, useEffect } from "react";
import Layout from "@theme/Layout";
import uuid from "uuid/v4";
import styles from "./Todo.module.css";
import Item from "../components/todoCard";
import NewItem from "../components/newTodo";

import Translate from "@docusaurus/Translate";

import type { todoItem, myDate } from "../data/todoData";

export type updateHandler = {
  toggle: (item: todoItem) => void;
  remove: (item: todoItem) => void;
  setPriority: (item: todoItem, value: number) => void;
  rename: (item: todoItem) => void;
  addItem: (title: string, deadline: myDate, priority: number) => void;
  update: () => void;
};

export default function Todo(): ReactElement {
  const [list, setList]: [todoItem[], (l: todoItem[]) => void] = useState([]);
  useEffect(() => {
    const history: string = localStorage.getItem("jc_todolistData");
    if (history !== null) setList(JSON.parse(history));
  }, []);
  useEffect(() => {
    localStorage.setItem("jc_todolistData", JSON.stringify(list));
  }, [list]);

  const handler: updateHandler = {
    toggle: (item) => {
      setList(
        list.map((el) => (el.id === item.id ? { ...el, done: !item.done } : el))
      );
    },
    remove: (item) => {
      setList(list.filter((el) => el.id !== item.id));
    },
    setPriority: (item, value) => {
      setList(
        list.map((el) => (el.id === item.id ? { ...el, priority: value } : el))
      );
    },
    rename: (item) => {},
    addItem: (title, deadline, priority) => {
      const nlist = list.concat([
        {
          id: uuid(),
          name: title,
          priority: priority,
          deadline: deadline,
          done: false,
        },
      ]);
      nlist.sort((a, b) => b.priority - a.priority);
      setList(nlist);
    },
    update: () => {
      const nlist = [...list];
      nlist.sort((a, b) => b.priority - a.priority);
      setList(nlist);
    },
  };

  const todos = list.filter((i) => !i.done);
  const dones = list.filter((i) => i.done);

  return (
    <Layout title="Todo list" description="A convenient todo list">
      <main>
        <div className="container margin-vert--lg">
          <div className={styles.todolist}>
            <h1>
              <Translate id="todo.title">Todo list</Translate>
            </h1>
            <p style={{ textAlign: "left" }}>
              <Translate
                id="todo.desc"
                values={{
                  note: (
                    <b>
                      <Translate id="todo.desc.note">Note:</Translate>
                    </b>
                  ),
                  link: (
                    <a href="https://github.com/Computerization/New-member-practice-commit/tree/master/2019/Josh-Cena/Joshua-Todolist%20with%20vue">
                      <Translate id="todo.desc.link">our club's repo</Translate>
                    </a>
                  ),
                }}
              >
                {
                  "{note} This is not intended to be functional, but merely a showcase of what I had once created. That was probably my first independent project, originally with plain HTML/CSS/JavaScript, later refactored with Vue. It was committed to {link}. Every time I look back at those days when I was green and ignorant, I find a lot of experiences worth reminiscing, and this has always been one of them. The only unfortunate thing was that the original version used Vue and here I had to use React; plus, to match the page style, I drastically modified everything. So it's like the ship of Theseus—every single line of code has been changed, but believe it or not, it's still the same Todo list project."
                }
              </Translate>
            </p>
            <h2>
              <Translate id="todo.todoTitle">Todo</Translate>
            </h2>
            <div className={styles.cardContainer}>
              {todos.map((item) => (
                <Item key={item.id} item={item} handler={handler} />
              ))}
              <NewItem handler={handler}></NewItem>
            </div>
            <h2>
              <Translate id="todo.doneTitle">Done</Translate>
            </h2>
            <div className={styles.cardContainer}>
              {dones.map((item) => (
                <Item key={item.id} item={item} handler={handler} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
