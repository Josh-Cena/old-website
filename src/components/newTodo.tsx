import React, { ReactElement, useState } from 'react';
import classnames from 'classnames';
import useThemeContext from '@theme/hooks/useThemeContext';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import styles from './newTodo.module.css';
import type { updateHandler } from '../pages/Todo';

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: '.25rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  },
  pos: {
    marginBottom: 12,
  },
});

type ntodoProps = {
  handler: updateHandler;
}

const NewTodo = ({ handler }: ntodoProps): ReactElement => {
  const classes = useStyles();
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  const theme = createMuiTheme({
    palette: {
      type: isDarkTheme ? 'dark' : 'light',
      primary: {
        light: '#4dcfca',
        main: '#39cac4',
        dark: '#31b8b2',
      },
    },
  });
  const [item, setItem] = useState({
    name: '',
    deadline: new Date(),
    priority: 0,
    editing: false,
  });

  return (
    <ThemeProvider theme={theme}>
      <Card className={classnames(classes.root, styles.additem)}>
        {!item.editing && (
          <div
            className={styles.cover}
            onClick={() => setItem({...item, editing: true})}
          >+</div>
        )}
        <CardContent>
          <TextField
            label="New item"
            multiline
            variant="outlined"
            margin="dense"
            value={item.name}
            onChange={e => setItem({...item, name: e.currentTarget.value})}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="Deadline"
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              margin="dense"
              format="yyyy/M/d"
              value={item.deadline}
              onChange={value => setItem({...item, deadline: value})}
            />
          </MuiPickersUtilsProvider>
          <Typography variant="body2" component="p">
            <span className={styles.priority}>
              Priority: {item.priority}
            </span>
            <Slider
              value={item.priority}
              min={0}
              max={10}
              marks
              onChange={(e, value) => setItem({...item, priority: (value as number)})}
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => {
            handler.addItem(item.name, item.deadline, item.priority);
            setItem({name: '', deadline: new Date(), priority: 0, editing: false});
          }}>
            Add
          </Button>
          <Button size="small" onClick={() => {
            setItem({name: '', deadline: new Date(), priority: 0, editing: false});
          }}>
            Cancel
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default NewTodo;