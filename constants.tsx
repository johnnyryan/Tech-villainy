
import React from 'react';
import { Misdeed, TagType } from './types';

export const INITIAL_MISDEEDS: Misdeed[] = [
  {
    id: 'm1',
    ceoName: 'Mark Zuckerberg',
    company: 'Meta',
    title: 'The Kauai Doomsday Fortress',
    description: 'Constructing a $270M compound with a 5,000 sq ft underground bunker, blast doors, and independent food/energy. Prepping for the collapse while his platforms profit from the polarization accelerating it.',
    date: '2023-12-15',
    tags: [TagType.Ego, TagType.Ethics],
    villainScore: 94,
    sourceUrl: 'https://www.wired.com/story/mark-zuckerberg-inside-kauai-compound/'
  },
  {
    id: 'm2',
    ceoName: 'Elon Musk',
    company: 'X / Tesla',
    title: 'Strategic Values Liquidation',
    description: 'Abandoned previous "save the planet" mission to commit $45M/month to political movements explicitly aiming to dismantle climate regulations and human rights frameworks in exchange for regulatory capture.',
    date: '2024-07-16',
    tags: [TagType.Ego, TagType.Ethics, TagType.Tax],
    villainScore: 98,
    sourceUrl: 'https://www.wsj.com/politics/elections/elon-musk-has-said-he-is-committing-45-million-a-month-to-a-new-pro-trump-super-pac-61f1823d'
  },
  {
    id: 'm3',
    ceoName: 'Elon Musk',
    company: 'X',
    title: 'Boosting European Far-Right Extremism',
    description: 'Directly intervening in European domestic affairs by amplifying extremist rhetoric during the UK riots and attacking EU Commissioner Thierry Breton for enforcing the Digital Services Act.',
    date: '2024-08-13',
    tags: [TagType.Ethics, TagType.Ego],
    villainScore: 97,
    sourceUrl: 'https://www.theguardian.com/technology/article/2024/aug/13/elon-musk-thierry-breton-eu-rules-civil-war-uk-riots'
  },
  {
    id: 'm4',
    ceoName: 'Jeff Bezos',
    company: 'Amazon',
    title: 'Brussels Lobbying Ban',
    description: 'Banned from the European Parliament after Amazon refused to engage with labor rights hearings while simultaneously spending millions to lobby against new worker protection laws.',
    date: '2024-02-27',
    tags: [TagType.Labor, TagType.Monopoly],
    villainScore: 91,
    sourceUrl: 'https://www.reuters.com/world/europe/amazon-lobbyists-banned-european-parliament-2024-02-27/'
  },
  {
    id: 'm5',
    ceoName: 'Peter Thiel',
    company: 'Palantir',
    title: 'The New Zealand "Escape Hatch"',
    description: 'Secured New Zealand citizenship in record time without meeting residency requirements to build a survivalist "bolthole" estate, citing a need for a safe haven from global collapse.',
    date: '2017-01-29',
    tags: [TagType.Ego, TagType.Privacy],
    villainScore: 92,
    sourceUrl: 'https://www.theguardian.com/technology/2017/jan/29/peter-thiel-new-zealand-citizenship-donald-trump-silicon-valley'
  },
  {
    id: 'm6',
    ceoName: 'Tim Cook',
    company: 'Apple',
    title: 'Irish Tax Evasion Stand-off',
    description: 'Fighting the EU Commission for nearly a decade to avoid paying €13 billion in illegal state aid, effectively starving European public services while sitting on record cash piles.',
    date: '2024-09-10',
    tags: [TagType.Tax, TagType.Monopoly],
    villainScore: 84,
    sourceUrl: 'https://www.bbc.com/news/articles/c9848p9409lo'
  },
  {
    id: 'm7',
    ceoName: 'Sam Altman',
    company: 'OpenAI',
    title: 'Stealth AI Act Watering',
    description: 'Publicly calls for "safety" while privately lobbying Brussels to water down the EU AI Act, specifically trying to exempt "general purpose" AI from strict transparency requirements.',
    date: '2023-06-20',
    tags: [TagType.Ethics, TagType.Monopoly],
    villainScore: 87,
    sourceUrl: 'https://time.com/6288245/openai-chatgpt-lobbying-eu-ai-act/'
  },
  {
    id: 'm8',
    ceoName: 'Marc Andreessen',
    company: 'a16z',
    title: 'NIMBY Hypocrisy',
    description: 'A major tech investor who wrote "It\'s Time to Build" but lobbied his local government to block affordable multi-family housing next to his $177M estate.',
    date: '2022-08-05',
    tags: [TagType.Ethics, TagType.Ego],
    villainScore: 88,
    sourceUrl: 'https://www.theatlantic.com/ideas/archive/2022/08/marc-andreessen-opposing-housing-atherton-nimby/671061/'
  },
  {
    id: 'm9',
    ceoName: 'Larry Ellison',
    company: 'Oracle',
    title: 'Island Tyranny (Lanai)',
    description: 'Purchased 98% of the island of Lanai, becoming a modern-day feudal lord. Locals report being pushed out of their own homes and businesses by the "CEO of the Island."',
    date: '2022-06-15',
    tags: [TagType.Ego, TagType.Monopoly],
    villainScore: 90,
    sourceUrl: 'https://www.bloomberg.com/news/features/2022-06-15/larry-ellison-s-lanai-island-is-becoming-a-billionaire-s-playground'
  },
  {
    id: 'm10',
    ceoName: 'Elon Musk',
    company: 'SpaceX',
    title: 'Starlink Geopolitical Meddling',
    description: 'Unilaterally disabled Starlink coverage near Crimea during a critical operation, effectively acting as a non-state diplomatic actor and endangering regional security for personal whims.',
    date: '2023-09-07',
    tags: [TagType.Ego, TagType.Ethics],
    villainScore: 96,
    sourceUrl: 'https://www.theguardian.com/technology/2023/sep/07/elon-musk-ordered-starlink-turned-off-ukraine-attack-russian-fleet'
  },
  {
    id: 'm11',
    ceoName: 'Palmer Luckey',
    company: 'Anduril',
    title: 'Militarizing the Border',
    description: 'Pioneered "Virtual Walls" using AI surveillance for borders, exporting high-tech authoritarianism while funding far-right political circles that lobby against migrant human rights.',
    date: '2020-07-02',
    tags: [TagType.Ethics, TagType.Privacy],
    villainScore: 93,
    sourceUrl: 'https://www.nytimes.com/2020/07/02/technology/palmer-luckey-anduril-border.html'
  },
  {
    id: 'm12',
    ceoName: 'Mark Zuckerberg',
    company: 'Meta',
    title: 'Privacy Settlement Defiance',
    description: 'Continued to ignore FTC consent decrees on privacy, leading to a record $5 billion fine—which the company treated as a mere "cost of doing business" rather than a signal to change.',
    date: '2019-07-24',
    tags: [TagType.Privacy, TagType.Ethics],
    villainScore: 89,
    sourceUrl: 'https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook'
  },
  {
    id: 'm13',
    ceoName: 'Sundar Pichai',
    company: 'Google',
    title: 'Systemic Ad-Tech Monopoly',
    description: 'Overlooked the implementation of "Jedi Blue," a secret deal with Facebook to rig ad auctions, directly harming European publishers and digital competition.',
    date: '2022-03-11',
    tags: [TagType.Monopoly, TagType.Ethics],
    villainScore: 86,
    sourceUrl: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_22_1703'
  },
  {
    id: 'm14',
    ceoName: 'Jeff Bezos',
    company: 'Amazon',
    title: 'The Superyacht Bridge Incident',
    description: 'Requested a historic bridge in Rotterdam be dismantled to allow his $500M superyacht to pass. A peak example of individual hubris over public heritage.',
    date: '2022-02-02',
    tags: [TagType.Ego],
    villainScore: 82,
    sourceUrl: 'https://www.nytimes.com/2022/02/03/world/europe/jeff-bezos-yacht-rotterdam-bridge.html'
  },
  {
    id: 'm15',
    ceoName: 'Travis Kalanick',
    company: 'Uber (Legacy)',
    title: 'The "Greyball" Deception',
    description: 'Authorized the use of software to specifically target and deceive European regulators and law enforcement, circumventing the rule of law to gain market dominance.',
    date: '2017-03-03',
    tags: [TagType.Ethics, TagType.Monopoly],
    villainScore: 95,
    sourceUrl: 'https://www.nytimes.com/2017/03/03/technology/uber-greyball-program-evade-authorities.html'
  }
];

