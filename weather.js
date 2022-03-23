#!/ust/bin/env node
// запускаем файл weather.js node

import { getArgs } from "./helpers/args.js";
import {
  printHelp,
  prinsSuccess,
  printError,
  printWeather,
} from "./services/log.service.js";
import {
  saveKeyValue,
  tokenDictionary,
  getKeyValue,
} from "./services/storeage.service.js";
import { getWeather, getIcon } from "./services/api.seprvice.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Введите токен API");
    return;
  }
  try {
    await saveKeyValue(tokenDictionary.token, token);
    prinsSuccess("Токен сохранен");
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("Введите город");
    return;
  }
  try {
    await saveKeyValue(tokenDictionary.city, city);
    prinsSuccess("Город сохранен");
  } catch (e) {
    printError(e.message);
  }
};

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? await getKeyValue(tokenDictionary.city);
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (e) {
    if (e?.response?.status == 404) {
      printError("Неверно указан город");
    } else if (e?.response?.status == 401) {
      printError("Неверно указан токэн");
    } else {
      printError(e.message);
    }
  }
};

const initCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    //help
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getForcast();
};

initCli();
