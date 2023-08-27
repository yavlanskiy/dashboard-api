export interface Ilogger {
    info:(...args: unknown[]) => void;
    error:(...args: unknown[]) => void;
    warn:(...args: unknown[]) => void
}
