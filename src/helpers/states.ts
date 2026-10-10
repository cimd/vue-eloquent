/**
 * The state of the models and collections that are kept for the whole session: one instance by class and then by key. Keyed by the class itself, not its name,
 * which does not survive minification and would make two classes with the same name share an instance.
 */
const instances = new Map<object, Map<string, object>>()

let creating = 0

/**
 * Whether a state instance is being created right now. A collection does not tie its broadcast channel to the
 * component that happens to create it then, as the instance outlives that component
 */
export function isCreatingState(): boolean {
  return creating > 0
}

/**
 * A cleared state that is listening to a broadcast channel must stop
 */
function dispose(instance: object): void {
  const leave = (instance as { leaveChannel?: unknown }).leaveChannel
  if (typeof leave === 'function') {
    leave.call(instance)
  }
}

/**
 * The state (instance) of a class for a key, created by `create` the first time it is asked for
 */
export function getState<T extends object>(Ctor: object, key: string, create: () => T): T {
  let byKey = instances.get(Ctor)
  if (!byKey) {
    byKey = new Map()
    instances.set(Ctor, byKey)
  }

  let instance = byKey.get(key)
  if (!instance) {
    creating++
    try {
      instance = create()
    } finally {
      creating--
    }
    byKey.set(key, instance)
  }

  return instance as T
}

/**
 * Clears the state of a class for a key, or of all the class' keys without one
 */
export function forgetState(Ctor: object, key?: string): void {
  const byKey = instances.get(Ctor)
  if (!byKey) {
    return
  }

  if (key === undefined) {
    byKey.forEach(dispose)
    instances.delete(Ctor)
    return
  }

  const instance = byKey.get(key)
  if (instance) {
    dispose(instance)
    byKey.delete(key)
  }
}

/**
 * Clears the state of every class. For when the data must not outlive the session, as in a logout
 */
export function flushState(): void {
  instances.forEach(byKey => byKey.forEach(dispose))
  instances.clear()
}
