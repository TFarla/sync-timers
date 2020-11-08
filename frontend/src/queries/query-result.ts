import QueryState from "./query-state";

export interface QueryResult<T> {
    result: T,
    state: QueryState
}

export default QueryResult;
