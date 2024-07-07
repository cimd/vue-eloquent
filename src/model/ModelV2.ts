
export default abstract class ModelV2<T> {

  protected constructor() {
  }

  protected factory(model: T) {
    for (const key in model) {
      if (Object.prototype.hasOwnProperty.call(model, key)) {
        if (this.hasCast(key)) {
          this[ key ] = this.castTo(
            this.getCast(key),
            key,
            model[ key ]
          )
        } else {
          this[ key ] = model[ key ]
        }

      }
    }
  }

  protected casts() {
    return {
      'created_at': 'date',
      'updated_at': 'date',
      'deleted_at': 'date'
    }
  }

  protected castTo(cast: string | Function, key: string, value: any)
  {
    switch (cast) {
    case 'date':
      return new Date(value)
    case 'number':
      return Number(value)
    default:
      return cast(this, key, value, this.casts())
    }
  }

  private hasCast(key: string)
  {
    // console.log('hasCast: ', key, Object.prototype.hasOwnProperty.call(this.casts(), key))
    return Object.prototype.hasOwnProperty.call(this.casts(), key)
  }

  private getCast(key: string)
  {
    if (!this.hasCast(key)) return

    return this.casts()[ key ]
  }
}
