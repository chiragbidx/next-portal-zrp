// ─── [SNIP: Keep all type and contract definitions unchanged above] ───

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "New",
    badgeOuter: "Streamly is live",
    titleBefore: "Unlimited streaming with",
    titleHighlight: "Streamly",
    titleAfter: "",
    subtitle:
      "All your favorite movies and shows—unlimited streaming, anytime, anywhere. Join now and start watching instantly.",
    primaryCta: { label: "Start Watching", href: "/auth#signup" },
    secondaryCta: { label: "Explore Library", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "Streamly dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Powered by industry leaders",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "TabletSmartphone", name: "AWS" },
      { icon: "ServerCog", name: "Cloudflare" },
      { icon: "Squirrel", name: "Fastly" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why Streamly",
    heading: "A better way to discover entertainment",
    description:
      "Instant access to trending shows, new releases, popular collections, and personalized recommendations—across all your devices.",
    items: [
      {
        icon: "MonitorPlay",
        title: "Blockbuster Streaming",
        description: "Never miss a release. New content added weekly, with classics, exclusives, and trending favorites.",
      },
      {
        icon: "Clock",
        title: "Watch Anytime",
        description: "Available 24/7. Resume where you left off or binge a new series overnight.",
      },
      {
        icon: "Cloud",
        title: "Multi-Device Access",
        description: "Seamlessly stream across web, TV, phone, and tablet with one account.",
      },
      {
        icon: "Users",
        title: "Personal Profiles",
        description: "Multiple user profiles with tailored recommendations for everyone in the family.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "All-in-one streaming platform",
    subtitle:
      "Streamly brings rich content, curated collections, and robust controls so you’re always entertained.",
    items: [
      { icon: "Video", title: "Full HD & 4K Quality", description: "Crisp visuals and premium sound across all supported devices." },
      { icon: "SlidersHorizontal", title: "Personalized Recommendations", description: "AI-powered suggestions based on your tastes and watch history." },
      { icon: "Search", title: "Powerful Search", description: "Instantly find movies, shows, and genres that match your mood." },
      { icon: "Bookmark", title: "Watchlist", description: "Save shows and films to watch later, synced across devices." },
      { icon: "Lock", title: "Parental Controls", description: "Safe viewing modes for kids and customizable access levels." },
      { icon: "Loader", title: "Buffer-Free Playback", description: "Optimized streaming for smooth playback, even on slower connections." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "What sets us apart?",
    subtitle:
      "Built for streaming fans who demand speed, choice, flexibility, and security.",
    items: [
      { title: "Unlimited Streaming", description: "Watch as much as you want with no daily or monthly limits.", pro: false },
      { title: "Family Sharing", description: "Up to 5 profiles per account, with customized recommendations and privacy options.", pro: false },
      { title: "Exclusive Content", description: "Signature Streamly Originals—movies and series only available here.", pro: false },
      { title: "Priority Support", description: "PRO", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Streamly Reviews",
    heading: "Our users love Streamly",
    reviews: [
      { image: "/demo-img.jpg", name: "Alicia Carter", role: "Film Buff", comment: "Streamly made family movie nights so easy. Everyone has their own profile and our watchlist syncs perfectly!", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Jayden Ellis", role: "Tech Blogger", comment: "Lightning-fast streaming and beautiful UI! Streamly feels next-gen compared to competitors.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Prisha Patel", role: "Student", comment: "Love the recommendation engine. I always find something new to binge on weekends.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Oliver Green", role: "Parent", comment: "Parental controls are top-notch! Streamly gives me peace of mind with the kids.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Diego Gomez", role: "Series Fan", comment: "I cancelled my old subscription—Streamly has what I actually want to watch.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Sara Lee", role: "Engineer", comment: "HD streaming works beautifully on every device—even with spotty internet.", rating: 4.7 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet Streamly’s team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Platform Architect"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "David",
        lastName: "Diaz",
        positions: ["Platform Engineer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
      // ...rest unchanged or add as needed
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Plans",
    heading: "Flexible pricing for everyone",
    subtitle: "Choose the plan that fits your streaming style. Cancel anytime.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: false,
        price: 0,
        description: "Try out Streamly with limited content and standard definition.",
        buttonText: "Start free",
        benefits: ["Limited library", "SD streaming", "1 profile", "Basic support"],
      },
      {
        title: "Standard",
        popular: true,
        price: 12,
        description: "Full HD streaming, access to all content, up to 3 profiles.",
        buttonText: "Start trial",
        benefits: ["Full library", "1080p HD", "3 user profiles", "Personalized recommendations", "Cancel anytime"],
      },
      {
        title: "Family",
        popular: false,
        price: 19,
        description: "4K Ultra HD, 5 profiles, best for families or roommates.",
        buttonText: "Upgrade Now",
        benefits: ["Ultra HD + HDR", "5 user profiles", "Parental controls", "Priority support"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Get in touch with Streamly",
    description:
      "Have a question, partnership idea, or press inquiry? We’d love to hear from you. Our support team will reply within a day.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Office", value: "Remote-first • San Francisco, CA" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 5PM PT"] },
    },
    formSubjects: ["Account Support", "Partnership", "Media Inquiry", "Feedback", "Other"],
    formSubmitLabel: "Send Message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      { question: "How do I start streaming with Streamly?", answer: "Sign up for a free account to get instant access, then explore our growing content library." },
      { question: "What devices are supported?", answer: "You can watch on smart TVs, computers, tablets, and smartphones. Just sign in on any device." },
      { question: "Are there any contracts or hidden fees?", answer: "No contracts. Cancel anytime—no hidden fees, ever." },
      { question: "Is Streamly content region-locked?", answer: "Most content is globally available, but some titles may be restricted due to licensing." },
      { question: "Can I share my account?", answer: "Up to 5 users per Family plan—your own watchlists and recommendations." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "Streamly",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "GitHub", href: "https://github.com" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Support", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
          { label: "LinkedIn", href: "https://linkedin.com" },
        ],
      },
    ],
    copyright: "© 2026 Streamly. All rights reserved.",
    attribution: { label: "Powered by Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "Streamly",
    routes: [
      { href: "/#testimonials", label: "Reviews" },
      { href: "/#team", label: "Team" },
      { href: "/#pricing", label: "Plans" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Browse",
    featureImage: { src: "/demo-img.jpg", alt: "Streamly preview" },
    features: [
      { title: "New Releases", description: "Latest movies and series added weekly." },
      { title: "Critic Picks", description: "Curated favorites by our team." },
      { title: "Top Genres", description: "Find what fits your mood: Action, Comedy, Drama, and more." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Get Started",
    dashboardLabel: "My Streamly",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}