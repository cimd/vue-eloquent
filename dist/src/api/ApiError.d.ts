import { default as EloquentError } from '../EloquentError';
import { IAxiosError } from './IAxiosError';
export default class ApiError extends EloquentError {
    name: string;
    error: IAxiosError;
    constructor(message: string, err: unknown);
}
