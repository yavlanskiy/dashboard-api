import express, {Express} from "express";
import {userRouter} from "./users/users";
import {Server} from "http";
import {LoggerService} from "./logger/logger.service";

export class App {
    app: Express;
    port: number;
    server: Server;
    logger:LoggerService;

    constructor(logger: LoggerService) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
    }

    public userRoutes() {
        this.app.use('/users', userRouter);
    }

    public async init() {
        this.userRoutes();
        this.server = this.app.listen(this.port);
        this.logger.info(`Сервер запущен на http://localhost:${this.port}`);

    }
}
