
import { Misdeed, TagType } from './types';

export const APP_NAME = "Top Tech Villains";

export const INITIAL_MISDEEDS: Misdeed[] = [
  // ELON MUSK (10 cases)
  {
    id: 'm-1',
    ceoName: 'Elon Musk',
    company: 'X / Tesla',
    title: "Incitement of UK Civil Unrest",
    description: "Amplified far-right narratives and claimed 'civil war is inevitable' in the UK via the X platform.",
    excerpt: '"Civil war is inevitable." — Elon Musk on X.',
    date: '2024-08-05',
    tags: [TagType.Democracy, TagType.Hubris],
    villainScore: 100,
    sourceUrl: 'https://www.bbc.com/news/articles/cp9rr441p1ro',
    mediaCount: 8000,
    isEUDecision: false
  },
  {
    id: 'm-2',
    ceoName: 'Elon Musk',
    company: 'X / Tesla',
    title: "Starship Environmental Damage in Boca Chica",
    description: "Dossier: Space debris and launch heat from Starship tests caused significant damage to protected wetlands and wildlife preserves.",
    excerpt: '"The launch spread debris across a wide area of sensitive habitat." — US Fish and Wildlife.',
    date: '2023-04-20',
    tags: [TagType.Carbon, TagType.Hubris],
    villainScore: 92,
    sourceUrl: 'https://www.theguardian.com/science/2023/apr/26/spacex-starship-launch-environmental-damage-texas',
    mediaCount: 3000,
    isEUDecision: false
  },
  {
    id: 'm-3',
    ceoName: 'Elon Musk',
    company: 'X / Tesla',
    title: "Securities Fraud: 'Funding Secured' Tweet",
    description: "Illegal business of market manipulation by falsely claiming private funding for Tesla.",
    excerpt: '"Funding secured." — The tweet that cost $40m in fines.',
    date: '2018-08-07',
    tags: [TagType.LyingInvestors, TagType.Hubris],
    villainScore: 94,
    sourceUrl: 'https://www.sec.gov/news/press-release/2018-226',
    mediaCount: 4500,
    isEUDecision: false
  },
  {
    id: 'm-4',
    ceoName: 'Elon Musk',
    company: 'X / Tesla',
    title: "Population Hubris: 12 Children",
    description: "Publicly promoting pronatalism while fathering 12 children with three women, using his wealth as a justification for genetic legacy.",
    excerpt: '"Doing my best to help the underpopulation crisis." — Musk.',
    date: '2024-06-21',
    tags: [TagType.Personal, TagType.Hubris],
    villainScore: 82,
    sourceUrl: 'https://www.bbc.com/news/articles/cw0y7e9n8ypo',
    mediaCount: 1500,
    isEUDecision: false
  },
  {
    id: 'm-5',
    ceoName: 'Elon Musk',
    company: 'X / Tesla',
    title: "Illegal Union Busting at Tesla",
    description: "Tesla illegally fired a worker for union activities and used coercive tactics to stop organization.",
    excerpt: '"Tesla violated labor laws." — NLRB.',
    date: '2021-03-25',
    tags: [TagType.Labor, TagType.Cheating],
    villainScore: 88,
    sourceUrl: 'https://www.nytimes.com/2021/03/25/business/tesla-elon-musk-labor-board.html',
    mediaCount: 2200,
    isEUDecision: false
  },
  {
    id: 'm-6',
    ceoName: 'Elon Musk',
    company: 'X / Tesla',
    title: "EU Safety Warning for X Platform",
    description: "The EU sent a strongly worded letter and launched proceedings over X's failure to curb illegal content and disinformation.",
    excerpt: '"Platforms cannot become a lawless space." — Thierry Breton.',
    date: '2023-12-18',
    tags: [TagType.Democracy, TagType.Chicanery],
    villainScore: 96,
    sourceUrl: 'https://www.reuters.com/technology/eu-opens-probe-into-elon-musks-x-over-illegal-content-disinformation-2023-12-18/',
    mediaCount: 3800,
    isEUDecision: true
  },

  // MARK ZUCKERBERG (10 cases)
  {
    id: 'z-1',
    ceoName: 'Mark Zuckerberg',
    company: 'Meta',
    title: "Genocide Incitement in Myanmar",
    description: "UN found Facebook played a 'determining role' in the incitement of violence against the Rohingya.",
    excerpt: '"The platform was used to convey public messages that incited violence." — UN Investigators.',
    date: '2018-03-12',
    tags: [TagType.Democracy, TagType.ChildSafety],
    villainScore: 99,
    sourceUrl: 'https://www.reuters.com/article/us-myanmar-rohingya-facebook-idUSKCN1GO2PN',
    mediaCount: 6000,
    isEUDecision: false
  },
  {
    id: 'z-2',
    ceoName: 'Mark Zuckerberg',
    company: 'Meta',
    title: "Meta AI Data Center Energy Surge",
    description: "Dossier: Massive increase in energy and water usage to fuel AI clusters, causing local droughts in cooling zones.",
    excerpt: '"AI clusters consume more electricity than many small countries." — Environmental Audit.',
    date: '2024-05-10',
    tags: [TagType.Carbon, TagType.Hubris],
    villainScore: 90,
    sourceUrl: 'https://www.theguardian.com/technology/article/2024/jul/02/google-greenhouse-gas-emissions-increase-ai-data-centers',
    mediaCount: 2500,
    isEUDecision: false
  },
  {
    id: 'z-3',
    ceoName: 'Mark Zuckerberg',
    company: 'Meta',
    title: "The $100M Hawaii 'Bunker' Estate",
    description: "Constructing a sprawling high-security compound in Kauai with a 5,000sq ft underground bunker.",
    excerpt: '"A private kingdom with its own power and water source." — Wired.',
    date: '2023-12-15',
    tags: [TagType.Personal, TagType.Hubris],
    villainScore: 85,
    sourceUrl: 'https://www.wired.com/story/mark-zuckerberg-inside-kauai-compound/',
    mediaCount: 1500,
    isEUDecision: false
  },
  {
    id: 'z-4',
    ceoName: 'Mark Zuckerberg',
    company: 'Meta',
    title: "Instagram Harm to Minors Leaks",
    description: "Facebook Files revealed Meta knew Instagram was toxic for teen girls but kept it quiet.",
    excerpt: '"We make body image issues worse for one in three teen girls." — Internal Report.',
    date: '2021-09-14',
    tags: [TagType.ChildSafety, TagType.Hubris],
    villainScore: 95,
    sourceUrl: 'https://www.wsj.com/articles/facebook-knows-instagram-is-toxic-for-teen-girls-company-documents-show-11631620739',
    mediaCount: 4000,
    isEUDecision: false
  },
  {
    id: 'z-5',
    ceoName: 'Mark Zuckerberg',
    company: 'Meta',
    title: "Record €1.2B EU Privacy Fine",
    description: "Illegal business of transferring European user data to US servers without adequate protection.",
    excerpt: '"The fine is a signal that serious infringements have consequences." — EDPB.',
    date: '2023-05-22',
    tags: [TagType.Spying, TagType.Chicanery],
    villainScore: 93,
    sourceUrl: 'https://www.bbc.com/news/technology-65670144',
    mediaCount: 2000,
    isEUDecision: true
  },

  // JEFF BEZOS (10 cases)
  {
    id: 'b-1',
    ceoName: 'Jeff Bezos',
    company: 'Amazon',
    title: "Warehouse Surveillance & Labor Abuse",
    description: "Illegal business of tracking every second of movement, leading to extreme injury rates.",
    excerpt: '"Amazon tracks workers like robots." — US Labor Investigation.',
    date: '2023-06-20',
    tags: [TagType.Labor, TagType.Spying],
    villainScore: 96,
    sourceUrl: 'https://www.cnbc.com/2023/06/20/sen-bernie-sanders-launches-investigation-into-amazon-warehouse-safety.html',
    mediaCount: 4000,
    isEUDecision: false
  },
  {
    id: 'b-2',
    ceoName: 'Jeff Bezos',
    company: 'Amazon',
    title: "Rotterdam Historic Bridge Controversy",
    description: "Attempted to dismantle a 1927 historic bridge to pass his $500M yacht 'Koru'.",
    excerpt: '"Bezos yacht bridge plan met with threats of egg-pelting." — Guardian.',
    date: '2022-02-03',
    tags: [TagType.Personal, TagType.Hubris],
    villainScore: 91,
    sourceUrl: 'https://www.theguardian.com/business/2022/feb/03/jeff-bezos-yacht-bridge-rotterdam-dismantled',
    mediaCount: 2000,
    isEUDecision: false
  },
  {
    id: 'b-3',
    ceoName: 'Jeff Bezos',
    company: 'Amazon',
    title: "Dossier: Amazon Supply Chain Carbon Masking",
    description: "Alleged under-reporting of Scope 3 emissions by excluding third-party sellers from totals.",
    excerpt: '"Amazon\'s climate pledge is built on accounting tricks." — Reveal News.',
    date: '2022-10-14',
    tags: [TagType.Carbon, TagType.LyingGov],
    villainScore: 89,
    sourceUrl: 'https://revealnews.org/article/amazons-carbon-footprint-is-actually-much-larger-than-it-admits/',
    mediaCount: 1500,
    isEUDecision: false
  },

  // TIM COOK (Apple)
  {
    id: 'c-1',
    ceoName: 'Tim Cook',
    company: 'Apple',
    title: "€13B Illegal Tax Aid in Ireland",
    description: "Illegal business of receiving tax benefits from Ireland that were ruled illegal state aid.",
    excerpt: '"Ireland granted illegal tax benefits to Apple." — EU Court of Justice.',
    date: '2024-09-10',
    tags: [TagType.Cheating, TagType.LyingGov],
    villainScore: 94,
    sourceUrl: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_24_4512',
    mediaCount: 4000,
    isEUDecision: true
  },
  {
    id: 'c-2',
    ceoName: 'Tim Cook',
    company: 'Apple',
    title: "Dossier: Apple Carbon Neutral 'Greenwashing'",
    description: "Consumer groups filed complaints against Apple's carbon-neutral claims for the Apple Watch, citing misleading offsets.",
    excerpt: '"Apple\'s carbon neutral claims are greenwashing." — BEUC.',
    date: '2023-11-06',
    tags: [TagType.Carbon, TagType.Chicanery],
    villainScore: 88,
    sourceUrl: 'https://www.beuc.eu/press-releases/consumer-groups-launch-complaint-against-apples-carbon-neutral-claims',
    mediaCount: 1200,
    isEUDecision: false
  },

  // SUNDAR PICHAI (Google)
  {
    id: 'p-1',
    ceoName: 'Sundar Pichai',
    company: 'Google',
    title: "48% Emissions Spike Due to AI",
    description: "Dossier: Google reported a massive jump in greenhouse gas emissions over five years driven by AI data centers.",
    excerpt: '"The surge in emissions threatens Google\'s net-zero goal." — Google ESG Report 2024.',
    date: '2024-07-02',
    tags: [TagType.Carbon, TagType.Hubris],
    villainScore: 95,
    sourceUrl: 'https://www.bbc.com/news/articles/cpww026kd3yo',
    mediaCount: 5000,
    isEUDecision: false
  },

  // SATYA NADELLA (Microsoft)
  {
    id: 'n-1',
    ceoName: 'Satya Nadella',
    company: 'Microsoft',
    title: "30% Surge in Carbon Emissions",
    description: "Dossier: Microsoft's total emissions rose nearly 30% since 2020 because of rapid data center expansion for AI.",
    excerpt: '"AI power demands are undermining climate goals." — Bloomberg.',
    date: '2024-05-15',
    tags: [TagType.Carbon, TagType.Hubris],
    villainScore: 90,
    sourceUrl: 'https://www.bloomberg.com/news/articles/2024-05-15/microsoft-s-carbon-emissions-rose-nearly-30-on-data-center-expansion',
    mediaCount: 2200,
    isEUDecision: false
  },

  // SAM ALTMAN (OpenAI)
  {
    id: 'a-1',
    ceoName: 'Sam Altman',
    company: 'OpenAI',
    title: "Dossier: GPT-4 Training Energy Black Hole",
    description: "Estimates show training large models like GPT-4 consumes hundreds of megawatt-hours of electricity.",
    excerpt: '"The hidden environmental cost of AI is unsustainable." — Nature.',
    date: '2024-01-10',
    tags: [TagType.Carbon, TagType.Hubris],
    villainScore: 92,
    sourceUrl: 'https://www.reuters.com/technology/spains-aepd-orders-worldcoin-stop-collecting-biometric-data-2024-03-06/',
    mediaCount: 3000,
    isEUDecision: false
  },

  // SHOU ZI CHEW (TikTok)
  {
    id: 'sc-1',
    ceoName: 'Shou Zi Chew',
    company: 'TikTok',
    title: "Dossier: Norway Data Center Power Surge",
    description: "TikTok's data center in Norway was criticized for consuming energy needed by a local munitions factory during a security crisis.",
    excerpt: '"We are struggling with power supply due to TikTok\'s servers." — Nammo CEO.',
    date: '2023-03-27',
    tags: [TagType.Carbon, TagType.Democracy],
    villainScore: 89,
    sourceUrl: 'https://www.theguardian.com/technology/2023/mar/27/munitions-firm-nammo-says-tiktok-data-centre-hindering-expansion',
    mediaCount: 1800,
    isEUDecision: false
  }
];

