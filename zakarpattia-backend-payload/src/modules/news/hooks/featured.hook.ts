import { BeforeChangeHook } from "node_modules/payload/dist/collections/config/types"

export const enforceSingleFeatured: BeforeChangeHook = async ({ data, req, originalDoc }) => {
  if (data.featured === true) {
    const currentId = originalDoc?.id || data.id

    const featuredNews = await req.payload.find({
      collection: 'news',
      where: {
        featured: { equals: true },
        id: { not_equals: currentId },
      },
    })

    for (const doc of featuredNews.docs) {
      await req.payload.update({
        collection: 'news',
        id: doc.id,
        data: {
          featured: false,
        },
      })
    }
  }
  return data
}
