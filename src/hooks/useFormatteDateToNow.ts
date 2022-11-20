import moment from 'moment'

export function useFormatteDateToNow(date: string) {
  return moment(date).fromNow()
}
