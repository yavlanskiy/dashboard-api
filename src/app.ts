import express, {Express} from "express";
import {Server} from "http";
import {UsersController} from "./users/users.controller";
import {ExeptionFilter} from "./errors/exeption.filter";
import {inject, injectable} from "inversify";
import {TYPES} from "./types";
import {Ilogger} from "./logger/logger.interfase";
import 'reflect-metadata';

@injectable()
export class App {
    app: Express;
    port: number;
    server: Server;

    constructor(@inject(TYPES.Ilogger) private logger: Ilogger,
                @inject(TYPES.UserController) private userController: UsersController,
                @inject(TYPES.ExeptionFilter) private exeptionFilter: ExeptionFilter) {
        this.app = express();
        this.port = 8000;
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
