import type { Recipe } from '../types';

const kassis = { who: 'Reem Kassis', work: 'The Palestinian Table' };
const kalla = { who: 'Joudie Kalla', work: 'Palestine on a Plate' };
const falastin = { who: 'Sami Tamimi & Tara Wigley', work: 'Falastin' };

export const palestine2: Recipe[] = [
  {
    slug: 'maftoul',
    name: 'Maftoul',
    native: 'مفتول',
    blurb: 'Hand-rolled Palestinian couscous in a spiced chicken and chickpea stew. A village family dish.',
    time: 100,
    serves: 6,
    level: 'Medium',
    ingredients: [
      {
        items: [
          '400 g maftoul (Palestinian couscous)',
          '1 kg chicken pieces',
          '2 onions, sliced',
          '1 can chickpeas, drained',
          '2 tsp allspice',
          '1 tsp cinnamon',
          '1 tsp caraway (optional)',
          '4 tbsp olive oil',
          '1 litre water or stock',
          'Salt, black pepper',
        ],
      },
    ],
    steps: [
      'Brown the chicken in 2 tbsp of the oil. Add half the onions, the spices, salt and water. Simmer for 40 minutes until the chicken is tender, then lift out the chicken.',
      'Fry the remaining onions in the rest of the oil until golden and sweet.',
      'Measure about 3 cups of the stock into a pot with the chickpeas and bring to the boil. Stir in the maftoul and the onions.',
      'Cover and cook on low heat for 20–25 minutes, until the grains are tender and the stock is absorbed.',
      'Pile the maftoul on a platter, set the chicken on top and serve with any remaining broth on the side.',
    ],
    tip: 'Maftoul takes longer to cook than regular couscous. Test a few grains: they should be tender but still bouncy.',
    sources: [falastin, kassis],
  },
  {
    slug: 'falafel',
    name: 'Falafel',
    native: 'فلافل',
    blurb: 'Crisp outside, bright green and fluffy inside. Made from raw soaked chickpeas, never canned.',
    time: 45,
    serves: 4,
    level: 'Medium',
    ingredients: [
      {
        items: [
          '250 g dried chickpeas, soaked overnight and drained',
          '1 small onion',
          '1 bunch each parsley and coriander',
          '4 garlic cloves',
          '2 tsp ground cumin',
          '2 tsp ground coriander',
          '1 tsp baking powder',
          '1 tsp salt',
          'Oil, for deep-frying',
        ],
      },
      { title: 'To serve', items: ['Flatbread', 'Tahini sauce', 'Tomatoes, cucumber, pickles'] },
    ],
    steps: [
      'Pulse the chickpeas, onion, herbs, garlic, spices and salt in a food processor to a coarse crumb that just holds when squeezed. Do not purée it.',
      'Rest the mixture in the fridge for 30 minutes, then stir in the baking powder.',
      'Shape into small balls or flat discs.',
      'Fry in 180 °C oil for 3–4 minutes, until deep golden, turning once. Drain on paper.',
      'Serve hot in flatbread with tahini, salad and pickles.',
    ],
    tip: 'Test one ball in the oil first. If it breaks up, add a spoon of flour. If it is dense, the mix was too fine.',
    sources: [falastin],
  },
  {
    slug: 'qatayef',
    name: 'Qatayef',
    native: 'قطايف',
    blurb: 'Small stuffed pancakes folded into half-moons, filled with nuts and soaked in syrup. The Ramadan sweet.',
    time: 60,
    serves: 8,
    level: 'Medium',
    ingredients: [
      {
        title: 'Pancakes',
        items: ['1½ cups plain flour', '½ cup fine semolina', '1 tbsp sugar', '1 tsp instant yeast', '1 tsp baking powder', '2 cups warm water'],
      },
      { title: 'Filling', items: ['150 g walnuts, chopped', '3 tbsp sugar', '1 tsp cinnamon', '1 tbsp orange blossom water'] },
      { title: 'Syrup', items: ['1 cup sugar', '½ cup water', '1 tsp lemon juice', '1 tsp rose water'] },
    ],
    steps: [
      'Simmer the syrup ingredients for 8 minutes, then cool.',
      'Whisk the pancake ingredients into a smooth, pourable batter. Rest for 20 minutes.',
      'Cook small 8 cm pancakes on a lightly oiled pan, on one side only, until the top is full of bubbles and set. Do not flip.',
      'Mix the filling. Put a spoonful on each pancake on the cooked side, fold over into a half-moon and pinch the edge shut.',
      'Fry in oil until golden or bake at 200 °C for 12 minutes, brushed with butter. Dip into the cool syrup and serve.',
    ],
    tip: 'Cool syrup with hot qatayef gives the best crunch. Reverse that and they turn soggy.',
    sources: [kalla, falastin],
  },
];
