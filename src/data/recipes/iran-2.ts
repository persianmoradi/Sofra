import type { Recipe } from '../types';

const batmanglij = { who: 'Najmieh Batmanglij', work: 'Food of Life' };
const deravian = { who: 'Naz Deravian', work: 'Bottom of the Pot' };

export const iran2: Recipe[] = [
  {
    slug: 'fesenjan',
    name: 'Fesenjan',
    native: 'فسنجان',
    blurb: 'Chicken in a dark walnut and pomegranate sauce that sits between sweet and sour. A dish for celebrations.',
    time: 120,
    serves: 5,
    level: 'Medium',
    ingredients: [
      {
        items: [
          '250 g walnuts',
          '600 g chicken thighs, bone-in or boneless',
          '1 large onion, finely chopped',
          '4 tbsp pomegranate molasses',
          '1–2 tbsp sugar, to taste',
          '½ tsp turmeric',
          '½ tsp cinnamon',
          '2 cups stock or water',
          '2 tbsp oil, salt and pepper',
          'Steamed rice, to serve',
        ],
      },
    ],
    steps: [
      'Toast the walnuts in a dry pan for 4 minutes, cool, then grind to a fine, oily crumb in a food processor.',
      'Brown the onion in the oil with the turmeric, then add the chicken and sear lightly on all sides.',
      'Stir in the walnuts and stock. Bring to a simmer, cover and cook on very low heat for 1 hour, stirring now and then so the walnuts do not catch.',
      'Add the pomegranate molasses, cinnamon and sugar and cook uncovered for 30 minutes more, until the sauce is thick, dark and glossy and oil gathers on top.',
      'Taste and tune the balance: more molasses for sour, more sugar for sweet. Serve over rice.',
    ],
    tip: 'Brands of pomegranate molasses differ hugely. Add it gradually and taste, as some are sharp and others sweet.',
    sources: [batmanglij, deravian],
  },
  {
    slug: 'mirza-ghasemi',
    name: 'Mirza ghasemi',
    native: 'میرزا قاسمی',
    blurb: 'Smoky charred aubergine, garlic and tomato set with egg. A northern Iranian breakfast or starter.',
    time: 50,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '3 large aubergines',
          '5 garlic cloves, minced',
          '3 tomatoes, grated',
          '2 eggs',
          '1 tsp turmeric',
          '4 tbsp oil',
          'Salt and black pepper',
          'Flatbread, to serve',
        ],
      },
    ],
    steps: [
      'Char the aubergines whole over a flame or under a hot grill for 20–25 minutes until blackened and collapsing. Peel and mash the flesh.',
      'Fry the garlic in the oil with the turmeric for 1 minute, until fragrant but not browned.',
      'Add the tomatoes and cook for 8–10 minutes until thick and the oil separates.',
      'Stir in the aubergine and cook for 10 minutes, reducing it to a dense, smoky mix. Season well.',
      'Make two wells, crack in the eggs, and stir through until just set. Serve warm with bread.',
    ],
    tip: 'Skipping the real char is the only way to ruin this. If you cannot grill over a flame, broil the aubergine as close to the heat as you can.',
    sources: [batmanglij],
  },
  {
    slug: 'sholeh-zard',
    name: 'Sholeh zard',
    native: 'شله زرد',
    blurb: 'A saffron rice pudding perfumed with rose water and cardamom, decorated with cinnamon patterns.',
    time: 90,
    serves: 8,
    level: 'Medium',
    ingredients: [
      {
        items: [
          '1 cup short-grain rice, rinsed',
          '5 cups water',
          '1½ cups sugar',
          '½ tsp ground saffron steeped in ¼ cup hot water',
          '¼ cup rose water',
          '¼ cup butter or oil',
          '½ tsp ground cardamom',
          'Slivered almonds and pistachios',
          'Ground cinnamon, to decorate',
        ],
      },
    ],
    steps: [
      'Simmer the rice in the water for 40–45 minutes, stirring now and then, until it falls apart and turns porridge-like.',
      'Stir in the sugar and cook for 10 minutes, then add the saffron water and butter.',
      'Continue to cook, stirring often, for 15–20 minutes until very thick and glossy. Stir in the cardamom and rose water.',
      'Spoon into bowls and smooth the surface. Leave to set for 1 hour.',
      'Decorate with cinnamon patterns and scatter with nuts.',
    ],
    tip: 'Press a template or stencil of lace or a flower on top, then shake over cinnamon, for the traditional look.',
    sources: [batmanglij],
  },
];
