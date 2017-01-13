var chalk = require("chalk");

var message = chalk.blue.underline("Hello ") + chalk.bgRed.bold.yellow("World");
console.log(message);