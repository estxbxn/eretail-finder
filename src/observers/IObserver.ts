/**
 * Interface for observing DOM mutations.
 */
export interface IObserver {
    start(): void;
    stop(): void;
}
