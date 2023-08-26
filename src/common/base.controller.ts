import {LoggerService} from "../logger/logger.service";
import e, {Response, Router} from "express";
import {IControllerRoute} from "./routs.interface";

export abstract class BaseController {

    private readonly _router: Router;

    protected constructor(private logger: LoggerService) {
        this._router = Router();
    }

    get router() {
        return this._router;
    }

    public send<T>(res: Response, code: number, message: T) {
        return res
            .type('application/json')
            .status(code)
            .json(message);
    }

    public ok<T>(res: Response, message: T) {
        return this.send<T>(res, 200, message);
    }

    public created(res: Response) {
        return res.sendStatus(201);
    }

    protected bindRoutes(routes: IControllerRoute[]) {
        for (const route of routes) {
            this.logger.info(`[${route.method}] ${route.path}`);
            const hendler = route.futc.bind(this);
            this.router[route.method](route.path, hendler);
        }
    }
}
