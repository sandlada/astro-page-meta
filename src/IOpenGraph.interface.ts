/**
 * Open Graph Protocol - TypeScript Definitions
 * 來源：https://ogp.me/ (完整涵蓋所有官方類型與屬性)
 */

export type OpenGraphDeterminer = '' | 'a' | 'an' | 'the' | 'auto';
// export type OgType
//     = 'website'              // General types
//     | 'article'              // Article, blog, news
//     | 'book'                 // Book
//     | 'profile'              // Personal profile
//     | 'payment.link'         // Payment link (Beta)
//     | 'music.song'           // Single
//     | 'music.album'          // Album
//     | 'music.playlist'       // Playlist
//     | 'music.radio_station'  // Radio station
//     | 'video.movie'          // Movie
//     | 'video.episode'        // Episode
//     | 'video.tv_show'        // TV show
//     | 'video.other';         // Other video content


export interface IOpenGraphImageArgs {
    ogImageUrl       : string;
    ogImageSecureUrl?: string;
    ogImageType     ?: string;
    ogImageWidth    ?: number | string;
    ogImageHeight   ?: number | string;
    ogImageAlt      ?: string;
}
type OGImage = string | IOpenGraphImageArgs | Array<string | IOpenGraphImageArgs>;

export interface IOpenGraphVideoArgs {
    ogVideoUrl       : string;
    ogVideoSecureUrl?: string;
    ogVideoType     ?: string;
    ogVideoWidth    ?: number | string;
    ogVideoHeight   ?: number | string;
}
type OGVideo = string | IOpenGraphVideoArgs | Array<string | IOpenGraphVideoArgs>;

export interface IOpenGraphAudioArgs {
    ogAudioUrl       : string;
    ogAudioSecureUrl?: string;
    ogAudioType     ?: string;
}
type OGAudio = string | IOpenGraphAudioArgs | Array<string | IOpenGraphAudioArgs>;

interface IOpenGraphBaseArgs {
    ogTitle          ?: string;               // <meta property="og:title" ... />
    ogUrl            ?: string;               // <meta property="og:url" ... />
    ogImage          ?: OGImage;              // 支援字串 / 物件 / 混合陣列
    ogDescription    ?: string;               // <meta property="og:description" ... />
    ogDeterminer     ?: OpenGraphDeterminer;  // <meta property="og:determiner" ... />
    ogLocale         ?: string;               // <meta property="og:locale" ... />
    ogLocaleAlternate?: string | string[];    // <meta property="og:locale:alternate" ... />（陣列）
    ogSiteName       ?: string;               // <meta property="og:site_name" ... />
    ogAudio          ?: OGAudio;              // 支援字串 / 物件 / 混合陣列
    ogVideo          ?: OGVideo;              // 支援字串 / 物件 / 混合陣列
}

// ==================== 具體類型 ====================

// 1. website
export interface IOpenGraphWebsite extends IOpenGraphBaseArgs {
    ogType: 'website';
}

// 2. article
export interface IOpenGraphArticle extends IOpenGraphBaseArgs {
    ogType                  : 'article';
    ogArticlePublishedTime ?: string;             // <meta property="article:published_time" content={...} />
    ogArticleModifiedTime  ?: string;             // <meta property="article:modified_time" content={...} />
    ogArticleExpirationTime?: string;             // <meta property="article:expiration_time" content={...} />
    ogArticleAuthor        ?: string | string[];  // [<meta property="article:author" content={...} />]
    ogArticleSection       ?: string;             // <meta property="article:section" content={...} />
    ogArticleTag           ?: string | string[];  // [<meta property="article:tag" content={...} />]
}

// 3. profile
export interface IOpenGraphProfile extends IOpenGraphBaseArgs {
    ogType             : 'profile';
    ogProfileFirstName?: string;                      // <meta property="profile:first_name" content={...} />
    ogProfileLastName ?: string;                      // <meta property="profile:last_name" content={...} />
    ogProfileUsername ?: string;                      // <meta property="profile:username" content={...} />
    ogProfileGender   ?: 'male' | 'female' | string;  // <meta property="profile:gender" content={...} />
}

// 4. book
export interface IOpenGraphBook extends IOpenGraphBaseArgs {
    ogType            : 'book';
    ogBookAuthor     ?: string | string[];  // [<meta property="book:author" content={...} />]
    ogBookIsbn       ?: string;             // <meta property="book:isbn" content={...} />
    ogBookReleaseDate?: string;             // <meta property="book:release_date" content={...} />
    ogBookTag        ?: string | string[];  // [<meta property="book:tag" content={...} />]
}

