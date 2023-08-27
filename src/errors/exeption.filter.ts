import {NextFunction, Request, Response} from "express";
import {LoggerService} from "../logger/logger.service";
import {IExeptionFilter} from "./exeption.filter.interfase";
import {HTTPError} from "./http-error";
import {inject, injectable} from "inversify";
import {Ilogger} from "../logger/logger.interfase";
import {TYPES} from "../types";
import 'reflect-metadata'

@injectable()
export class ExeptionFilter implements IExeptionFilter{
    constructor(@inject(TYPES.Ilogger) private logger: Ilogger) {
    }
    catch(err: Error | HTTPError, req:Request, res: Response, next: NextFunction){
        if (err instanceof HTTPError) {
            this.logger.error(`[${err.conttext}] Ошибка ${err.statusCode} ${err.message}`);
            res.status(err.statusCode).send({err: err.message});
        } else {
            this.logger.error(`${err.message}`);
            res.status(500).send({err: err.message});
        }
    }
}
