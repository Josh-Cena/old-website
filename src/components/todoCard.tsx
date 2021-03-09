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
  return (
    <div className={classnames(styles.item, item.done ? styles.done : styles.todo)}>
      <div className={classnames(styles.content)}>
        <div>
          <p>{item.name}</p>
          <p>Due by: {item.deadline}</p>
        </div>
        <div>
          <input
            type="range"
            defaultValue={item.priority}
            min='0'
            max='10'
            onChange={(e) => handler.setPriority(item, parseInt(e.currentTarget.value))}
            onMouseUp={(e) => handler.update()}
          />
          <span className={styles.priority}>{item.priority}</span>
        </div>
        <div className="card-actions">
          <input
            type="checkbox"
            defaultChecked={item.done}
            onChange={(e) => handler.toggle(item)}
          />
          <a className={styles.del} onClick={(e) => handler.remove(item)}>
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}

export default Item;
