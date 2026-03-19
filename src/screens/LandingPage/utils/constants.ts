export type NavLink = {
  label: string;
  targetId?: string;
};

export type FooterLink = {
  label: string;
  targetId?: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type PricingPlan = {
  accountLabel: string;
  accountSize: string;
  fee: string;
  profitTarget: string;
  maxDailyLoss: string;
  maxDrawdown: string;
  profitSplit: string;
  isFeatured: boolean;
};

export type LeaderboardTrader = {
  award: string;
  avatar: string;
  name: string;
  earnings: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string | null;
  defaultOpen: boolean;
};

export type Testimonial = {
  name: string;
  payout: string;
  avatarSrc: string;
  flagSrc: string;
  flagAlt: string;
  quote: string;
  accountSize: string;
  date: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "How It Works", targetId: "how-it-works" },
  { label: "Pricing", targetId: "pricing" },
  { label: "Testimonials", targetId: "testimonials" },
  { label: "Leaderboard", targetId: "leaderboard" },
  { label: "FAQ's", targetId: "faqs" },
  { label: "Contact Us", targetId: "contact-us" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "How It Works", targetId: "how-it-works" },
      { label: "Pricing", targetId: "pricing" },
      { label: "Leaderboard", targetId: "leaderboard" },
    ],
  },
  {
    title: "Support & Programs",
    links: [
      { label: "FAQ's", targetId: "faqs" },
      { label: "Contact Us", targetId: "contact-us" },
      { label: "Help Center" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy" },
      { label: "Terms of Service" },
      { label: "Cookie Policy" },
    ],
  },
];

export const HERO_CONTENT = {
  titleLines: ["Trade Our Capital", "Keep the Profits"],
  subtitle:
    "Prove your trading skills through our structured challenges and earn access to funded accounts with real capital. No monthly fees. Keep 80-90% of your profits.",
  watchButtonLabel: "Watch How it Works",
  ctaLabel: "Start Your Challenge",
};

export const CONTACT_SECTION_CONTENT = {
  titleLines: [
    "Ready to Trade Our Capital?",
    "Start your funded trading journey today.",
  ],
  description:
    "Take the challenge and prove your trading skills. Meet the targets while managing risk responsibly. Unlock a funded account and start trading with real capital.",
  inputPlaceholder: "Enter your email",
  sendButtonLabel: "Send",
};

export const FOOTER_CONTENT = {
  description:
    "Funding the next generation of crypto traders. Prove your skill through performance-based challenges. Trade real capital and keep the majority of profits.",
  copyright: "© 2026 Hyperfunded. All rights reserved.",
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    accountLabel: "Account 1",
    accountSize: "$10,000",
    fee: "$99",
    profitTarget: "08%",
    maxDailyLoss: "05%",
    maxDrawdown: "10%",
    profitSplit: "80%",
    isFeatured: false,
  },
  {
    accountLabel: "Account 2",
    accountSize: "$25,000",
    fee: "$199",
    profitTarget: "08%",
    maxDailyLoss: "05%",
    maxDrawdown: "10%",
    profitSplit: "80%",
    isFeatured: false,
  },
  {
    accountLabel: "Account 3",
    accountSize: "$50,000",
    fee: "$297",
    profitTarget: "08%",
    maxDailyLoss: "05%",
    maxDrawdown: "10%",
    profitSplit: "85%",
    isFeatured: true,
  },
  {
    accountLabel: "Account 4",
    accountSize: "$100,000",
    fee: "$497",
    profitTarget: "08%",
    maxDailyLoss: "05%",
    maxDrawdown: "10%",
    profitSplit: "85%",
    isFeatured: false,
  },
  {
    accountLabel: "Account 5",
    accountSize: "$200,000",
    fee: "$797",
    profitTarget: "08%",
    maxDailyLoss: "05%",
    maxDrawdown: "10%",
    profitSplit: "90%",
    isFeatured: false,
  },
];

export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "Pricing & Plans",
  sectionHeading: "Choose Your Account Size",
  sectionSubtitle: "One-time fee. No monthly subscriptions. Full profit split.",
  featuredBadgeLabel: "Most Popular",
  oneTimeFeeLabel: "One Time Fee",
  profitTargetLabel: "Profit Target",
  maxDailyLossLabel: "Max Daily Loss",
  maxDrawdownLabel: "Max Drawdown",
  profitSplitLabel: "Profit Split",
  ctaLabel: "Get Started",
};