export const CEO_INFO = [
  { name: 'Mark Zuckerberg', company: 'Meta', avatar: 'https://picsum.photos/seed/zuck/200' },
  { name: 'Elon Musk', company: 'X / Tesla', avatar: 'https://picsum.photos/seed/elon/200' },
  { name: 'Jeff Bezos', company: 'Amazon', avatar: 'https://picsum.photos/seed/bezos/200' },
  { name: 'Tim Cook', company: 'Apple', avatar: 'https://picsum.photos/seed/cook/200' },
  { name: 'Sundar Pichai', company: 'Google', avatar: 'https://picsum.photos/seed/sundar/200' },
  { name: 'Sam Altman', company: 'OpenAI', avatar: 'https://picsum.photos/seed/sam/200' },
  { name: 'Peter Thiel', company: 'Palantir', avatar: 'https://picsum.photos/seed/thiel/200' },
  { name: 'Marc Andreessen', company: 'a16z', avatar: 'https://picsum.photos/seed/marc/200' },
  { name: 'Larry Ellison', company: 'Oracle', avatar: 'https://picsum.photos/seed/larry/200' },
  { name: 'Palmer Luckey', company: 'Anduril', avatar: 'https://picsum.photos/seed/palmer/200' },
  { name: 'Travis Kalanick', company: 'Ex-Uber', avatar: 'https://picsum.photos/seed/travis/200' },
];

export const APP_NAME = "The Brussels Registry";
export const SUBTITLE = "GDPR-Certified Surveillance of the Surveillants";
