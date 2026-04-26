import { ImageMetadata } from "astro";

export interface IPageMeta {

    applicationName?: string;

    // <meta name="color-scheme" content={colorScheme} />
    colorScheme?: ColorScheme

    // <meta name="theme-color" content={themeColorLight} media={themeColorLightMedia} />
    themeColorLight?: string
    themeColorLightMedia?: string

    // <meta name="theme-color" content={themeColorDark} media={themeColorDarkMedia} />
    themeColorDark?: string
    themeColorDarkMedia?: string

    // <meta name="title" content={title} />
    title: string;

    // <meta name="description" content={description} />
    description: string;

    // <meta name="keywords" content={keywords} />
    keywords?: string;

    // <meta name="author" content={author} />
    author?: "Kai Orion" | (string & {});

    // <meta name="generator" content={Astro.generator} />
    generator?: string;

    // <link rel="sitemap" href="/sitemap-index.xml" />
    sitemap?: string;

    // <meta name="robots" content={robots} />
    robots?: Robots

    // <meta name="referrer" content={referrer} />
    referrer?: Referrer

    url?: string;

    // <meta property="og:type" content="website" />
    ogType?: OgType

    // <meta property="og:url" content={canonicalURL} />
    ogUrl?: string

    // <meta property="og:title" content={title} />
    ogTitle?: string

    // <meta property="og:description" content={description} />
    ogDescription?: string

    // <meta property="og:image" content={ogImage} />
    ogImage?: ImageMetadata

    // <meta property="og:image:alt" content={imageAlt} />
    ogImageAlt?: string

    ogSiteName?: string
    ogLocale?: string

    // <meta property="twitter:card" content="summary_large_image" />
    twitterCard?: TwitterCard

    // <meta property="twitter:title" content={title} />
    twitterTitle?: string

    // <meta property="twitter:description" content={description} />
    twitterDescription?: string

    // <meta property="twitter:image" content={twitterImage} />
    twitterImage?: ImageMetadata

    // <meta property="twitter:image:alt" content={imageAlt} />
    twitterImageAlt?: string

    icon?: ImageMetadata;
    image?: ImageMetadata;

    imageAlt?: string;
}

export type TwitterCard =
    | 'summary'
    | 'summary_large_image'
    | 'app'
    | 'player'

export type OgType =
    // General types
    | 'website'
    // Article, blog, news
    | 'article'
    // Book
    | 'book'
    // Personal profile
    | 'profile'
    // Payment link (Beta)
    | 'payment.link'
    // Single
    | 'music.song'
    // Album
    | 'music.album'
    // Playlist
    | 'music.playlist'
    // Radio station
    | 'music.radio_station'
    // Movie
    | 'video.movie'
    // Episode
    | 'video.episode'
    // TV show
    | 'video.tv_show'
    // Other video content
    | 'video.other';

export type Referrer =
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
export type Robots =
    | "index"
    | "noindex"
    | "follow"
    | "nofollow"
    | "index, follow"
    | "noindex, follow"
    | "index, nofollow"
    | "noindex, nofollow";
export type ColorScheme =
    | 'light'
    | 'dark'
    | 'light dark'
    | 'dark light'
    | 'only light'
    | 'only dark'
    | 'normal';
