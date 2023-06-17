import { IEvent } from './event.interface';

/**
 * @publicApi
 */
export interface IEventPublisher<EventBase extends IEvent = IEvent> {
  publish<T extends EventBase = EventBase>(event: T): any;
  publishAll?<T extends EventBase = EventBase>(events: T[]): any;
}
