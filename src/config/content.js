// ============================================================================
// content.js  —  All editable copy, lists, and image paths.
// ----------------------------------------------------------------------------
// Numbers live in stats.js. Everything else a brand-facing edit would touch
// (nav, portfolio, partner list, press list, image slots, form endpoint) lives
// here. Nothing is hardcoded in index.html or main.js.
// ============================================================================

export const content = {
  site: {
    logo: "paul ferrante",
    domain: "https://paulferrante.com",   // canonical (metadata / OG). Confirmed.
    // Swap for a professional address any time; used by the "send me an email" fallback.
    contactEmail: "paulferrante84@gmail.com",
    // Profile links. Rendered in the contact section and footer.
    socials: [
      { label: "tiktok",    href: "https://www.tiktok.com/@paul_ferrante" },
      { label: "instagram", href: "https://www.instagram.com/_paul_ferrante_/" },
      { label: "youtube",   href: "https://www.youtube.com/@paul_ferrante/shorts" },
    ],
    // Nav order + targets. `button:true` renders the filled contact pill.
    nav: [
      { label: "examples",                 href: "#featured" },
      { label: "how brands work with me",  href: "#services" },
      { label: "demographics",             href: "#demographics" },
      { label: "press",                    href: "#press" },
      { label: "about",                    href: "#about" },
      { label: "contact me",               href: "#contact", button: true },
    ],
  },

  hero: {
    eyebrow: "travel & lifestyle creator",
    headline: "brand content your audience actually trusts",
    subhead:
      "practical travel and lifestyle content, grounded in real experience and shared the way i'd tell a friend.",
    buttons: [
      { label: "how brands work with me", href: "#services", filled: true },
      { label: "see my work",             href: "#featured", filled: false },
    ],
    image: "assets/config/hero.jpg", // swappable slot. solo portrait.
  },

  performance: {
    eyebrow: "performance",
    heading: "content that performs without breaking trust",
    // Each card reads its number from stats.performance[key]. `sub` names the platform /
    // definition so nothing is mistaken for a cross-platform or 30-day figure.
    cards: [
      { key: "engagementRate", label: "engagement rate",  sub: "tiktok" },
      { key: "avgViewsVideo",  label: "avg views / video", sub: "tiktok" },
      { key: "totalLikes",     label: "total likes",       sub: "tiktok" },
      { key: "avgReachPost",   label: "avg reach / post",  sub: "instagram" },
      { key: "youtubeViews",   label: "youtube views",     sub: "all-time" },
    ],
  },

  pillars: {
    eyebrow: "what i make",
    heading: "four things i cover, consistently",
    items: [
      { icon: "travel",     title: "travel",
        body: "hotels, flights, and routes with the real cost and the real trade-off. tips you can act on, not a highlight reel." },
      { icon: "lifestyle",  title: "lifestyle",
        body: "day-to-day routines, gear, and small decisions that actually hold up. shot the way i live, not staged for a brief." },
      { icon: "commentary", title: "commentary",
        body: "dry, relatable takes on travel and everyday life. brand-safe humour that reads as a person, not a pitch." },
      { icon: "hacks",      title: "life hacks & recommendations",
        body: "the specific product, the specific fix, what it cost. recommendations i'd give a friend, with receipts." },
    ],
  },

  featured: {
    eyebrow: "featured content",
    heading: "recent work",
    footer: "full portfolio available upon request",
    filters: ["all", "travel", "dog dad", "comedy", "brand work"],
    // Cover images are swappable config slots. Cropped clean from phone screenshots
    // (status bar / app nav / view-count overlays removed, caption kept).
    items: [
      { cover: "assets/config/covers/amex.jpg",              url: "https://www.instagram.com/reels/DMRSfiYPp-J/", platform: "Instagram", label: "Brand Integration",  title: "Native product demo (Amex)", category: "brand work" },
      { cover: "assets/config/covers/washos.jpg",            url: "https://www.instagram.com/p/DQQLs6ED7Nt/",     platform: "Instagram", label: "Brand Integration",  title: "Routine format (Washos)", category: "brand work" },
      { cover: "assets/config/covers/american-airlines.jpg", url: "https://www.instagram.com/p/DSYWW0LAF9Q/",    platform: "Instagram", label: "Brand Integration",  title: "AAdvantage travel math (American Airlines)", category: "brand work" },
      { cover: "assets/config/covers/japan-tips.jpg",        url: "https://www.tiktok.com/t/ZP8wnVxhA/",         platform: "TikTok",    label: "Practical Travel",    title: "Japan travel tips, 544.8K plays", category: "travel" },
      { cover: "assets/config/covers/sorrento.jpg",          url: "https://www.instagram.com/reel/DcAG1dKIMQf/",  platform: "Instagram", label: "Practical Travel",    title: "24 hours in Sorrento, €120 itinerary", category: "travel" },
      { cover: "assets/config/covers/italy-fines.jpg",       url: "https://www.instagram.com/reel/DaJmhXSIqZ-/",  platform: "Instagram", label: "Practical Travel",    title: "3 things to know before Italy", category: "travel" },
      { cover: "assets/config/covers/comedy-overspending.jpg", url: "https://www.tiktok.com/t/ZTyf5hB28/",       platform: "TikTok",    label: "Commentary",          title: "Post-surgery overspending diaries", category: "comedy" },
      { cover: "assets/config/covers/comedy-introvert.jpg",  url: "https://www.tiktok.com/t/ZTyf56jcT/",         platform: "TikTok",    label: "Commentary",          title: "Introvert hard launch", category: "comedy" },
      { cover: "assets/config/covers/comedy-42min.jpg",      url: "https://www.instagram.com/reel/DSYthtej_wZ/",  platform: "Instagram", label: "Commentary",          title: "42-minute conversation about nothing", category: "comedy" },
      { cover: "assets/config/covers/comedy-hotel.jpg",      url: "https://www.instagram.com/reel/DZTeTV2otrd/",  platform: "Instagram", label: "Commentary",          title: "Millennial hotel story", category: "comedy" },
      { cover: "assets/config/covers/dog-dressup.jpg",       url: "https://www.instagram.com/reel/Dccck2DoBFt/",  platform: "Instagram", label: "Dog Dad",             title: "frank v greta iq test", category: "dog dad" },
      { cover: "assets/config/covers/dog-poop.jpg",          url: "https://www.instagram.com/reel/DSTg6WMD80-/",  platform: "Instagram", label: "Dog Dad",             title: "pov: your dog knocks anything under the couch", category: "dog dad" },
      { cover: "assets/config/covers/dog-reactive.jpg",      url: "https://www.instagram.com/reel/DRddjFWj0QN/",  platform: "Instagram", label: "Dog Dad",             title: "when i have to decide if i want to bring my reactive dog out in public", category: "dog dad" },
    ],
  },

  demographics: {
    eyebrow: "demographics",
    heading: "who's actually watching",
  },

  partners: {
    // Header makes no commercial claim, so no paid/gifted labels are needed.
    // Each brand links to the actual post. A brand with no `url` renders as plain text.
    eyebrow: "brands i've created content for",
    items: [
      { name: "Prada",               url: "https://www.instagram.com/reel/DPXcY4uCMXX/" },
      { name: "Valentino",           url: "https://www.instagram.com/reel/DIuoFVMTxel/" },
      { name: "Yves Saint Laurent",  url: "https://www.instagram.com/reel/DAXcsvWRI52/" },
      { name: "True Classic",        url: "https://www.instagram.com/reel/C3q2CwnvZcG/" },
      { name: "American Airlines",   url: "https://www.instagram.com/p/DSYWW0LAF9Q/" },
    ],
  },

  services: {
    eyebrow: "work with me",
    heading: "how brands work with me",
    items: [
      { title: "sponsored content", body: "full concept, script, and delivery across tiktok, instagram, and youtube. built around your brief without losing the voice my audience follows me for." },
      { title: "ugc creation",      body: "content made for your channels, not mine. raw files or edited, ready to run as ads.", tag: "whitelisting available" },
      { title: "short-form ads",    body: "hook-first vertical video built to convert. tested formats, quick turnaround, made for paid." },
      { title: "press trips",       body: "on-location coverage of destinations, hotels, and experiences. shot in real time, honest, and useful.", tag: "tourism & hospitality" },
    ],
  },

  // Media coverage, grouped by story so one viral story shows every outlet
  // that covered it. Renders only if `clusters` is non-empty. No placeholder press.
  // `media` (optional): { src, poster, label } renders a playable video at the
  // top of the card. Coverage rows: { outlet, title, url?, date?, tag? }.
  press: {
    eyebrow: "featured on",
    heading: "press",
    sub: "one viral story, every outlet that covered it",
    clusters: [
      {
        story: "the coffee ordering fail",
        blurb: "canadian expat couldn't order drip coffee in australia",
        media: { src: "assets/coffee-story-web.mp4", poster: "assets/thumb-coffee.jpg", label: "studio 10 · 0:35" },
        items: [
          { outlet: "studio 10", title: "tv segment, network 10", tag: "video" },
          { outlet: "news.com.au", title: "canadian man reveals embarrassing australian coffee mistake on tiktok", date: "dec 17, 2020",
            url: "https://www.news.com.au/lifestyle/real-life/news-life/canadian-man-reveals-embarrassing-australian-coffee-mistake-on-tiktok/news-story/4904837a186e902055b5b84145f53017" },
        ],
      },
      {
        story: "three things about australia",
        blurb: "magpie swooping season, group photo gags, and more",
        media: { src: "assets/three-things-web.mp4", poster: "assets/thumb-three-things.jpg", label: "studio 10 · 1:29" },
        items: [
          { outlet: "studio 10", title: "tv segment, network 10", tag: "video" },
          { outlet: "daily mail", title: "canadian expat shares the things he didn't know existed until he moved to australia", date: "aug 10, 2021",
            url: "https://www.dailymail.co.uk/femail/article-9878251/Canadian-expat-Paul-Ferrante-shares-things-never-knew-existed-Australia-like-fridge-fridge.html" },
          { outlet: "whatsnew2day", title: "canadian expat paul ferrante shares things he didn't know existed in australia", date: "aug 10, 2021",
            url: "https://whatsnew2day.com/canadian-expat-paul-ferrante-shares-things-he-didnt-know-existed-in-australia-like-fridge-to-fridge/" },
        ],
      },
      {
        story: "the voyagela interview",
        blurb: "check out paul ferrante's story",
        feature: {
          image: "assets/thumb-voyagela.jpg",
          url: "https://voyagela.com/interview/check-out-paul-ferrantes-story",
          label: "voyagela · feature",
          alt: "paul ferrante, voyagela interview",
        },
        items: [
          { outlet: "voyagela", title: "in-depth creator interview", date: "june 2026", tag: "interview",
            url: "https://voyagela.com/interview/check-out-paul-ferrantes-story" },
        ],
      },
      {
        story: "fridge to fridge",
        blurb: "canadian party guests go \"fridge to fridge\" — baffled aussies",
        items: [
          { outlet: "news.com.au", title: "expat's fridge to fridge party claim baffles aussies", date: "aug 9, 2021", tag: "original",
            url: "https://www.news.com.au/lifestyle/real-life/true-stories/expats-fridge-to-fridge-party-claim-baffles-aussies/news-story/5ab29e8904021803f3bc840391c0c173" },
          { outlet: "cairns post", title: "regional mirror of the news.com.au story", date: "aug 9, 2021",
            url: "https://www.cairnspost.com.au/lifestyle/expats-fridge-to-fridge-party-claim-baffles-aussies/news-story/5ab29e8904021803f3bc840391c0c173" },
          { outlet: "escape", title: "syndicated copy of the news.com.au story", date: "aug 10, 2021",
            url: "https://escape.news.com.au/travel-advice/expats-fridge-to-fridge-party-claim-baffles-aussies/news-story/6fd4e2a66f666360161ace57b78fd669" },
        ],
      },
      {
        story: "lies about australia",
        blurb: "debunking what people are told about australia, incl. flesh-eating bears",
        items: [
          { outlet: "news.com.au", title: "canadian tiktokker reveals 'lies' people are told about australia", date: "jul 11, 2021", tag: "original",
            url: "https://www.news.com.au/travel/travel-advice/tips-tricks/canadian-tiktokker-reveals-lies-people-are-told-about-australia/news-story/bfec582b9089081449f5d4a20ad5c81e" },
          { outlet: "escape", title: "syndicated copy of the news.com.au story",
            url: "https://escape.news.com.au/destinations/australia/canadian-tiktokker-reveals-lies-people-are-told-about-australia/news-story/d2e513c56ebe55216f57f2f2a6c28799" },
        ],
      },
      {
        story: "landlord pet cameras",
        blurb: "his la building swapped security cameras for furbo pet cameras",
        items: [
          { outlet: "newsweek", title: "tenant notices landlord installs cameras, in disbelief after looking closer", date: "may 1, 2024",
            url: "https://www.newsweek.com/tenant-notices-landlord-installed-cameras-1896093" },
        ],
      },
      {
        story: "the 3 aussie traits",
        blurb: "uptalk, coffee snobbery, and pronouncing melbourne \"mel-bin\"",
        items: [
          { outlet: "yahoo news australia", title: "the three aussie traits canadian man's friends mock him for", date: "may 6, 2021",
            url: "https://au.news.yahoo.com/tik-tok-canadians-friends-rips-him-about-since-moving-australia-115306155.html" },
        ],
      },
      {
        story: "breakfast, mortified",
        blurb: "aussies \"mortified\" canadians eat tim hortons donuts for breakfast",
        items: [
          { outlet: "narcity", title: "a tiktoker said australians are 'mortified' by what canadians eat for breakfast", date: "may 8, 2023",
            url: "https://www.narcity.com/a-tiktoker-said-australians-are-mortified-by-what-canadians-eat-for-breakfast-heres-why" },
        ],
      },
      {
        story: "tipping in canada",
        blurb: "tiktokers getting real about tipping in canada",
        items: [
          { outlet: "narcity", title: "tiktokers are getting real about tipping in canada & the confusion is strong", date: "aug 14, 2022",
            url: "https://www.narcity.com/tiktokers-getting-real-about-tipping-in-canada-the-confusion-is-strong" },
        ],
      },
    ],
  },

  about: {
    eyebrow: "about",
    heading: "the person behind the content",
    body: [
      "i'm paul, a travel and lifestyle creator based between los angeles and australia. i make content the way i'd actually talk to a friend: specific, honest, and useful.",
      "my audience trusts me because i don't oversell. i show what something cost, whether it was worth it, and what i'd do differently. that's the same standard i bring to brand work.",
    ],
    image: "assets/config/about.jpg", // swappable slot. warmth shot.
  },

  contact: {
    eyebrow: "contact",
    heading: "let's work together",
    copy: "interested in partnering? drop me your campaign details, timeline, and goals and i'll get back to you within 24 hours.",
    // Formspree endpoint. Replace `your-form-id` with your real form id, then
    // redeploy. Until then the form shows a short "not yet configured" note and
    // the email fallback still works.
    formEndpoint: "https://formspree.io/f/xqerkvrv",
  },
};