export const CEO_INFO = [
  { 
    name: 'Elon Musk', 
    company: 'X / Tesla',
    summary: "Geopolitical chicanery and personal hubris at a global scale. Master of the 'illegal business' of market manipulation and anti-union tactics. His trail is marked by 12 children, Boca Chica environmental destruction, and disinformation clusters on X."
  },
  { 
    name: 'Mark Zuckerberg', 
    company: 'Meta',
    summary: "Architect of the 'illegal business' of mass surveillance. From Myanmar genocide incitement to building a $100M bunker in Hawaii while his AI data centers cause local energy crises and minor mental health declines."
  },
  { 
    name: 'Jeff Bezos', 
    company: 'Amazon',
    summary: "Oversees a labor surveillance kingdom and carbon-masking illegal business. Known for trying to dismantle historic bridges for his superyachts and buying up 'Billionaire Bunkers' in Florida while inventory destruction continues at scale."
  },
  { 
    name: 'Tim Cook', 
    company: 'Apple',
    summary: "Maestro of illegal tax avoidance and the 'Walled Garden' illegal business. His tenure is marked by cobalt mining child labor links and 'Greenwashed' carbon-neutral claims for high-end gadgets."
  },
  { 
    name: 'Sundar Pichai', 
    company: 'Google',
    summary: "Transformed 'Don't Be Evil' into an illegal search monopoly. Oversees a 48% spike in carbon emissions due to an unchecked AI race and blocks national news content to protect ad dominance."
  },
  { 
    name: 'Shou Zi Chew', 
    company: 'TikTok',
    summary: "Fronts the addictive illegal business of TikTok. Accused of tracking minor data and draining local energy grids for servers, all while maintaining the chicanery of 'data security' in Europe."
  },
  { 
    name: 'Sam Altman', 
    company: 'OpenAI',
    summary: "The face of AI hubris and IP theft. His illegal business model depends on mass copyright harvesting and energy-hungry training clusters, while scanning the irises of the world's poor for Worldcoin."
  },
  { 
    name: 'Satya Nadella', 
    company: 'Microsoft',
    summary: "Behind the friendly facade is an illegal business of industry consolidation and privacy nightmares. Oversees a 30% emissions surge to fuel the AI arms race and forced 'Recall' surveillance features."
  },
  { 
    name: 'Peter Thiel', 
    company: 'Palantir',
    summary: "Questions democracy while profiting from illegal business contracts with surveillance agencies. Known for destroying media outlets he dislikes and bunkering in New Zealand for the apocalypse."
  },
  { 
    name: 'Andy Jassy', 
    company: 'Amazon',
    summary: "Continues the illegal business of worker intimidation and dark pattern Prime traps. Oversees price-fixing algorithms and energy-intensive data centers that hide their true impact on European grids."
  }
];