export const LEADERBOARD_TRADERS: LeaderboardTrader[] = [
  {
    award: "/images/Container2.png",
    avatar: "/images/user1.png",
    name: "Floyd Miles",
    earnings: "$2,450",
  },
  {
    award: "/images/Container.png",
    avatar: "/images/user2.png",
    name: "Ralph Edwards",
    earnings: "$5,000",
  },
  {
    award: "/images/Container1.png",
    avatar: "/images/user3.png",
    name: "Darrell Steward",
    earnings: "$1,900",
  },
];

export const LEADERBOARD_CONTENT = {
  sectionTitle: "Leaderboard",
  sectionHeading: "Top Traders This Month",
  sectionSubtitle: "Compete with the best and climb the ranks",
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "item-1",
    question: "What is funded trading ?",
    answer:
      "A funded trading challenge is an evaluation process where you prove your trading skills by meeting specific profit targets while following risk management rules. Once you pass, you get access to a funded account with real capital and keep 80-90% of the profits you generate.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    question: "What are the trading rules ?",
    answer: null,
    defaultOpen: false,
  },
  {
    id: "item-3",
    question: "How and when do I get paid ?",
    answer: null,
    defaultOpen: false,
  },
  {
    id: "item-4",
    question: "Can I trade any crypto pair ?",
    answer: null,
    defaultOpen: false,
  },
  {
    id: "item-5",
    question: "What happened if I fail ?",
    answer: null,
    defaultOpen: false,
  },
];

export const FAQ_SECTION_CONTENT = {
  title: "We're Here to Answer",
  titleSecondLine: "All Your Questions",
  description:
    "Find clear answers to the most common questions about Hyperfunded. Learn how our challenges, rules, and payouts work. Everything you need to start trading with confidence.",
  stillHaveQuestions: "Still have questions?",
  ctaLabel: "Start Your Challenge",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Floyd Miles",
    payout: "$8,450",
    avatarSrc: "/images/user1.png",
    flagSrc: "/images/flag1.png",
    flagAlt: "Ellipse",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Darrell Steward",
    payout: "$4,900",
    avatarSrc: "/images/user2.png",
    flagSrc: "/images/flag2.png",
    flagAlt: "Ellipse",
    quote:
      "Clean platform, clear rules, fast payouts. Everything a funded trader needs. Already scaling to $100K account.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Leslie Alexander",
    payout: "$8,450",
    avatarSrc: "/images/user3.png",
    flagSrc: "/images/flag3.png",
    flagAlt: "France",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Leslie Alexander",
    payout: "$8,450",
    avatarSrc: "/images/user3.png",
    flagSrc: "/images/flag3.png",
    flagAlt: "France",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Leslie Alexander",
    payout: "$8,450",
    avatarSrc: "/images/user3.png",
    flagSrc: "/images/flag3.png",
    flagAlt: "France",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Leslie Alexander",
    payout: "$8,450",
    avatarSrc: "/images/user3.png",
    flagSrc: "/images/flag3.png",
    flagAlt: "France",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
  {
    name: "Leslie Alexander",
    payout: "$8,450",
    avatarSrc: "/images/user3.png",
    flagSrc: "/images/flag3.png",
    flagAlt: "France",
    quote:
      "Passed the $50K challenge in 12 days. Received my first payout within 48 hours. This is legit.",
    accountSize: "$25,000.00",
    date: "15/03/2026",
  },
];

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "Testimonials",
  sectionHeading: "Traders Who Got Funded",
  sectionSubtitle: "Real traders. Real payouts. Real results.",
};

export const TRUSTED_PARTNERS_CONTENT = {
  sectionTitle: "How it Works",
  sectionHeading: "Get Funded In Three Simple Steps",
  sectionSubtitle: "Three simple steps to start trading with our capital",
  stepOneTitle: "Choose Your Challenge",
  stepOneDescription:
    "Select your account size from $10K to $200K. Pay a one-time challenge fee and get instant access to your evaluation account.",
  stepTwoTitle: "Pass the Evaluation",
  stepTwoDescription:
    "Hit your profit target while staying within risk rules. Trade any crypto pair, any strategy. We measure skill, not luck.",
  stepThreeTitle: "Get Funded & Earn",
  stepThreeDescription:
    "Trade with real capital and receive 80-90% of your profits. Withdraw anytime. Scale up to larger accounts.",
  ctaLabel: "Start Your Challenge",
};

export const LOGO_CONTACT_CONTENT = {
  title: "Trusted Worldwide",
  heading: "Over 10K+ Organizations Use Our Platform",
};
