
const defaultMeta = {
    pageTitle: 'Blog Guilherme Schwengber',
    description: 'Bem vindo(a) ao meu Blog pessoal',
    siteName: 'Guilherme Schwengber Blog',
    contentType: 'website',
    url: 'https://porfolio-five-murex.vercel.app/blog',
    socialBanner: 'https://www.meudominio.com/banner_social_media.jpg', //fazer isso depois
    bannerWidth: '740',
    bannerHeight: '300',
    twitterCardType: 'summary_large_image',
}

export const generateMeta = (metaOverrides = {}) => {
    const generatedMeta = {...defaultMeta, ...metaOverrides}

    return [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: generatedMeta.description },

        // Padrao Open Graph
        { property: 'og:site_name', content: generatedMeta.siteName},
        { property: 'og:type', content: generatedMeta.contentType},
        { property: 'url', content: generatedMeta.url},
        { property: 'og:title', content: generatedMeta.pageTitle},
        { property: 'og:description', content: generatedMeta.description},
        { property: 'og:image', content: generatedMeta.socialBanner },
        { property: 'og:image:width', content: generatedMeta.bannerWidth },
        { property: 'og:image:height', content: generatedMeta.bannerHeight },

        // Twitter
        { name: 'twitter:site', content: generatedMeta.siteName},
        { name: 'twitter:card', content: generatedMeta.twitterCardType},
        { name: 'twitter:url', content: generatedMeta.url},
        { name: 'twitter:title', content: generatedMeta.pageTitle},
        { name: 'twitter:description', content: generatedMeta.description},
        { name: 'twitter:image', content: generatedMeta.socialBanner}
    ]
}