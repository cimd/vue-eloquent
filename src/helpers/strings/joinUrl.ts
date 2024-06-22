import _join from 'lodash/join'

const joinUrl = (args: any[]): string => {
  return _join(args.filter(el => el), '/')
}

export default joinUrl
