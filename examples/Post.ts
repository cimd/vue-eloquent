import { required } from '@vuelidate/validators'
import { computed, reactive } from 'vue'
import { Model } from '../src/index'
import PostApi from './PostApi'
import type { IPost } from './PostInterface'
import UserApi from './UserApi'
import type { IUser } from './UserInterface'
import CommentApi from './CommentApi'
import type { IComment } from './CommentInterface'

export default class Post extends Model<IPost> {
  model = reactive<IPost>({
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
    author_id: undefined,
    title: undefined,
    text: undefined,
    author: {} as IUser,
    comments: [] as IComment[]
  })
  api = PostApi
  protected parameters = {
    title: 'New Post'
  }
  protected validations = computed(() => ({
    model: {
      title: {
        required
      },
      description: { required }
    }
  }))

  constructor(post?: IPost) {
    super()
    super.factory(post)
    super.initValidations()
  }

  async author() {
    return await this.hasOne(UserApi, this.model.author_id)
  }

  comments() {
    return this.hasMany(CommentApi, this.model.id)
  }

  protected updating() {
    // strip html tags from this.model.text
  }
}
