import {Container, ContainerModule, interfaces} from "inversify";
import {Ilogger} from "./logger/logger.interfase";
import {TYPES} from "./types";
import {LoggerService} from "./logger/logger.service";
import {ExeptionFilter} from "./errors/exeption.filter";
import {UsersController} from "./users/users.controller";
import {App} from "./app";
import {IExeptionFilter} from "./errors/exeption.filter.interfase";
import {IUsersController} from "./users/user.interface";

export const appBindings = new ContainerModule((bind:interfaces.Bind) => {
    bind<Ilogger>(TYPES.Ilogger).to(LoggerService);
    bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
    bind<IUsersController>(TYPES.UserController).to(UsersController);
    bind<App>(TYPES.Application).to(App);
})

function bootstrap(){
    const appContainer = new Container();
    appContainer.load(appBindings);
    const app = appContainer.get<App>(TYPES.Application);
    app.init();
    return {appContainer, app}
}

export const {app, appContainer} = bootstrap();


