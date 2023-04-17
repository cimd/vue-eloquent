// import { faker } from '@faker-js/faker'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import Task from 'src/modules/Application/models/Task/Task'
import { describe, it } from 'vitest'

installQuasarPlugin()

const testObj = {
  id: 1,
  name: 'My Name',
  status: 1
}

describe('Task Class', async () => {
  it('creates the class', async () => {
    const model = new Task(testObj)
    console.log(model)
    expect(typeof model).toBe('object')
  })
})
