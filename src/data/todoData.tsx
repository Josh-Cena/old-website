import uuid from "uuid/v4";

export type todoItem = {
  id: string;
  name: string;
  deadline: myDate;
  done: boolean;
  priority: number;
};

export class myDate {
  year: number;
  month: number;
  day: number;

  constructor(date?: Date) {
    const now = date ?? new Date();
    this.year = now.getFullYear();
    this.month = now.getMonth() + 1;
    this.day = now.getDate();
  }

  toDate() {
    return new Date(this.year, this.month - 1, this.day);
  }
}

export class UpdateHandler {
  list: todoItem[];
  setList: (l: todoItem[]) => void;

  constructor(list: todoItem[], setList: (l: todoItem[]) => void) {
    this.list = list;
    this.setList = setList;
  }

  toggle(item: todoItem) {
    this.setList(
      this.list.map((el) =>
        el.id === item.id ? { ...el, done: !item.done } : el
      )
    );
  }

  remove(item: todoItem) {
    this.setList(this.list.filter((el) => el.id !== item.id));
  }

  setPriority(item: todoItem, value: number) {
    this.setList(
      this.list.map((el) =>
        el.id === item.id ? { ...el, priority: value } : el
      )
    );
  }

  rename(item: todoItem) {}

  addItem(title: string, deadline: myDate, priority: number) {
    const nlist = this.list.concat([
      {
        id: uuid(),
        name: title,
        priority: priority,
        deadline: deadline,
        done: false,
      },
    ]);
    nlist.sort((a, b) => b.priority - a.priority);
    this.setList(nlist);
  }

  update() {
    const nlist = [...this.list];
    nlist.sort((a, b) => b.priority - a.priority);
    this.setList(nlist);
  }
}
