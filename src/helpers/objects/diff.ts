/**
 * Returns the differencess between two objects
 */
const diff = (modified: any, original: any) => {
  const changes = {}
  for (const key in modified) {
    if (Object.prototype.hasOwnProperty.call(modified, key)) {
      const val1 = original[ key ]
      const val2 = modified[ key ]
      if (val1 !== val2) {
        changes[ key ] = val2
      }
    }
  }
  return changes
}

export default diff
