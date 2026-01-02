export const redirectPreviewUtil = (doc: any, redirectUrl?: string) => {
    const params = new URLSearchParams({
      slug: String(doc.data.slug),
      previewSecret: process.env.PREVIEW_SECRET!,
      redirectUrl: redirectUrl || '/'

    })

    const url = `${process.env.FRONTEND_URL}/api/preview?${params.toString()}`
    console.log('Generated preview URL:', url);
    return url
  }