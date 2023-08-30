import { formatDates } from './formatDates'

export const formatObject = (response: any[], datesArray: any[]) => {
  if (typeof response !== 'undefined') {
    if (typeof response.length === 'undefined') {
      response = formatDates(response, datesArray)
      return response
    } else {
      response.forEach((element) => {
        formatDates(element, datesArray)
      })
      return response
    }
  }

  return response
}
