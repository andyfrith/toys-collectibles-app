export type ItemCondition = 'Mint' | 'Excellent' | 'Good' | 'Loved';

export type ItemImage = {
  id: string;
  itemId: string;
  uri: string;
  alt: string;
  kind: 'primary' | 'detail' | 'marking';
};

export type MetadataSuggestion = {
  field: string;
  value: string;
  confidence: number;
  accepted: boolean;
};

export type AiAnalysis = {
  id: string;
  itemId: string;
  model: string;
  promptVersion: string;
  status: 'complete' | 'needs_review';
  summary: string;
  confidence: number;
  suggestions: MetadataSuggestion[];
  followUpQuestions: string[];
};

export type CollectionItem = {
  id: string;
  ownerId: string;
  title: string;
  description: string;
  category: string;
  collection: string;
  maker: string;
  brand: string;
  franchise?: string;
  year?: string;
  era: string;
  condition: ItemCondition;
  estimatedValue: string;
  acquisitionDate: string;
  acquisitionSource: string;
  storageLocation: string;
  notes: string;
  story: string;
  favorite: boolean;
  tags: string[];
  colors: string[];
  images: ItemImage[];
  aiAnalysis: AiAnalysis;
  createdAt: string;
  updatedAt: string;
};

const ownerId = 'demo-user';

