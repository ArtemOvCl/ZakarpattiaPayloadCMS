export const redirectPreviewUtil = (doc: any, redirectUrl?: string) => {
    const params = new URLSearchParams({
      previewSecret: process.env.PREVIEW_SECRET!,
      redirectUrl: redirectUrl || '/'

    })

    if(doc.slug) {
      params.append('slug', doc.slug)
    }

    console.log('redirectPreviewUtil doc', doc);
    const url = `https://zakarpattia-skiing.org/api/preview?${params.toString()}`
    console.log('OHOHOHOHOH', url)
    return url
  }