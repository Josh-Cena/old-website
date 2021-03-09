import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './todoCard.module.css';

import type { todoItem } from '../data/todoData';
import type { updateHandler } from '../pages/Todo';

type itemProps = {
  item: todoItem;
  handler: updateHandler;
};

const Item = ({ item, handler }: itemProps): ReactElement => {
  const [value, setValue] = React.useState(item.priority);
  return (
    <div className={classnames(styles.item, item.done ? styles.done : styles.todo)}>
      <div className={styles.content}>
        <div>
          <input
            type="checkbox"
            defaultChecked={item.done}
            onChange={(e) => handler.toggle(item)}
          />
          {item.name}{' '}{item.deadline}
          <button className={styles.del} onClick={(e) => handler.remove(item)}>×</button>
        </div>
        <div>
          <input
            type="range"
            value={value}
            min='0'
            max='10'
            onChange={(e) => {
              setValue(parseInt(e.currentTarget.value));
              handler.setPriority(item, parseInt(e.currentTarget.value));
            }}
          />
          <span className={styles.priority}>{item.priority}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
