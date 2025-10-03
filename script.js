import chalk from "chalk";

const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);
const sum = a + b;

console.log(chalk.yellow(`Сумма ${a} + ${b} = ${sum}`));