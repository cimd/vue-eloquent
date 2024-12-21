import { default as EloquentError } from '../EloquentError';
export default class CollectionError extends EloquentError {
    name: string;
    constructor(message: string, err: Error);
}