// 5. video.* 系列
interface IOpenGraphVideoBaseArgs extends IOpenGraphBaseArgs {
    ogVideoActor      ?: string | string[];  // [<meta property="video:actor" content={...} />]
    ogVideoActorRole  ?: string | string[];  // [<meta property="video:actor:role" content={...} />]
    ogVideoDirector   ?: string | string[];  // [<meta property="video:director" content={...} />]
    ogVideoWriter     ?: string | string[];  // [<meta property="video:writer" content={...} />]
    ogVideoDuration   ?: number | string;    // <meta property="video:duration" content={...} />
    ogVideoReleaseDate?: string;             // <meta property="video:release_date" content={...} />
    ogVideoTag        ?: string | string[];  // [<meta property="video:tag" content={...} />]
}
export interface IOpenGraphVideoMovie extends IOpenGraphVideoBaseArgs {
    ogType: 'video.movie';
}
export interface IOpenGraphVideoEpisode extends IOpenGraphVideoBaseArgs {
    ogType        : 'video.episode';
    ogVideoSeries?: string;           // <meta property="video:series" content={...} />（指向 video.tv_show）
}
export interface IOpenGraphVideoTvShow extends IOpenGraphVideoBaseArgs {
    ogType: 'video.tv_show';
}
export interface IOpenGraphVideoOther extends IOpenGraphVideoBaseArgs {
    ogType: 'video.other';
}

// 6. music.* 系列
export interface IOpenGraphMusicSong extends IOpenGraphBaseArgs {
    ogType            : 'music:song';
    ogMusicDuration  ?: number | string;    // <meta property="music:duration" content={...} />
    ogMusicAlbum     ?: string | string[];  // [<meta property="music:album" content={...} />]
    ogMusicAlbumDisc ?: number | string;    // <meta property="music:album:disc" content={...} />
    ogMusicAlbumTrack?: number | string;    // <meta property="music:album:track" content={...} />
    ogMusicMusician  ?: string | string[];  // [<meta property="music:musician" content={...} />]
}
export interface IOpenGraphMusicAlbum extends IOpenGraphBaseArgs {
    ogType             : 'music:album';
    ogMusicSong       ?: string | string[];  // [<meta property="music:song" content={...} />]
    ogMusicSongDisc   ?: number | string;    // <meta property="music:song:disc" content={...} />
    ogMusicSongTrack  ?: number | string;    // <meta property="music:song:track" content={...} />
    ogMusicMusician   ?: string | string[];  // <meta property="music:musician" content={...} />
    ogMusicReleaseDate?: string;             // <meta property="music:release_date" content={...} />
}
export interface IOpenGraphMusicPlaylist extends IOpenGraphBaseArgs {
    ogType           : 'music:playlist';
    ogMusicSong     ?: string | string[];  // [<meta property="music:song" content={...} />]
    ogMusicSongDisc ?: number | string;    // <meta property="music:song:disc" content={...} />
    ogMusicSongTrack?: number | string;    // <meta property="music:song:track" content={...} />
    ogMusicCreator  ?: string | string[];  // <meta property="music:creator" content={...} />
}
export interface IOpenGraphMusicRadioStation extends IOpenGraphBaseArgs {
    ogType         : 'music:radio_station';
    ogMusicCreator?: string | string[];      // <meta property="music:creator" content={...} />
}

  // 7. payment:link（Beta）
export interface IOpenGraphPaymentLink extends IOpenGraphBaseArgs {
    ogType               : 'payment:link';
    ogPaymentDescription?: string;                                              // <meta property="payment:description" content={...} />
    ogPaymentCurrency   ?: string;                                              // <meta property="payment:currency" content={...} />
    ogPaymentAmount     ?: number | string;                                     // <meta property="payment:amount" content={...} />
    ogPaymentExpiresAt  ?: string;                                              // <meta property="payment:expires_at" content={...} />
    ogPaymentStatus     ?: 'PENDING' | 'PAID' | 'FAILED' | 'EXPIRED' | string;
    ogPaymentId         ?: string;                                              // <meta property="payment:id" content={...} />
    ogPaymentSuccessUrl ?: string;                                              // <meta property="payment:success_url" content={...} />
}

export type IOpenGraph =
    | IOpenGraphWebsite
    | IOpenGraphArticle
    | IOpenGraphProfile
    | IOpenGraphBook
    | IOpenGraphVideoMovie
    | IOpenGraphVideoEpisode
    | IOpenGraphVideoTvShow
    | IOpenGraphVideoOther
    | IOpenGraphMusicSong
    | IOpenGraphMusicAlbum
    | IOpenGraphMusicPlaylist
    | IOpenGraphMusicRadioStation
    | IOpenGraphPaymentLink;
export interface IOpenGraphUnknown extends IOpenGraphBaseArgs {
    ogType: string;
}
export type IOpenGraphAny = IOpenGraph | IOpenGraphUnknown;
