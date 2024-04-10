export class Menu {
  title: string;
  entries: string[];
  private _current = 0;
  get current() {
    return this._current;
  }
  set current(value) {
    if (0 <= value && value <= this.max) this._current = value;
  }
  get min() {
    return 0;
  }
  get max(): number {
    return this.entries.length - 1;
  }

  constructor(title: string, entries: string[]) {
    this.title = title;
    this.entries = entries;
  }

  print() {
    console.log(this.title);
    console.log(
      this.entries
        .map((v, i) => `${v}${i === this.current ? " - current" : ""}`)
        .join("\n")
    );
  }

  up() {
    this.current--;
  }

  down() {
    this.current++;
  }
}
