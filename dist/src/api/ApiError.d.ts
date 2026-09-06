import { default as EloquentError } from '../EloquentError';
import { IAxiosError } from './IAxiosError';
export default class ApiError extends EloquentError {
    error: IAxiosError;
    name: string;
    constructor(message: string, error: IAxiosError);
}
