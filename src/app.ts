import express, {Express} from "express";
import {Server} from "http";
import {LoggerService} from "./logger/logger.service";
import {UsersController} from "./users/users.controller";

export class App {
    app: Express;
    port: number;
    server: Server;
    logger:LoggerService;
    userController: UsersController

    constructor(logger: LoggerService,
                userController: UsersController) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userController = userController
    }

    public userRoutes() {
        this.app.use('/users', this.userController.router);
    }

    public async init() {
        this.userRoutes();
        this.server = this.app.listen(this.port);
        this.logger.info(`Сервер запущен на http://localhost:${this.port}`);

    }
}
