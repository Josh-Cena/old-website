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
