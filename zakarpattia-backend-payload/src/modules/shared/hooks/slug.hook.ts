import { FieldHook } from 'payload'
import { formatSlug } from '../utils/formatSlug'

/**
 * Хук для автоматичної генерації slug з поля
 * @param fallbackField - назва поля, з якого брати значення для slug (наприклад 'title' або 'name')
 */
export const generateSlug = (fallbackField: string): FieldHook => {
  return ({ value, data }) => {
    if (!value && data?.[fallbackField]) {
      return formatSlug(data[fallbackField])
    }
    return value
  }
}

