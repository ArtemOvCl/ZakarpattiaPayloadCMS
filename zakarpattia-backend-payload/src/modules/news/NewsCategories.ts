import type { CollectionConfig } from 'payload'
import { generateSlug } from '../shared/hooks/slug.hook'

const NEWS_CATEGORIES_SLUG = 'news-categories'

export const NewsCategories: CollectionConfig = {
  slug: NEWS_CATEGORIES_SLUG,
  labels: { singular: 'Категорія новин', plural: 'Категорії новин' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'createdAt'],
  },
  access: { read: () => true },
  fields: [
    {
      name: 'name',
      label: 'Назва категорії',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Автоматично генерується з назви',
      },
      hooks: {
        beforeValidate: [generateSlug('name')],
      },
    },
  ],
}

