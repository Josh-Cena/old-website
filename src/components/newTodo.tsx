import React, { ReactElement, useState } from "react";
import clsx from "clsx";
import useThemeContext from "@theme/hooks/useThemeContext";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Translate from "@docusaurus/Translate";

import styles from "./newTodo.module.css";
import { myDate, UpdateHandler } from "../data/todoData";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 15,
    backgroundColor: "#fff",
    borderRadius: ".25rem",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  },
  pos: {
    marginBottom: 12,
  },
});

type ntodoProps = {
  handler: UpdateHandler;
};

export default function NewTodo({ handler }: ntodoProps): ReactElement {
  const classes = useStyles();
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
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
  const [item, setItem] = useState({
    name: "",
    deadline: new myDate(),
    priority: 0,
    editing: false,
  });

  return (
    <ThemeProvider theme={theme}>
      <Card className={clsx(classes.root, styles.additem)}>
        {!item.editing && (
          <div
            className={styles.cover}
            onClick={() => setItem({ ...item, editing: true })}
          >
            +
          </div>
        )}
        <CardContent>
          <TextField
            label={<Translate id="todo.new">New item</Translate>}
            className={styles.field}
            multiline
            variant="outlined"
            margin="dense"
            value={item.name}
            onChange={(e) => setItem({ ...item, name: e.currentTarget.value })}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label={<Translate id="todo.due">Deadline</Translate>}
              className={styles.field}
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              margin="dense"
              format="yyyy/M/d"
              value={item.deadline.toDate()}
              onChange={(value) =>
                setItem({ ...item, deadline: new myDate(value) })
              }
            />
          </MuiPickersUtilsProvider>
          <Typography variant="body2" component="p">
            <span className={styles.priority}>
              <Translate id="todo.priority">Priority: </Translate>
              {item.priority}
            </span>
            <Slider
              value={item.priority}
              min={0}
              max={10}
              marks
              onChange={(e, value) =>
                setItem({ ...item, priority: value as number })
              }
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              handler.addItem(item.name, item.deadline, item.priority);
              setItem({
                name: "",
                deadline: new myDate(),
                priority: 0,
                editing: false,
              });
            }}
          >
            <Translate id="todo.add">Add</Translate>
          </Button>
          <Button
            size="small"
            onClick={() => {
              setItem({
                name: "",
                deadline: new myDate(),
                priority: 0,
                editing: false,
              });
            }}
          >
            <Translate id="todo.cancel">Cancel</Translate>
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
