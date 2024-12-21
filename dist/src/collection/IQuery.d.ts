import { QueryPage } from './IQueryPage';
export interface Query {
    fields?: string;
    include?: string;
    append?: string[];
    filter?: any[];
    paginate?: QueryPage;
    sort?: string;
}
