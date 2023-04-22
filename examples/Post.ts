import { required } from '@vuelidate/validators'
import { computed, reactive } from 'vue'
import { Model } from '../src/index'
import PostApi from './PostApi'
import { IPost } from './PostInterface'
import UserApi from '../test/mocks/UserApi'
import { IUser } from '../test/mocks/UserInterface'

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

  protected updating()
  {
    // strip html tags from this.model.text
  }

  async author(): Promise<IUser>
  {
    return await this.hasOne(UserApi, this.model.author_id)
  }

  async readers(): Promise<IUser[]>
  {
    return await this.hasMany(UserApi, 'id', this.model.author_id)
  }
}
