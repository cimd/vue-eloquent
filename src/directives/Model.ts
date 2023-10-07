const model = {
  mounted: (_el, binding, vnode, _prevNode) => {
    // el.dataset.cy = 'location-id'

    // console.log('binding', binding)
    const model = binding.value.model
    const field = binding.value.field

    const props = vnode.ctx.props
    props.error = model.$model[ field ]?.$error
    props.errorMessage = model.$model[ field ]?.$errors[ 0 ]?.$message
    props.readonly = model.$acl.isReadOnly()
  },
  updated(_el: any, binding: any, vnode: any, _prevVnode: any) {
    // console.log(_el.model)
    const model = binding.value.model
    const field = binding.value.field

    const props = vnode.ctx.props
    // console.log(model.$model[ field ])
    props.error = model.$model[ field ]?.$error
    props.errorMessage = model.$model[ field ]?.$errors[ 0 ]?.$message
    props.readonly = model.$acl.isReadOnly()
  },
}

export default model
