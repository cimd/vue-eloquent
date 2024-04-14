import { required } from '@vuelidate/validators'
import { computed, reactive } from 'vue'
import { Model } from '../src/index'
import PostApi from './PostApi'
import { IPost } from './PostInterface'
import UserApi from './UserApi'
import { IUser } from './UserInterface'
import CommentApi from './CommentApi'

export default class Post extends Model<IPost> {
  public model = reactive<IPost>({
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
    author_id: undefined,
    title: undefined,
    text: undefined,
    author: undefined as IUser,
    readers: undefined as IUser[],
  })
  protected api = PostApi
  protected parameters = {
    title: 'New Post',
  }
  protected validations = computed(() => ({
    model: {
      title: {
        required
      },
      description: { required },
    }
  }))

  constructor(post?: IPost) {
    super()
    super.factory(post)
    super.initValidations()
  }

  author()
  {
    return this.hasOne<IUser>(UserApi, this.model.author_id)
  }

  comments()
  {
    return this.hasMany(CommentApi, this.model.id)
  }

  protected updating()
  {
    // strip html tags from this.model.text
  }
}
