const validate = {
  // mounted: (el) => {
  //   console.log(el.__vueParentComponent.ctx.data)
  // },
  updated(_el: any, binding:any, vnode:any, _prevVnode:any) {
    console.log(binding)
    // console.log(vnode)

    // console.log('vnode: ', vnode.ctx)
    // console.log('Status Value: ', binding.value)

    // Valuable info
    // console.log(vnode.ctx.parent.ctx)
    // console.log(vnode.ctx.parent.ctx.label)
    // console.log(vnode.ctx.parent.ctx.value)


    // How to find validation errors?

    // Error Props
    vnode.ctx.props.error = binding.value.$error
    if (binding.value.$errors.length > 0) {
      vnode.ctx.props.errorMessage = binding.value.$errors[ 0 ].$message
    }
  },
}

export default validate
