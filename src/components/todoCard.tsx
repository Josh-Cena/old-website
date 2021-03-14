import React, { ReactElement } from 'react';
import classnames from 'classnames';
import useThemeContext from '@theme/hooks/useThemeContext';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './todoCard.module.css';

import type { todoItem } from '../data/todoData';
import type { updateHandler } from '../pages/Todo';

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: '.25rem',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type itemProps = {
  item: todoItem;
  handler: updateHandler;
};

const Item = ({ item, handler }: itemProps): ReactElement => {
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

  return (
    <ThemeProvider theme={theme}>
      <Card className={classnames(classes.root, styles.card, item.done ? styles.done : styles.todo)}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Due by: {`${item.deadline.getFullYear()}/${item.deadline.getMonth()+1}/${item.deadline.getDate()}`}
          </Typography>
          <Typography variant="body2" component="p">
            <span className={styles.priority}>
              Priority: {item.priority}
            </span>
            <Slider
              value={item.priority}
              min={0}
              max={10}
              marks
              onChange={(e, value) => handler.setPriority(item, (value as number))}
              onChangeCommitted={() => handler.update()}
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Checkbox
            defaultChecked={item.done}
            color="primary"
            onChange={() => handler.toggle(item)}
          />
          <Button size="small" onClick={() => handler.remove(item)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default Item;
