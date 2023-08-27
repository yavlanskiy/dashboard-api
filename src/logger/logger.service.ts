import {Logger} from "tslog";
import {Ilogger} from "./logger.interfase";
import {injectable} from "inversify";
import 'reflect-metadata'

@injectable()
export class LoggerService implements Ilogger{
    public logger: Logger;

    constructor() {
        this.logger = new Logger({
            displayInstanceName: false,
            displayLoggerName: false,
            displayFilePath: 'hidden',
            displayFunctionName: false
        });
    }

    info(...args: unknown[]) {
        this.logger.info(args)
    }

    error(...args: unknown[]) {
        this.logger.error(args)
    }

    warn(...args: unknown[]) {
        this.logger.warn(args)
    }
}
