import { required } from '@vuelidate/validators'
import { computed, reactive } from 'vue'
import { Model } from '../src/index'
import PostApi from './PostApi'
import { IPost } from './PostInterface'
import UserApi from './UserApi'
import { IUser } from './UserInterface'

export default class Post extends Model {
  protected api = PostApi

  public model = reactive({
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
    author_id: undefined,
    title: undefined,
    text: undefined,
    author: undefined as IUser,
    readers: undefined as IUser[],
  } as IPost)

  protected parameters = {
    title: 'New Post',
  }

  constructor(post?: IPost) {
    super()
    super.factory(post)
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

  protected updating()
  {
    // strip html tags from this.model.text
  }

  async author()
  {
    return await this.hasOne<IUser>(UserApi, this.model.author_id)
  }

  async readers()
  {
    return await this.hasMany<IUser>(UserApi, 'id', this.model.author_id)
  }
}
