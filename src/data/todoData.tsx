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

  toDate(): Date {
    return new Date(this.year, this.month - 1, this.day);
  }
}

function compare(sortBy: string): (a: todoItem, b: todoItem) => number {
  switch (sortBy) {
    case "name":
      return (a, b) => (a.name >= b.name ? 1 : -1);
    case "deadline":
      return (a, b) => {
        const da = a.deadline,
          db = b.deadline;
        return da.year === db.year
          ? da.month === db.month
            ? da.day - db.day
            : da.month - db.month
          : da.year - db.year;
      };
    case "priority":
      return (a, b) => b.priority - a.priority;
  }
}

export class UpdateHandler {
  list: todoItem[];
  setList: (l: todoItem[]) => void;
  sortBy: string;

  constructor(list: todoItem[], setList: (l: todoItem[]) => void) {
    this.list = list;
    this.setList = setList;
    this.sortBy = "priority";
  }

  toggle(item: todoItem): void {
    this.setList(
      this.list.map((el) =>
        el.id === item.id ? { ...el, done: !item.done } : el,
      ),
    );
  }

  remove(item: todoItem): void {
    this.setList(this.list.filter((el) => el.id !== item.id));
  }

  setPriority(item: todoItem, value: number): void {
    const nlist = this.list.map((el) =>
      el.id === item.id ? { ...el, priority: value } : el,
    );
    nlist.sort(compare(this.sortBy));
    this.setList(nlist);
  }

  rename(item: todoItem): void {
    // TODO
  }

  addItem(title: string, deadline: myDate, priority: number): void {
    const nlist = this.list.concat([
      {
        id: String(Date.now()),
        name: title,
        priority,
        deadline,
        done: false,
      },
    ]);
    nlist.sort(compare(this.sortBy));
    this.setList(nlist);
  }

  update(): void {
    const nlist = [...this.list];
    nlist.sort(compare(this.sortBy));
    this.setList(nlist);
  }
}
