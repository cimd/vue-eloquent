/**
 * Whether a state instance is being created right now. A collection does not tie its broadcast channel to the
 * component that happens to create it then, as the instance outlives that component
 */
export declare function isCreatingState(): boolean;
/**
 * The state (instance) of a class for a key, created by `create` the first time it is asked for
 */
export declare function getState<T extends object>(Ctor: object, key: string, create: () => T): T;
/**
 * Clears the state of a class for a key, or of all the class' keys without one
 */
export declare function forgetState(Ctor: object, key?: string): void;
/**
 * Clears the state of every class. For when the data must not outlive the session, as in a logout
 */
export declare function flushState(): void;
