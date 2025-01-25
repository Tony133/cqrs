import { Command } from '../../classes';
import { ICommand } from './command.interface';

<<<<<<< HEAD
/**
 * @publicApi
 */
export interface ICommandHandler<
  TCommand extends ICommand = any,
  TResult = any
> {
  execute(command: TCommand): Promise<TResult>;
}
||||||| 91a9d50
export interface ICommandHandler<
  TCommand extends ICommand = any,
  TResult = any
> {
  execute(command: TCommand): Promise<TResult>;
}
=======
/**
 * Represents a command handler.
 * Command handlers are used to execute commands.
 */
export type ICommandHandler<TCommand extends ICommand = any, TResult = any> =
  TCommand extends Command<infer InferredCommandResult>
    ? {
        /**
         * Executes a command.
         * @param command The command to execute.
         */
        execute(command: TCommand): Promise<InferredCommandResult>;
      }
    : {
        /**
         * Executes a command.
         * @param command The command to execute.
         */
        execute(command: TCommand): Promise<TResult>;
      };
>>>>>>> master
