import {BaseController} from "../common/base.controller";
import {NextFunction, Request, Response} from "express";
import {HTTPError} from "../errors/http-error";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {Ilogger} from "../logger/logger.interfase";
import 'reflect-metadata'
import {IUsersController} from "./user.interface";

@injectable()
export class UsersController extends BaseController implements IUsersController{
    constructor(@inject(TYPES.Ilogger) private loggerService: Ilogger) {
        super(loggerService);
        this.bindRoutes([
            {path: '/register', method: "post", futc: this.register},
            {path: '/login', method: "post", futc: this.login},
        ])
    }

    login(req: Request, res: Response, next: NextFunction) {
        // this.ok(res, 'login')
        next(new HTTPError(401, 'autorization fail', 'login'))
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register')
    }
}
