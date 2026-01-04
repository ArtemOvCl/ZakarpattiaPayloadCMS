import { s3Storage } from '@payloadcms/storage-s3'

export const r2Storage = s3Storage({
    collections: {
        media: {
            disableLocalStorage: true,
            prefix: 'media/',
            generateFileURL: (file) => {
                return `https://${process.env.R2_ENDPOINT}.${process.env.R2_BUCKET}/${file.filename}`
            },
        }
    },
    bucket: process.env.R2_BUCKET!,  
    config: {
        endpoint: `https://${process.env.R2_ENDPOINT}`, 
        credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY_ID!,
            secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
        },
        region: 'auto',
        forcePathStyle: true,
    }
})