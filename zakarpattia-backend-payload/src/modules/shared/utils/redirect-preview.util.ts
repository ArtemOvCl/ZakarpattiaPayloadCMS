export const redirectPreviewUtil = (doc: any, redirectUrl?: string) => {
    const params = new URLSearchParams({
      previewSecret: process.env.PREVIEW_SECRET!,
      redirectUrl: redirectUrl || '/'

    })

    console.log("redirect url", redirectUrl);
    if(doc.slug) {
      params.append('slug', doc.slug)
    }

    console.log('redirectPreviewUtil doc', doc);
    const url = `${process.env.FRONTEND_URL}/api/preview?${params.toString()}`
    console.log('OHOHOHOHOH', url)
    return url
  }