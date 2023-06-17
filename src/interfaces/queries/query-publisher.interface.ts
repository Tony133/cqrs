import { IQuery } from './query.interface';

/**
 * @publicApi
 */
export interface IQueryPublisher<QueryBase extends IQuery = IQuery> {
  publish<T extends QueryBase = QueryBase>(query: T): any;
}