export const catalogItems: CollectionItem[] = [
  {
    id: 'tin-robot-1979',
    ownerId,
    title: 'Clockwork Tin Robot',
    description: 'Lithographed wind-up robot with red chest controls and a visible key.',
    category: 'Vintage toy',
    collection: 'Robots & Space',
    maker: 'Horikawa style',
    brand: 'Unconfirmed',
    franchise: 'Space toys',
    year: '1979',
    era: 'Late 1970s',
    condition: 'Excellent',
    estimatedValue: '$180',
    acquisitionDate: '2022-09-18',
    acquisitionSource: 'Estate sale',
    storageLocation: 'Studio shelf A',
    notes: 'Check foot stamp during next handling session.',
    story:
      'A bright shelf anchor with tiny scuffs at the feet and a surprisingly crisp litho pattern.',
    favorite: true,
    tags: ['robot', 'tin', 'wind-up', 'display'],
    colors: ['#c84c3f', '#d7b65d', '#233044'],
    images: [
      {
        id: 'img-tin-robot-primary',
        itemId: 'tin-robot-1979',
        uri: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80',
        alt: 'Vintage robot toy standing on a neutral surface',
        kind: 'primary',
      },
    ],
    aiAnalysis: {
      id: 'ai-tin-robot-1979',
      itemId: 'tin-robot-1979',
      model: 'mock-vision-v1',
      promptVersion: 'demo-2026-06',
      status: 'complete',
      summary: 'Likely a tin wind-up robot with strong red and gold visual markings.',
      confidence: 0.86,
      suggestions: [
        { field: 'category', value: 'Vintage toy', confidence: 0.9, accepted: true },
        { field: 'material', value: 'Tin lithograph', confidence: 0.81, accepted: false },
      ],
      followUpQuestions: ['Is there a maker mark or country of origin on the back?'],
    },
    createdAt: '2026-06-01T10:00:00Z',
    updatedAt: '2026-06-13T18:00:00Z',
  },
  {
    id: 'space-ranger-card',
    ownerId,
    title: 'Space Ranger Trading Card',
    description: 'Illustrated card with a suited explorer and softened corners.',
    category: 'Collectible card',
    collection: 'Paper Archive',
    maker: 'Galaxy Gum Co.',
    brand: 'Galaxy Gum',
    franchise: 'Space Ranger',
    year: '1984',
    era: '1984',
    condition: 'Good',
    estimatedValue: '$42',
    acquisitionDate: '2023-04-03',
    acquisitionSource: 'Local card show',
    storageLocation: 'Archive binder 02',
    notes: 'Sleeved; photograph back side before insurance export.',
    story: 'One of the first cards added to the archive, kept for the illustrated suit details.',
    favorite: false,
    tags: ['card', 'space', 'illustration', 'binder'],
    colors: ['#315a79', '#e1d2a0', '#7b2f37'],
    images: [
      {
        id: 'img-space-ranger-primary',
        itemId: 'space-ranger-card',
        uri: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=900&q=80',
        alt: 'Collectible card artwork in a protective sleeve',
        kind: 'primary',
      },
    ],
    aiAnalysis: {
      id: 'ai-space-ranger-card',
      itemId: 'space-ranger-card',
      model: 'mock-vision-v1',
      promptVersion: 'demo-2026-06',
      status: 'needs_review',
      summary: 'A paper collectible with readable sci-fi visual cues and moderate edge wear.',
      confidence: 0.79,
      suggestions: [
        { field: 'condition', value: 'Good', confidence: 0.74, accepted: true },
        { field: 'tag', value: 'space', confidence: 0.88, accepted: true },
      ],
      followUpQuestions: ['Is the serial number visible on the back?'],
    },
    createdAt: '2026-06-01T10:05:00Z',
    updatedAt: '2026-06-13T18:00:00Z',
  },
  {
    id: 'ceramic-mascot',
    ownerId,
    title: 'Ceramic Studio Mascot',
    description: 'Small matte-glazed studio figure with handmade surface variation.',
    category: 'Art object',
    collection: 'Studio Art',
    maker: 'Unknown artist',
    brand: 'Artist-made',
    year: '2021',
    era: 'Contemporary',
    condition: 'Mint',
    estimatedValue: '$95',
    acquisitionDate: '2024-01-12',
    acquisitionSource: 'Gallery market',
    storageLocation: 'Glass cabinet',
    notes: 'No chips; maker mark not visible in current image set.',
    story:
      'A small handmade figure with a matte glaze and the kind of expression that changes by angle.',
    favorite: true,
    tags: ['ceramic', 'artist-made', 'cabinet', 'favorite'],
    colors: ['#f2efe5', '#426f68', '#d08b52'],
    images: [
      {
        id: 'img-ceramic-mascot-primary',
        itemId: 'ceramic-mascot',
        uri: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80',
        alt: 'Small ceramic figure with a soft glaze',
        kind: 'primary',
      },
    ],
    aiAnalysis: {
      id: 'ai-ceramic-mascot',
      itemId: 'ceramic-mascot',
      model: 'mock-vision-v1',
      promptVersion: 'demo-2026-06',
      status: 'needs_review',
      summary: 'Handmade ceramic object with matte finish and no visible damage.',
      confidence: 0.72,
      suggestions: [
        { field: 'category', value: 'Art object', confidence: 0.77, accepted: true },
        { field: 'maker', value: 'Unknown artist', confidence: 0.62, accepted: false },
      ],
      followUpQuestions: ['Can you photograph the underside for a maker mark?'],
    },
    createdAt: '2026-06-01T10:10:00Z',
    updatedAt: '2026-06-13T18:00:00Z',
  },
  {
    id: 'diecast-rally-car',
    ownerId,
    title: 'Die-cast Rally Car',
    description: 'Pocket-scale rally model with original stripes and visible roof wear.',
    category: 'Scale model',
    collection: 'Vehicles',
    maker: 'Tomica',
    brand: 'Tomica',
    year: '1994',
    era: '1990s',
    condition: 'Loved',
    estimatedValue: '$28',
    acquisitionDate: '2021-11-07',
    acquisitionSource: 'Childhood collection',
    storageLocation: 'Drawer tray 04',
    notes: 'Wheels intact; decals partially worn.',
    story:
      'A pocket-scale model with honest play wear, still carrying its original racing stripes.',
    favorite: false,
    tags: ['die-cast', 'car', 'racing', 'play-wear'],
    colors: ['#2f6f9f', '#f5f0df', '#c63f32'],
    images: [
      {
        id: 'img-diecast-rally-primary',
        itemId: 'diecast-rally-car',
        uri: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=900&q=80',
        alt: 'Small die-cast car model with racing colors',
        kind: 'primary',
      },
    ],
    aiAnalysis: {
      id: 'ai-diecast-rally-car',
      itemId: 'diecast-rally-car',
      model: 'mock-vision-v1',
      promptVersion: 'demo-2026-06',
      status: 'complete',
      summary: 'Die-cast racing car with play wear and intact wheels.',
      confidence: 0.9,
      suggestions: [
        { field: 'category', value: 'Scale model', confidence: 0.92, accepted: true },
        { field: 'condition', value: 'Loved', confidence: 0.84, accepted: true },
      ],
      followUpQuestions: ['Should roof paint wear be photographed as a detail image?'],
    },
    createdAt: '2026-06-01T10:15:00Z',
    updatedAt: '2026-06-13T18:00:00Z',
  },
  {
    id: 'kaiju-vinyl-figure',
    ownerId,
    title: 'Soft Vinyl Kaiju Figure',
    description: 'Emerald soft-vinyl monster figure with painted yellow eyes.',
    category: 'Designer toy',
    collection: 'Creatures',
    maker: 'Marusan-inspired',
    brand: 'Unconfirmed',
    franchise: 'Kaiju',
    year: '2018',
    era: '2010s',
    condition: 'Excellent',
    estimatedValue: '$120',
    acquisitionDate: '2023-08-26',
    acquisitionSource: 'Convention booth',
    storageLocation: 'Studio shelf B',
    notes: 'Header card missing; figure colorway needs confirmation.',
    story: 'Bought for its theatrical stance and saturated green vinyl.',
    favorite: true,
    tags: ['kaiju', 'vinyl', 'monster', 'designer-toy'],
    colors: ['#2f7d55', '#e7c65c', '#2a2525'],
    images: [
      {
        id: 'img-kaiju-primary',
        itemId: 'kaiju-vinyl-figure',
        uri: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=900&q=80',
        alt: 'Colorful vinyl creature figure',
        kind: 'primary',
      },
    ],
    aiAnalysis: {
      id: 'ai-kaiju-vinyl-figure',
      itemId: 'kaiju-vinyl-figure',
      model: 'mock-vision-v1',
      promptVersion: 'demo-2026-06',
      status: 'needs_review',
      summary: 'Soft vinyl monster toy with likely designer-toy or kaiju classification.',
      confidence: 0.76,
      suggestions: [
        { field: 'category', value: 'Designer toy', confidence: 0.8, accepted: true },
        { field: 'tag', value: 'kaiju', confidence: 0.72, accepted: false },
      ],
      followUpQuestions: ['Is there a foot stamp identifying the studio?'],
    },
    createdAt: '2026-06-01T10:20:00Z',
    updatedAt: '2026-06-13T18:00:00Z',
  },
  {
    id: 'wooden-pull-duck',
    ownerId,
    title: 'Painted Wooden Pull Duck',
    description: 'Small painted pull toy with red wheels and cotton pull cord.',
    category: 'Vintage toy',
    collection: 'Folk Toys',
    maker: 'Unknown maker',
    brand: 'Unbranded',
    year: '1965',
    era: '1960s',
    condition: 'Good',
    estimatedValue: '$65',
    acquisitionDate: '2022-05-14',
    acquisitionSource: 'Antique mall',
    storageLocation: 'Hall cabinet',
    notes: 'Cord appears replaced; paint is stable but crazed.',
    story: 'A quiet folk-toy piece that gives the archive a warmer, handmade register.',
    favorite: false,
    tags: ['wood', 'pull-toy', 'folk', 'painted'],
    colors: ['#e6d27a', '#b64334', '#425d48'],
    images: [
      {
        id: 'img-wooden-duck-primary',
        itemId: 'wooden-pull-duck',
        uri: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80',
        alt: 'Painted vintage wooden pull toy',
        kind: 'primary',
      },
    ],
    aiAnalysis: {
      id: 'ai-wooden-pull-duck',
      itemId: 'wooden-pull-duck',
      model: 'mock-vision-v1',
      promptVersion: 'demo-2026-06',
      status: 'complete',
      summary: 'Painted wooden pull toy with age-consistent surface wear.',
      confidence: 0.83,
      suggestions: [
        { field: 'material', value: 'Painted wood', confidence: 0.88, accepted: true },
        { field: 'era', value: '1960s', confidence: 0.66, accepted: false },
      ],
      followUpQuestions: ['Is the pull cord original or replaced?'],
    },
    createdAt: '2026-06-01T10:25:00Z',
    updatedAt: '2026-06-13T18:00:00Z',
  },
  {
    id: 'enamel-robot-pin',
    ownerId,
    title: 'Enamel Robot Club Pin',
    description: 'Small hard-enamel lapel pin with a blue robot face and brass back.',
    category: 'Memorabilia',
    collection: 'Pins & Badges',
    maker: 'Rocket Club',
    brand: 'Rocket Club',
    franchise: 'Robot Club',
    year: '2004',
    era: '2000s',
    condition: 'Mint',
    estimatedValue: '$18',
    acquisitionDate: '2020-02-02',
    acquisitionSource: 'Gift',
    storageLocation: 'Flat file drawer',
    notes: 'Backer card retained in sleeve.',
    story: 'A small badge from a friend that became the seed for the robot sub-collection.',
    favorite: true,
    tags: ['pin', 'robot', 'enamel', 'gift'],
    colors: ['#346ca4', '#f2d479', '#20242d'],
    images: [
      {
        id: 'img-enamel-pin-primary',
        itemId: 'enamel-robot-pin',
        uri: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=900&q=80',
        alt: 'Small collectible pin on a backing card',
        kind: 'primary',
      },
    ],
    aiAnalysis: {
      id: 'ai-enamel-robot-pin',
      itemId: 'enamel-robot-pin',
      model: 'mock-vision-v1',
      promptVersion: 'demo-2026-06',
      status: 'complete',
      summary: 'Hard-enamel robot pin with retained packaging and low visible wear.',
      confidence: 0.87,
      suggestions: [
        { field: 'category', value: 'Memorabilia', confidence: 0.84, accepted: true },
        { field: 'condition', value: 'Mint', confidence: 0.82, accepted: true },
      ],
      followUpQuestions: ['Should the backer card be photographed separately?'],
    },
    createdAt: '2026-06-01T10:30:00Z',
    updatedAt: '2026-06-13T18:00:00Z',
  },
  {
    id: 'resin-astronaut-bust',
    ownerId,
    title: 'Resin Astronaut Bust',
    description: 'Limited resin bust with pearlescent helmet and numbered underside.',
    category: 'Art object',
    collection: 'Studio Art',
    maker: 'Luna Workshop',
    brand: 'Luna Workshop',
    franchise: 'Original',
    year: '2020',
    era: 'Contemporary',
    condition: 'Excellent',
    estimatedValue: '$210',
    acquisitionDate: '2024-03-22',
    acquisitionSource: 'Artist drop',
    storageLocation: 'Glass cabinet',
    notes: 'Edition number should be added from underside photo.',
    story: 'A display piece that bridges toy culture and small-run sculpture.',
    favorite: true,
    tags: ['resin', 'astronaut', 'limited-run', 'sculpture'],
    colors: ['#e8e6dd', '#8ba3b8', '#c7a063'],
    images: [
      {
        id: 'img-astronaut-bust-primary',
        itemId: 'resin-astronaut-bust',
        uri: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
        alt: 'Astronaut-inspired collectible display object',
        kind: 'primary',
      },
    ],
    aiAnalysis: {
      id: 'ai-resin-astronaut-bust',
      itemId: 'resin-astronaut-bust',
      model: 'mock-vision-v1',
      promptVersion: 'demo-2026-06',
      status: 'needs_review',
      summary: 'Space-themed resin art object with likely limited-edition context.',
      confidence: 0.78,
      suggestions: [
        { field: 'material', value: 'Resin', confidence: 0.78, accepted: true },
        { field: 'category', value: 'Art object', confidence: 0.74, accepted: true },
      ],
      followUpQuestions: ['What edition number is marked underneath?'],
    },
    createdAt: '2026-06-01T10:35:00Z',
    updatedAt: '2026-06-13T18:00:00Z',
  },
  {
    id: 'japanese-gashapon-cat',
    ownerId,
    title: 'Capsule Cat Figure',
    description: 'Tiny seated cat figure from a Japanese capsule-toy series.',
    category: 'Capsule toy',
    collection: 'Miniatures',
    maker: 'Bandai',
    brand: 'Bandai',
    franchise: 'Unknown series',
    year: '2016',
    era: '2010s',
    condition: 'Excellent',
    estimatedValue: '$12',
    acquisitionDate: '2019-10-19',
    acquisitionSource: 'Tokyo capsule machine',
    storageLocation: 'Miniatures drawer',
    notes: 'Series insert is missing; identify from pose and paint later.',
    story: 'A tiny travel memory that still feels more specific than its size should allow.',
    favorite: false,
    tags: ['gashapon', 'cat', 'miniature', 'japan'],
    colors: ['#ded6c8', '#6f5542', '#d78b65'],
    images: [
      {
        id: 'img-gashapon-cat-primary',
        itemId: 'japanese-gashapon-cat',
        uri: 'https://images.unsplash.com/photo-1570824104453-508955ab713e?auto=format&fit=crop&w=900&q=80',
        alt: 'Small capsule toy figure',
        kind: 'primary',
      },
    ],
    aiAnalysis: {
      id: 'ai-japanese-gashapon-cat',
      itemId: 'japanese-gashapon-cat',
      model: 'mock-vision-v1',
      promptVersion: 'demo-2026-06',
      status: 'needs_review',
      summary: 'Miniature animal figure likely from a capsule-toy series.',
      confidence: 0.71,
      suggestions: [
        { field: 'category', value: 'Capsule toy', confidence: 0.76, accepted: true },
        { field: 'brand', value: 'Bandai', confidence: 0.58, accepted: false },
      ],
      followUpQuestions: ['Do you have the capsule insert or series sheet?'],
    },
    createdAt: '2026-06-01T10:40:00Z',
    updatedAt: '2026-06-13T18:00:00Z',
  },
  {
    id: 'screenprint-hero-poster',
    ownerId,
    title: 'Masked Hero Screenprint',
    description: 'Small-format screenprint with bold masked-hero portrait.',
    category: 'Print',
    collection: 'Paper Archive',
    maker: 'North Star Press',
    brand: 'North Star Press',
    franchise: 'Original hero',
    year: '2012',
    era: '2010s',
    condition: 'Mint',
    estimatedValue: '$75',
    acquisitionDate: '2021-06-11',
    acquisitionSource: 'Online print drop',
    storageLocation: 'Flat file drawer',
    notes: 'Signed but unnumbered; stored in acid-free sleeve.',
    story: 'A graphic punctuation mark in the collection, all sharp ink and Saturday energy.',
    favorite: false,
    tags: ['print', 'screenprint', 'hero', 'paper'],
    colors: ['#25283a', '#e9c854', '#d64c3b'],
    images: [
      {
        id: 'img-screenprint-primary',
        itemId: 'screenprint-hero-poster',
        uri: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=900&q=80',
        alt: 'Colorful graphic print stored flat',
        kind: 'primary',
      },
    ],
    aiAnalysis: {
      id: 'ai-screenprint-hero-poster',
      itemId: 'screenprint-hero-poster',
      model: 'mock-vision-v1',
      promptVersion: 'demo-2026-06',
      status: 'complete',
      summary: 'Graphic paper artwork with strong print-like color separation.',
      confidence: 0.85,
      suggestions: [
        { field: 'category', value: 'Print', confidence: 0.86, accepted: true },
        { field: 'storageLocation', value: 'Flat file drawer', confidence: 0.7, accepted: true },
      ],
      followUpQuestions: ['Should signature detail be photographed?'],
    },
    createdAt: '2026-06-01T10:45:00Z',
    updatedAt: '2026-06-13T18:00:00Z',
  },
];

export const mockAiSuggestions = {
  title: 'Battery Operated Space Explorer',
  category: 'Vintage toy',
  description:
    'Painted robot figure with metallic body, red control panel, and visible age marks near the feet.',
  confidence: 0.84,
  suggestedTags: ['robot', 'space toy', 'battery operated', 'metallic finish'],
  questions: [
    'Is there a maker mark or country of origin on the back?',
    'Do you still have the original box or instruction sheet?',
    'Should the visible scuffs be documented as play wear or display wear?',
  ],
};

export function getPrimaryImage(item: CollectionItem) {
  return item.images.find((image) => image.kind === 'primary') ?? item.images[0];
}

export function getAiHighlights(item: CollectionItem) {
  return [
    item.aiAnalysis.summary,
    ...item.aiAnalysis.suggestions.map(
      (suggestion) =>
        `${suggestion.field}: ${suggestion.value} (${Math.round(suggestion.confidence * 100)}%)`
    ),
  ];
}

export function findCatalogItem(id: string) {
  return catalogItems.find((item) => item.id === id);
}
