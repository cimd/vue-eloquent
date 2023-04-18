import { required } from '@vuelidate/validators'
import { computed, reactive } from 'vue'
import { Model } from '../../src'
import PostApi from './PostApi'
import { IPost } from './PostInterface'

export default class Post extends Model {
  protected api = PostApi

  public model = reactive({
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
    title: undefined,
    text: undefined,
  } as IPost)

  protected parameters = {
    title: 'New Post',
  }

  constructor(post?: IPost) {
    super()
    this.factory(post)
    super.initValidations()
  }

  protected validations = computed(() => ({
    model: {
      title: {
        required
      },
      description: { required },
    }
  }))
}
