
import { Misdeed, TagType } from './types';

export const INITIAL_MISDEEDS: Misdeed[] = [
  {
    id: 'm-msft-2004',
    ceoName: 'Steve Ballmer',
    company: 'Microsoft',
    title: 'Abuse of dominance in work group server and media player markets',
    description: 'Microsoft leveraged its Windows monopoly to crush competitors in the server and media software markets by withholding interoperability information.',
    excerpt: '"Microsoft broke EU competition law by leveraging its near monopoly... it must disclose the interoperability information within 120 days." — EU Commission Decision, March 2004.',
    date: '2004-03-24',
    tags: [TagType.Monopoly, TagType.MarketDistortion, TagType.Legal],
    villainScore: 92,
    sourceUrl: 'https://ec.europa.eu/commission/presscorner/detail/en/IP_04_382',
    mediaCount: 3000
  },
  {
    id: 'm-intel-2009',
    ceoName: 'Paul Otellini',
    company: 'Intel',
    title: 'Illegal anti-competitive rebates to PC manufacturers',
    description: 'Intel provided hidden rebates to manufacturers on the condition that they bought all or almost all of their x86 CPUs from Intel, excluding AMD.',
    excerpt: '"Intel has harmed millions of European consumers by deliberately acting to keep competitors out of the market for PC chips for many years." — Neelie Kroes, 2009.',
    date: '2009-05-13',
    tags: [TagType.Monopoly, TagType.MarketDistortion, TagType.Legal],
    villainScore: 89,
    sourceUrl: 'https://ec.europa.eu/commission/presscorner/detail/en/IP_09_745',
    mediaCount: 1200
  },
  {
    id: 'm-google-shopping-2017',
    ceoName: 'Sundar Pichai',
    company: 'Google',
    title: 'Illegal advantage given to Google Shopping in search results',
    description: 'Google systematically gave prominent placement to its own comparison shopping service while demoting those of rivals in its search results.',
    excerpt: '"Google has abused its market dominance as a search engine by promoting its own comparison shopping service." — Margrethe Vestager, 2017.',
    date: '2017-06-27',
    tags: [TagType.Monopoly, TagType.MarketDistortion, TagType.Regulatory],
    villainScore: 91,
    sourceUrl: 'https://ec.europa.eu/commission/presscorner/detail/en/IP_17_1784',
    mediaCount: 2500
  },
  {
    id: 'm-musk-2024-uk',
    ceoName: 'Elon Musk',
    company: 'X / Tesla',
    title: 'Amplification of inflammatory content during UK civil unrest',
    description: 'The use of the X platform to promote inflammatory narratives and predict civil war during periods of heightened social tension in the United Kingdom.',
    excerpt: '"Civil war is inevitable." — Elon Musk on X, responding to footage of riots in the UK, August 2024.',
    date: '2024-08-05',
    tags: [TagType.Extremism, TagType.Ethics, TagType.Regulatory, TagType.Ego],
    villainScore: 98,
    sourceUrl: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_23_6709',
    mediaCount: 1500
  },
  {
    id: 'm-zuck-cambridge',
    ceoName: 'Mark Zuckerberg',
    company: 'Meta',
    title: 'Unauthorized exploitation of data for political manipulation (Cambridge Analytica)',
    description: 'The exposure of over 87 million users\' personal data to political consulting firms without consent.',
    excerpt: '"We have a responsibility to protect your data, and if we can\'t then we don\'t deserve to serve you." — Mark Zuckerberg, 2018.',
    date: '2018-03-17',
    tags: [TagType.Privacy, TagType.Legal, TagType.MarketDistortion, TagType.Ego],
    villainScore: 94,
    sourceUrl: 'https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook',
    mediaCount: 2200
  },
  {
    id: 'm-thiel-democracy',
    ceoName: 'Peter Thiel',
    company: 'Palantir',
    title: 'Public statements questioning the compatibility of freedom and democracy',
    description: 'Explicit public rejection of democratic governance in favor of technological expansion.',
    excerpt: '"I no longer believe that freedom and democracy are compatible." — Peter Thiel, Cato Unbound, April 2009.',
    date: '2010-04-13',
    tags: [TagType.Ego, TagType.Ethics],
    villainScore: 97,
    sourceUrl: 'https://www.cato-unbound.org/2009/04/13/peter-thiel/education-libertarian/',
    mediaCount: 900
  },
  {
    id: 'm-cook-tax',
    ceoName: 'Tim Cook',
    company: 'Apple',
    title: 'Systemic avoidance of €13 billion in corporate tax obligations',
    description: 'Utilizing illegal state aid arrangements with Ireland to channel global profits through a shell entity.',
    excerpt: '"Ireland granted illegal tax benefits to Apple, which must now be repaid in full." — ECJ final ruling, 2024.',
    date: '2024-09-10',
    tags: [TagType.Tax, TagType.Legal, TagType.Regulatory],
    villainScore: 85,
    sourceUrl: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_24_4512',
    mediaCount: 950
  },
  {
    id: 'm-uber-files',
    ceoName: 'Travis Kalanick',
    company: 'Uber',
    title: 'Flouting of transport laws and lobbying for legislative changes',
    description: 'The "Uber Files" revealed a global campaign of law-breaking and secret lobbying to force entry into regulated taxi markets.',
    excerpt: '"Uber broke laws, duped police and secretly lobbied governments." — The Guardian, 2022 investigative report.',
    date: '2022-07-10',
    tags: [TagType.Regulatory, TagType.Legal, TagType.Ethics],
    villainScore: 88,
    sourceUrl: 'https://www.theguardian.com/news/2022/jul/10/uber-files-leak-reveals-global-lobbying-campaign',
    mediaCount: 1400
  },
  {
    id: 'm-amazon-marketplace-2022',
    ceoName: 'Andy Jassy',
    company: 'Amazon',
    title: 'Abuse of non-public third-party seller data',
    description: 'Amazon used non-public business data of third-party sellers to benefit its own retail business which competes with those sellers.',
    excerpt: '"Amazon reached a settlement to stop using sellers\' non-public data for its own retail business." — EU Commission, 2022.',
    date: '2022-12-20',
    tags: [TagType.Monopoly, TagType.Privacy, TagType.Regulatory],
    villainScore: 79,
    sourceUrl: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_22_7777',
    mediaCount: 500
  }
];

export const CEO_INFO = [
  { name: 'Mark Zuckerberg', company: 'Meta' },
  { name: 'Elon Musk', company: 'X / Tesla' },
  { name: 'Jeff Bezos', company: 'Amazon' },
  { name: 'Tim Cook', company: 'Apple' },
  { name: 'Sundar Pichai', company: 'Google' },
  { name: 'Satya Nadella', company: 'Microsoft' },
  { name: 'Sam Altman', company: 'OpenAI' },
  { name: 'Peter Thiel', company: 'Palantir' },
  { name: 'Andy Jassy', company: 'Amazon' },
  { name: 'Steve Ballmer', company: 'Microsoft' },
  { name: 'Travis Kalanick', company: 'Uber' }
];

export const APP_NAME = "The Brussels Registry";
