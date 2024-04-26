import { describe, expect, it } from 'vitest'
import Acl from '../../../examples/Acl'
import { Action } from '../../../src/index.js'

const permission = {
  create: true,
  read: true,
  update: true,
  delete: true
}

describe('permissions', () => {
  it('creates instance', async () => {
    const acl = new Acl(permission)

    expect(acl.can('create')).toBeTruthy()
    expect(acl.can('update')).toBeTruthy()
    expect(acl.can('read')).toBeTruthy()
    expect(acl.can('delete')).toBeTruthy()
    expect(acl.can('view')).toBe(undefined)
  })
  it('no permissions', async () => {
    console.log('NO PERMISSIONS')
    const acl = new Acl({ update: true })
    acl.updating()

    expect(acl.can('create')).toBeFalsy()
    expect(acl.can('update')).toBeTruthy()
    expect(acl.can('read')).toBeFalsy()
    expect(acl.can('delete')).toBeFalsy()
  })
  it('creating', async () => {
    const acl = new Acl(permission)

    const result = acl.creating()

    expect(result).toBeTruthy()
    expect(acl.action).toEqual('create')
    expect(acl.isCreating()).toBeTruthy()
  })
  it('updating', async () => {
    const acl = new Acl(permission)

    const result = acl.updating()

    expect(result).toBeTruthy()
    expect(acl.action).toEqual('update')
    expect(acl.isUpdating()).toBeTruthy()
  })
  it('deleting', async () => {
    const acl = new Acl(permission)

    const result = acl.deleting()

    expect(result).toBeTruthy()
    expect(acl.action).toEqual('delete')
    expect(acl.isDeleting()).toBeTruthy()
  })
  it('reading', async () => {
    const acl = new Acl(permission)

    const result = acl.reading()

    expect(result).toBeTruthy()
    expect(acl.action).toEqual('read')
    expect(acl.isReading()).toBeTruthy()
  })
  it('edit form', async () => {
    const acl = new Acl(permission)

    const result = acl.edit()

    expect(result).toBeTruthy()
    expect(acl.action).toEqual('update')
  })
  it('is read only', async () => {
    const acl = new Acl(permission)
    acl.reading()

    expect(acl.isReadOnly()).toBeTruthy()
  })
  it('is not read only', async () => {
    const acl = new Acl(permission)
    acl.updating()

    expect(acl.isReadOnly()).toBeFalsy()
  })
  it('sets actions', async () => {
    const acl = new Acl(permission)
    acl.action = Action.UPDATE

    expect(acl.action).toEqual(Action.UPDATE)
  })
  it('reports cannot', async () => {
    const acl = new Acl(permission)

    expect(acl.cannot(Action.CREATE)).toBeFalsy()
  })
})
