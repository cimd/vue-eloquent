import _get from 'lodash/get'
import _has from 'lodash/has'
import _set from 'lodash/set'

export const formatDates = (element: any, datesArray: any[]) => {
  // console.log(datesArray)
  // console.log(element)
  datesArray.forEach((el) => {
    const paramsArray = el.split('.')
    const paramsStr = paramsArray.join('.')
    if (_has(element, paramsStr)) {
      const date = _get(element, paramsStr)
      if (date) _set(element, paramsStr, new Date(date))
    }
  })
  return element
}
