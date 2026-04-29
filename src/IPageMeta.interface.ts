import { type ImageMetadata } from "astro";
import type { IAstro } from "./IAstro.interface";
import type { IOpenGraph } from "./IOpenGraph.interface";
import type { ITwitterCard } from "./ITwitter.interface";

export type IPageMeta = IOpenGraph & ITwitterCard & IAstro & {
    applicationName     ?: string;
    colorScheme         ?: ColorScheme                   // <meta name="color-scheme" content={colorScheme} />
    themeColorLight     ?: string                        // <meta name="theme-color" content={themeColorLight} media={themeColorLightMedia} />
    themeColorLightMedia?: string
    themeColorDark      ?: string                        // <meta name="theme-color" content={themeColorDark} media={themeColorDarkMedia} />
    themeColorDarkMedia ?: string
    title                : string;                       // <meta name="title" content={title} />
    description          : string;                       // <meta name="description" content={description} />
    keywords            ?: string;                       // <meta name="keywords" content={keywords} />
    author              ?: "Kai Orion" | (string & {});  // <meta name="author" content={author} />
    sitemap             ?: string;                       // <link rel="sitemap" href="/sitemap-index.xml" />
    robots              ?: Robots                        // <meta name="robots" content={robots} />
    referrer            ?: Referrer                      // <meta name="referrer" content={referrer} />
    url                 ?: string;
    articleModifiedTime ?: string                        // <meta property="article:modified_time" content={articleModifiedTime} />
    icon                ?: ImageMetadata;
    image               ?: ImageMetadata;
    imageAlt            ?: string;
}

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
