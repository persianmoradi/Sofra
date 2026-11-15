import type { Recipe } from '../types';

const wolfert = { who: 'Paula Wolfert', work: 'The Food of Morocco' };

export const morocco: Recipe[] = [
  {
    slug: 'chicken-tagine',
    name: 'Chicken tagine with preserved lemon & olives',
    native: 'طاجين الدجاج',
    blurb: 'Chicken slow-cooked in ginger, saffron and turmeric, finished with salty lemon and green olives.',
    time: 90,
    serves: 4,
    level: 'Medium',
    ingredients: [
      {
        items: [
          '8 bone-in chicken thighs',
          '2 onions, grated',
          '4 garlic cloves, crushed',
          '1 tsp ground ginger',
          '1 tsp turmeric',
          'Good pinch of saffron threads',
          '½ tsp black pepper',
          '3 tbsp olive oil',
          '150 g green olives, rinsed',
          '1 preserved lemon, rind only, sliced',
          'Handful of chopped coriander and parsley',
          '1 cup water, salt',
        ],
      },
    ],
    steps: [
      'Mix the onions, garlic, ginger, turmeric, saffron, pepper and oil and rub into the chicken. Marinate for 1 hour, or overnight.',
      'Set the chicken and marinade in a tagine or heavy casserole with the water and a little salt.',
      'Cover and cook on low heat for 45 minutes, turning once, until the chicken is tender and the sauce is thick.',
      'Add the olives, preserved lemon and herbs and simmer, uncovered, for 15 more minutes to reduce.',
      'Serve in the pot with plenty of bread to mop up the sauce.',
    ],
    tip: 'Use only the rind of the preserved lemon and rinse it well. The flesh is too sour and salty.',
    sources: [
      wolfert,
      {
        who: 'Paula Wolfert, via The Splendid Table',
        work: 'Chicken tagine with prunes and almonds (Rif style)',
        url: 'https://splendidtable.org/recipes/chicken-tagine-with-prunes-and-almonds-in-the-style-of-the-rif-mountains',
      },
    ],
  },
  {
    slug: 'harira',
    name: 'Harira',
    native: 'حريرة',
    blurb: 'Ramadan’s tomato, lentil and chickpea soup, thickened and aromatic, always served with dates.',
    time: 80,
    serves: 6,
    level: 'Medium',
    ingredients: [
      {
        items: [
          '250 g lamb or beef, cut small (optional)',
          '1 onion, chopped',
          '2 celery stalks, chopped',
          '½ cup brown lentils',
          '1 cup cooked chickpeas',
          '800 g ripe tomatoes, blended (or 1 can)',
          '2 tbsp tomato paste',
          '1 tsp turmeric',
          '1 tsp ginger',
          '½ tsp cinnamon',
          '1 bunch each coriander and parsley, chopped',
          '50 g thin vermicelli',
          '2 tbsp flour whisked into ½ cup water',
          '2 litres water, lemon, dates',
        ],
      },
    ],
    steps: [
      'Put the meat, onion, celery, spices and half the herbs in a large pot with the water. Bring to a boil, then simmer for 30 minutes.',
      'Add the tomatoes, tomato paste and lentils and simmer for 20 minutes.',
      'Add the chickpeas and vermicelli and cook for another 10 minutes.',
      'Slowly stir in the flour-water mixture, whisking constantly, and cook for 5–8 minutes until the soup thickens slightly.',
      'Finish with the remaining herbs and a squeeze of lemon. Serve with dates.',
    ],
    tip: 'Harira tastes even better the next day. Make it ahead.',
    sources: [wolfert],
  },
  {
    slug: 'zaalouk',
    name: 'Zaalouk',
    native: 'زعلوك',
    blurb: 'A warm smoky aubergine and tomato salad with cumin and paprika. Scoop it up with bread.',
    time: 45,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '2 large aubergines',
          '4 ripe tomatoes, grated (or 400 g canned)',
          '4 garlic cloves, minced',
          '1 tsp sweet paprika',
          '1 tsp cumin',
          '¼ tsp cayenne',
          '3 tbsp olive oil',
          'Handful of chopped coriander',
          'Juice of ½ lemon, salt',
        ],
      },
    ],
    steps: [
      'Char the aubergines whole over a gas flame or under a hot grill for 20 minutes, turning, until soft and blistered. Peel and chop roughly.',
      'Warm the oil in a pan and soften the garlic for 30 seconds. Add the tomatoes with the paprika, cumin and cayenne and cook for 10 minutes until thick.',
      'Add the aubergine, mash it into the sauce and cook down for 10 minutes more.',
      'Stir in the coriander, lemon and salt. Serve warm or at room temperature with bread.',
    ],
    tip: 'Charring the aubergine fully, until the skin is black, is where the smoky flavour comes from.',
    sources: [wolfert],
  },
];
