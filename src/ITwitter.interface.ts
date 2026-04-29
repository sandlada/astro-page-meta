/**
 * Twitter Card (X Card)
 */

export type TwitterCardType
    = 'summary'
    | 'summary_large_image'
    | 'player'
    | 'app';

interface ITwitterCardBaseArgs {
    twitterCard        : TwitterCardType;    // <meta name="twitter:card" content="..." />
    twitterSite       ?: string;             // <meta name="twitter:site" content="@your_site" />
    twitterCreator    ?: string;             // <meta name="twitter:creator" content="@author" />
    twitterTitle      ?: string;             // <meta name="twitter:title" content="..." />
    twitterDescription?: string;             // <meta name="twitter:description" content="..." />
    twitterImage      ?: string | string[];  // <meta name="twitter:image" content="..." />
    twitterImageAlt   ?: string;             // <meta name="twitter:image:alt" content="..." />

                             // 自訂標籤 + 資料（Summary / Summary Large Image 強力推薦）
    twitterLabel1?: string;  // <meta name="twitter:label1" content="作者" />
    twitterData1 ?: string;  // <meta name="twitter:data1" content="張小明" />
    twitterLabel2?: string;  // <meta name="twitter:label2" content="閱讀時間" />
    twitterData2 ?: string;  // <meta name="twitter:data2" content="8 分鐘" />
}

// ==================== 具體卡片類型 ====================

// 1. Summary Card
export interface TwitterSummaryCard extends ITwitterCardBaseArgs {
    twitterCard: 'summary';
}

  // 2. Summary Card with Large Image（最推薦）
export interface TwitterSummaryLargeImageCard extends ITwitterCardBaseArgs {
    twitterCard: 'summary_large_image';
}

// 3. Player Card（影片）
export interface TwitterPlayerCard extends ITwitterCardBaseArgs {
    twitterCard                    : 'player';
    twitterPlayer                  : string;           // <meta name="twitter:player" content="https://..." />
    twitterPlayerWidth             : number | string;  // <meta name="twitter:player:width" content="1280" />
    twitterPlayerHeight            : number | string;  // <meta name="twitter:player:height" content="720" />
    twitterPlayerStream           ?: string;           // <meta name="twitter:player:stream" content="..." />
    twitterPlayerStreamContentType?: string;           // <meta name="twitter:player:stream:content_type" content="video/mp4; codecs=..." />
}

// 4. App Card
export interface TwitterAppCard extends ITwitterCardBaseArgs {
    twitterCard          : 'app';
    twitterAppNameIphone?: string;
    twitterAppIdIphone  ?: string;
    twitterAppUrlIphone ?: string;

    twitterAppNameIpad?: string;
    twitterAppIdIpad  ?: string;
    twitterAppUrlIpad ?: string;

    twitterAppNameGoogleplay?: string;
    twitterAppIdGoogleplay  ?: string;
    twitterAppUrlGoogleplay ?: string;

    twitterAppCountry?: string;  // ISO 3166-1 alpha-2，例如 "TW", "US"
}

export type ITwitterCard
    = TwitterSummaryCard
    | TwitterSummaryLargeImageCard
    | TwitterPlayerCard
    | TwitterAppCard;

export type TwitterCard = ITwitterCard;
