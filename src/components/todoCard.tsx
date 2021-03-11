import React, { ReactElement } from 'react';
import classnames from 'classnames';
import styles from './todoCard.module.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import type { todoItem } from '../data/todoData';
import type { updateHandler } from '../pages/Todo';

type itemProps = {
  item: todoItem;
  handler: updateHandler;
};

const Item = ({ item, handler }: itemProps): ReactElement => {
  return (
    <div className={classnames(styles.item, item.done ? styles.done : styles.todo)}>
      <div className={classnames(styles.content)}>
        <div>
          <span className={styles.todoTitle}>{item.name}</span>
          <span className={styles.deadline}>Due by: {`${item.deadline.getFullYear()}/${item.deadline.getMonth()+1}/${item.deadline.getDate()}`}</span>
        </div>
        <div className={styles.rangeContainer}>
          <div>
            <span className={styles.priority}>
              Priority: {item.priority}
            </span>
            <InputRange
              value={item.priority}
              minValue={0}
              maxValue={10}
              onChange={value => handler.setPriority(item, value)}
              onChangeComplete={() => handler.update()}
              formatLabel={() => ''}
            />
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={item.done}
              onChange={() => handler.toggle(item)}
            />
            <a className={styles.del} onClick={(e) => handler.remove(item)}>
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
