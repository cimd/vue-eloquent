import { default as Model } from './Model';
import { default as Collection } from '../collection/Collection';
export declare const eloquentModels: any[];
export declare const childrenNodes: any[];
export declare const childrenStates: any[];
export declare const addModelInspector: (model: Model<any> | Collection) => Promise<void>;
export declare const useModelInspector: () => {
    eloquentModels: any[];
    childrenNodes: any[];
    childrenStates: any[];
};
export declare const stateMap: (type: string, nodeUuid: string) => {
    model: {
        key: string;
        value: any;
    }[];
    state: {
        key: string;
        value: any;
    }[];
    validation: {
        key: string;
        value: any;
    }[];
} | {
    data: {
        key: string;
        value: any;
    }[];
    state: {
        key: string;
        value: any;
    }[];
    query: {
        key: string;
        value: any;
    }[];
    broadcast: {
        key: string;
        value: any;
    }[];
} | undefined;
