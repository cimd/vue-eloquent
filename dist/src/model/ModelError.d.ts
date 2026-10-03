import { default as EloquentError } from '../EloquentError';
export default class ModelError extends EloquentError {
    name: string;
}
