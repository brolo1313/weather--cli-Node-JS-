import chalk from 'chalk';
import dedent from "dedent";

const printError =  (error) => {
    console.log(chalk.red('Error') +  ' ' + error);
}

const prinsSuccess = (message) => {
    console.log(chalk.green('Success') +  ' ' + message);
}

const printHelp = () => {
       
    console.log(
        dedent`${chalk.bgCyan( 'Help')}
        без параметров вывода погоды
        -s [City] для установки города
        -h  для вывода  помощи
        -t [API_KEY] для сохранения токена
        `
   
   );
}

export {  prinsSuccess, printError, printHelp}

