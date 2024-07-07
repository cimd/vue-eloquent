/**
 * Returns the differencess between two objects
 */
const diff = (original: any, modified: any) => {
  const changes = {}
  for (const key in original) {
    if (Object.prototype.hasOwnProperty.call(original, key)) {
      const val1 = original[ key ]
      const val2 = modified[ key ]
      if (val1 !== val2) {
        changes[ key ] = [val1, val2]
      }
    }
  }
  return changes
}

export default diff
