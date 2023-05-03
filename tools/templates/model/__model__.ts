import Model from 'src/app/models/Model'
import { computed, reactive } from 'vue'

export default class __model__ extends Model {
  protected api = __model__Api

  public model = reactive({
  } as any)

  protected parameters = {
  }

  protected validations = computed(() => ({
    model: {

    }
  }))

  constructor(__model__?: Partial<I__model__>) {
    super()
    this.factory(__model__)
    super.initValidations()
  }
}
