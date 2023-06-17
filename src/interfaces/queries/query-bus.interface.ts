import { IQuery } from './query.interface';

/**
 * @publicApi
 */
export interface IQueryBus<QueryBase extends IQuery = IQuery> {
  execute<T extends QueryBase = QueryBase, TRes = any>(query: T): Promise<TRes>;
}
