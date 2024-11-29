import { ITablePagination, ITableColumn, ITableQueries, ITableFilter } from './types';

export interface DataToFormat {
    __typename?: string;
    count: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    page: number;
    docs: any[];
}
export declare const formatPagination: (dataToFormat: DataToFormat) => ITablePagination;
export declare const camelToSnake: (str: string | unknown) => any;
export declare const initialPagination: {
    limit: number;
    page: number;
};
export declare const generateUUID: () => any;
export declare const insertColumn: (newColumn: ITableColumn<any>, originalColumn: ITableColumn<any>[]) => ITableColumn<any>[];
export declare function updateSearchInUrl(params: ITableQueries): void;
export declare const parseURLSearchParams: () => ITableQueries;
export declare function newFiltersBasedInUrlSearch(original: ITableQueries, newFilters: ITableFilter[]): ITableFilter[];
