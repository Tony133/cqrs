import { Query } from '../../classes';
import { IQuery } from './query.interface';

/**
 * @publicApi
 *
 * Represents a query handler.
 */
export type IQueryHandler<T extends IQuery = any, TRes = any> =
  T extends Query<infer InferredQueryResult>
    ? {
        /**
         * Executes a query.
         * @param query The query to execute.
         */
        execute(query: T): Promise<InferredQueryResult>;
      }
    : {
        /**
         * Executes a query.
         * @param query The query to execute.
         */
        execute(query: T): Promise<TRes>;
      };
