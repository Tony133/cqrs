import { IQuery } from './query.interface';

/**
 * @publicApi
 */
export interface IQueryHandler<T extends IQuery = any, TRes = any> {
  execute(query: T): Promise<TRes>;
}
