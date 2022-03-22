#!/ust/bin/env node   
// запускаем файл weather.js node 

import { getArgs } from './helpers/args.js'
import { printHelp, prinsSuccess, printError } from './services/log.service.js'
import { saveKeyValue, tokenDictionary } from './services/storeage.service.js'
import { getWeather } from './services/api.seprvice.js'

const saveToken = async (token) => {
    if(!token.length){
        printError('Введите токен API')
        return;
    }
    try {
        await saveKeyValue(tokenDictionary.token, token);
        prinsSuccess('Токен сохранен');
    } catch (e) {
        printError(e.message);
    }
    
}


const initCli = () => {
    const args = getArgs(process.argv)
    if (args.h){
        //help
        printHelp();
    }
    if (args.s){
    }
    if (args.t){
        return saveToken(args.t)
    }
    getWeather('kiev');
};

initCli();