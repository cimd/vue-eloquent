import { IEloquentError } from './IEloquentError';
export default class EloquentError extends Error implements IEloquentError {
    message: string;
    name: string;
    /**
     * The original error
     */
    error: Error;
    constructor(message: string, err: unknown);
}
