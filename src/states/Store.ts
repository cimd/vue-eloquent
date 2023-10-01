import Api from '../api/Api'
import { reactive, watch } from 'vue'
import StoreApi from '../states/StoreApi'

export default abstract class Store extends Api {
  /**
   * The prefix of the store.
   * The final name will be store-[ClassName]-[prefix]
   *
   * @protected
   * @param { string | number } prefix
   */
  declare protected prefix: string | number

  /**
   * If enabled, it will automatically fetch the API once instantiated.
   * And push any changes to the API automatically. If disabled,
   * the methods [get] and [store] must be called manually.
   *
   * @protected
   * @param { boolean } liveSync
   */
  protected liveSync = true
  protected resource = 'eloquent-api/stores'

  private _storename = ''

  private api = StoreApi

  /**
   * State MUST be a reactive property.
   */
  declare state = reactive({})

  protected constructor() {
    super()
  }

  protected init() {
    if (!this.prefix) throw new Error('Prefix is not defined. Did you forget to define it?')

    this._storename = `store-${this.constructor.name}-${this.prefix}`
    // console.log('LiveSync: ', this.liveSync)
    if (this.liveSync) {
      this.get().then()
      watch(
        () => this.state,
        async () => {
          await this.store()
        },
        { deep: true }
      )
    }
  }

  async get()
  {
    const result = await this.api.get({ key: this._storename })
    Object.assign(this.state, result.data)
  }

  async store()
  {
    await this.api.store({ key: this._storename, value: this.state })
  }

  async delete()
  {
    await this.api.destroy({ key: this._storename }, false)
  }
}
