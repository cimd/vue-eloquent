import { default as EloquentError } from '../EloquentError';
import { IEloquentError } from '../IEloquentError';
import { IAxiosError } from './IAxiosError';
export default class ApiError extends EloquentError {
    name: string;
    constructor(message: string, err: IEloquentError | IAxiosError);
}
