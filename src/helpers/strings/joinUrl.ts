import _join from 'lodash/join'

const joinUrl = (args: string[]): string => {
  return _join(args.filter(el => el), '/')
}

export default joinUrl
