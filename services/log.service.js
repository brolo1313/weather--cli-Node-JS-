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

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgMagenta( 'Weather')} Погода в городе ${res.name}
        ${icon}   ${res.weather[0].description}
        Температура :   ${Math.ceil(res.main.temp) + '℉'} (ощущается как)   ${res.main.feels_like}
        `
   );
}

export {  prinsSuccess, printError, printHelp, printWeather}

