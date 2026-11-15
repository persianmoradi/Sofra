export type Source = { who: string; work: string; url?: string };

export type Recipe = {
  slug: string;
  name: string;
  /** Dish name in the country's own script (or Turkish diacritics) */
  native: string;
  blurb: string;
  /** total minutes, excluding soaking/marinating unless noted in steps */
  time: number;
  serves: number;
  level: 'Easy' | 'Medium' | 'Project';
  ingredients: { title?: string; items: string[] }[];
  steps: string[];
  tip: string;
  sources: Source[];
};

export type Country = {
  slug: string;
  name: string;
  native: string;
  lang: string;
  dir: 'rtl' | 'ltr';
  tagline: string;
  intro: string;
  pantry: string[];
  pattern: 'iran' | 'turkey' | 'morocco' | 'egypt' | 'lebanon' | 'syria' | 'iraq' | 'palestine';
  /** base + three glow colours + accent */
  theme: { base: string; b1: string; b2: string; b3: string; accent: string };
};
