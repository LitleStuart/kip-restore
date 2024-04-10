import { Restorer } from "./Restorer";

try {
  const restorer = new Restorer();
  restorer
    .getSelectedBackup()
    .then((value) => console.log(restorer.backups[value]));
} catch (err) {
  console.error(err);
  console.log('Press "+" for exit...');
}
