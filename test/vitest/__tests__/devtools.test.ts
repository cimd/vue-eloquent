import { describe, expect, it, vi } from 'vitest'
import { setupDevtools } from '@/devtools/devtools'
import { setupDevtoolsPlugin } from '@vue/devtools-api'
import type { App } from 'vue'

vi.mock('@vue/devtools-api')
vi.mock('vue')
vi.mock('@/model/modelInspector')

describe('devtools', () => {
  it('Should successfully setup the Vue Eloquent DevTools Plugin with correct configuration', () => {
    const mockApp = {} as App
    const mockSetupDevtoolsPlugin = vi.mocked(setupDevtoolsPlugin)
    const mockAddInspector = vi.fn()
    const mockAddTimelineLayer = vi.fn()
    const mockOn = { getInspectorTree: vi.fn(), getInspectorState: vi.fn() }

    mockSetupDevtoolsPlugin.mockImplementation((_, callback) => {
      callback({
        addInspector: mockAddInspector,
        addTimelineLayer: mockAddTimelineLayer,
        on: mockOn,
      })
    })

    setupDevtools(mockApp)

    expect(mockSetupDevtoolsPlugin).toHaveBeenCalledWith(
      {
        id: 'vue-eloquent',
        label: 'Vue Eloquent',
        packageName: 'vue-eloquent',
        homepage: 'https://vue-eloquent.netlify.app/',
        app: mockApp,
      },
      expect.any(Function),
    )

    expect(mockAddInspector).toHaveBeenCalledWith({
      id: 'vue-eloquent',
      label: 'Vue Eloquent',
      icon: 'api',
    })

    expect(mockAddTimelineLayer).toHaveBeenCalledWith({
      id: 'vue-eloquent',
      color: 0xff984f,
      label: 'Vue Eloquent',
    })

    expect(mockOn.getInspectorTree).toHaveBeenCalled()
    expect(mockOn.getInspectorState).toHaveBeenCalled()
  })

  it('Should add the Vue Eloquent timeline layer with the correct id, color, and label', () => {
    const mockApp = {} as App
    const mockSetupDevtoolsPlugin = vi.mocked(setupDevtoolsPlugin)
    const mockAddTimelineLayer = vi.fn()

    mockSetupDevtoolsPlugin.mockImplementation((_, callback) => {
      callback({
        addTimelineLayer: mockAddTimelineLayer,
        on: { getInspectorTree: vi.fn(), getInspectorState: vi.fn() },
        addInspector: vi.fn(),
      })
    })

    setupDevtools(mockApp)

    expect(mockAddTimelineLayer).toHaveBeenCalledWith({
      id: 'vue-eloquent',
      color: 0xff984f,
      label: 'Vue Eloquent',
    })
  })
})
