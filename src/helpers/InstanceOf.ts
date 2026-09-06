/**
 * Resolves the instance type of a class's static ("this") side,
 * used for polymorphic static factory methods (e.g. `static instance(): InstanceOf<this>`).
 */
export type InstanceOf<T> = T extends { prototype: infer P } ? P : never
