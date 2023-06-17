import { IEvent } from './event.interface';

/**
 * @publicApi
 */
export interface IEventHandler<T extends IEvent = any> {
  handle(event: T): any;
}
