import { HidNpadButton } from "@nx.js/constants";
import { Kip } from "./Kip";
import { Menu } from "./Menu";

export class Restorer {
  backups: string[] = [];
  menu!: Menu;
  requestAnimationFrameId?: number;

  constructor() {
    const fileNames = Switch.readDirSync("sdmc:/atmosphere/kips/.bak/");
    if (!fileNames || fileNames.length < 1) {
      throw Error("No backups found!");
    }
    this.backups = fileNames;
    this.menu = new Menu("Select your backup:", fileNames);
    this.drawMenu();
  }

  drawMenu() {
    this.menu.print();
  }

  getSelectedBackup() {}

  private handleInput(event: UIEvent) {
    if (event.detail & HidNpadButton.AnyDown) {
      this.menu.down();
    } else if (event.detail & HidNpadButton.AnyUp) {
      this.menu.up();
    } else if (event.detail & HidNpadButton.A) {
      return Promise.resolve(this.menu.current);
    }
  }
}
