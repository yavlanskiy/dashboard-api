import {NextFunction, Request, Response} from "express";
import {HTTPError} from "../errors/http-error";

export interface IUsersController {
    login:(req: Request, res: Response, next: NextFunction) => void;
    register:(req: Request, res: Response, next: NextFunction) => void;
}
