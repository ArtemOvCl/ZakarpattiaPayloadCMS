import { FieldHook } from 'payload'
import { formatSlug } from '../utils/formatSlug'

export const generateSlug = (fallbackField: string): FieldHook => {
  return ({ value, data }) => {
    if (data?.[fallbackField]) {
      return formatSlug(data[fallbackField])
    }
    return value
  }
}

