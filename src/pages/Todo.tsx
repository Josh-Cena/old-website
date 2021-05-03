import React, { ReactElement, useState, useEffect } from "react";
import Layout from "@theme/Layout";
import useThemeContext from "@theme/hooks/useThemeContext";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Translate from "@docusaurus/Translate";

import styles from "./Todo.module.css";
import Item from "../components/todoCard";
import NewItem from "../components/newTodo";
import { todoItem, UpdateHandler } from "../data/todoData";

interface MainProps {
  handler: UpdateHandler;
  todos: todoItem[];
  dones: todoItem[];
}

function Main({ handler, todos, dones }: MainProps): ReactElement {
  const { isDarkTheme } = useThemeContext();
  const theme = createMuiTheme({
    palette: {
      type: isDarkTheme ? "dark" : "light",
      primary: {
        light: "#4dcfca",
        main: "#39cac4",
        dark: "#31b8b2",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <InputLabel id="sort-by">Sort by</InputLabel>
      <Select
        labelId="sort-by"
      >
        <MenuItem value={10} selected>Priority</MenuItem>
        <MenuItem value={20}>Due date</MenuItem>
        <MenuItem value={30}>Label</MenuItem>
      </Select>
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
    </ThemeProvider>
  );
}

export default function Todo(): ReactElement {
  const [list, setList]: [todoItem[], (l: todoItem[]) => void] = useState([]);
  useEffect(() => {
    const history = localStorage.getItem("jc_todolistData");
    if (history !== null) setList(JSON.parse(history));
  }, []);
  useEffect(() => {
    localStorage.setItem("jc_todolistData", JSON.stringify(list));
  }, [list]);

  const handler = new UpdateHandler(list, setList);

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
            <Main todos={todos} dones={dones} handler={handler} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
