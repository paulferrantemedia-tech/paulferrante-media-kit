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
    // Nav order + targets. `button:true` renders the filled contact pill.
    nav: [
      { label: "examples",                 href: "#featured" },
      { label: "how brands work with me",  href: "#services" },
      { label: "demographics",             href: "#demographics" },
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
    // Cover images are swappable config slots. Cropped clean from phone screenshots
    // (status bar / app nav / view-count overlays removed, caption kept).
    items: [
      { cover: "assets/config/covers/amex.jpg",              url: "https://www.instagram.com/reels/DMRSfiYPp-J/", platform: "Instagram", label: "Brand Integration",  title: "Native product demo (Amex)" },
      { cover: "assets/config/covers/washos.jpg",            url: "https://www.instagram.com/p/DQQLs6ED7Nt/",     platform: "Instagram", label: "Brand Integration",  title: "Routine format (Washos)" },
      { cover: "assets/config/covers/organic-lifestyle.jpg", url: "https://www.instagram.com/reels/DC0VE_pvcNR/", platform: "Instagram", label: "Organic Lifestyle",   title: "Day-to-day, non-sponsored" },
      { cover: "assets/config/covers/practical-travel.jpg",  url: "https://www.instagram.com/reels/DFjggzIRqw3/", platform: "Instagram", label: "Practical Travel",    title: "Hotels, flights, real tips" },
      { cover: "assets/config/covers/waymo.jpg",             url: "https://www.youtube.com/shorts/6_BUaTNoxDE",   platform: "YouTube",   label: "Ad-Ready Organic",    title: "Organic content, brand-integration ready (Waymo)" },
      { cover: "assets/config/covers/relatable.jpg",         url: "https://www.youtube.com/shorts/qO4ltDFhahQ",   platform: "YouTube",   label: "Commentary",          title: "Relatable, brand-safe humour" },
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

  // Media coverage. Renders only if `items` is non-empty. No placeholder press.
  // Add real entries like: { outlet: "VoyageLA", title: "…", url: "https://…" }
  press: {
    eyebrow: "featured on",
    items: [],
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
    formEndpoint: "https://formspree.io/f/your-form-id",
  },
};
