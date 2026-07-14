// ============================================================================
// stats.js  —  SINGLE SOURCE OF TRUTH for every editable number on the site.
// ----------------------------------------------------------------------------
// Every section reads from this file. Nothing below is hardcoded in the markup.
// To update the site: change a value here and redeploy. No API is called at
// build time or at runtime. No credentials live anywhere in the site.
//
// PROVENANCE (Phase 0 diagnostic):
//   There are no standalone analytics JSON files on the machine. The numbers
//   live in the Command Center dashboard source:
//     RGG Media/phase1-analytics-fix/paul_ferrante_dashboard.jsx  (newest build)
//   Follower counts + demographics below are VERIFIED from that file (line refs
//   noted inline). The six performance fields were NOT present in any local file
//   and are left as NEEDS_VALUE placeholders — never guessed. Fill them from the
//   platform insights screenshots and redeploy.
// ============================================================================

// Visible placeholder. Any field set to this renders as a clearly-marked
// "pending" state instead of shipping an invented number.
export const NEEDS_VALUE = "__NEEDS_VALUE__";

export const stats = {
  performance: {
    // --- From the Command Center analytics screenshots (dashboard, live cache 2026-07-12). ---
    // The dashboard exposes all-time and per-video-average metrics, not 30-day windows
    // or a single top-video figure, so these are the real numbers it does show, each
    // attributed to its platform. To swap any card to a native-app 30-day metric later,
    // update the value here and its label in content.js.
    engagementRate: "5.57%",  // TikTok avg eng rate (flagship platform)
    avgViewsVideo:  "61.1K",  // TikTok avg views / video
    totalLikes:     "4.4M",   // TikTok total likes
    avgReachPost:   "15.5K",  // Instagram avg reach / post
    youtubeViews:   "2.5M",   // YouTube total views, all-time (2,548,960)
  },

  audience: {
    // --- Follower counts refreshed from the analytics screenshots (live, 2026-07-12). ---
    totalFollowers: "67K",   // 52,038 + 13,250 + 1,770 = 67,058
    tiktok:         "52K",   // TikTok 52,038 followers
    instagram:      "13.3K", // Instagram 13,250 followers
    youtube:        "1.8K",  // YouTube 1,770 subscribers

    // Combined, weighted across YT + IG + TikTok. Percentages.
    age: { "18-24": 14, "25-34": 39, "35-44": 29, "45-54": 12, "55+": 6 }, // jsx:5774 COMBINED_AGE
    gender: { male: 53, female: 47 },                                       // jsx:5994 combined GenderBar
    location: [                                                             // jsx:5775 COMBINED_GEO
      { country: "Australia",      flag: "🇦🇺", pct: 38 },
      { country: "United States",  flag: "🇺🇸", pct: 39 },
      { country: "Canada",         flag: "🇨🇦", pct: 13 },
      { country: "United Kingdom", flag: "🇬🇧", pct: 10 },
    ],

    coreAudience: "25-44",                            // jsx:5890 Core Age
    coreTags: ["Travel Intent", "Decision Makers"],   // from brief
  },
};
