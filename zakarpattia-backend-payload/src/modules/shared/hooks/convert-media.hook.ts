/*import type { CollectionBeforeChangeHook, PayloadRequest } from 'payload'

import sharp from 'sharp'

export const convertToWebp: CollectionBeforeChangeHook = async ({ req }: { req: PayloadRequest }) => {

    const file = req.file
    if (!file?.data) return

    const webpBuffer = await sharp(file.data)
    .resize({width: 1920, withoutEnlargement: true})
    .webp({lossless: false})
    .toBuffer()

    file.data = webpBuffer
    file.name = file.name.replace(/\.\w+$/, '.webp')
    file.mimetype = 'image/webp'

    console.log(`File conversion to WebP completed: ${file}`)
}*/