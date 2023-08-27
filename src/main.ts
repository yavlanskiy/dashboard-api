import {Container} from "inversify";
import {Ilogger} from "./logger/logger.interfase";
import {TYPES} from "./types";
import {LoggerService} from "./logger/logger.service";
import {ExeptionFilter} from "./errors/exeption.filter";
import {UsersController} from "./users/users.controller";
import {App} from "./app";
import {IExeptionFilter} from "./errors/exeption.filter.interfase";

    const appContainer = new Container();
    appContainer.bind<Ilogger>(TYPES.Ilogger).to(LoggerService);
    appContainer.bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
    appContainer.bind<UsersController>(TYPES.UserController).to(UsersController);
    appContainer.bind<App>(TYPES.Application).to(App);

    const app = appContainer.get<App>(TYPES.Application);

    app.init();

    export {app, appContainer};


