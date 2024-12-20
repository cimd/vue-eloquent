export default class EloquentError extends Error {
    message: string;
    name: string;
    error: Error;
    stack: any;
    constructor(message: string, err: Error);
}
