import express, {Express} from "express";
import {Server} from "http";
import {LoggerService} from "./logger/logger.service";
import {UsersController} from "./users/users.controller";
import {ExeptionFilter} from "./errors/exeption.filter";

export class App {
    app: Express;
    port: number;
    server: Server;
    logger:LoggerService;
    userController: UsersController
    exeptionFilter: ExeptionFilter;

    constructor(logger: LoggerService,
                userController: UsersController,
                exeptionFilter: ExeptionFilter) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userController = userController;
        this.exeptionFilter = exeptionFilter;
    }

    public userRoutes() {
        this.app.use('/users', this.userController.router);
    }

    public useExeptionFilters() {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
    }

    public async init() {
        this.userRoutes();
        this.useExeptionFilters();
        this.server = this.app.listen(this.port);
        this.logger.info(`Сервер запущен на http://localhost:${this.port}`);

    }
}
