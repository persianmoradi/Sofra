import type { Recipe } from '../types';

const helou = { who: 'Anissa Helou', work: 'Levant: Recipes and Memories from the Middle East' };

export const lebanon: Recipe[] = [
  {
    slug: 'hummus',
    name: 'Hummus',
    native: 'حمص',
    blurb: 'Cloud-smooth chickpea and tahini dip, finished with a pool of olive oil.',
    time: 120,
    serves: 6,
    level: 'Medium',
    ingredients: [
      {
        items: [
          '250 g dried chickpeas, soaked overnight with 1 tsp baking soda',
          '150 g good tahini',
          'Juice of 2 lemons',
          '2 garlic cloves',
          '1 tsp salt',
          '4–6 ice cubes',
          '1 tsp cumin (optional)',
          'Olive oil, paprika and whole cooked chickpeas, to finish',
        ],
      },
    ],
    steps: [
      'Drain the soaked chickpeas, cover with fresh water and simmer for 60–90 minutes, until they are almost falling apart. Skim any skins that float up.',
      'Whip the tahini, lemon juice, garlic and salt in a food processor for 1 minute, until pale and thick.',
      'Add the hot, drained chickpeas and blend for 3–4 minutes, adding the ice cubes one at a time, until completely smooth and fluffy.',
      'Taste and adjust lemon and salt. Spread in a shallow bowl, making a well in the middle.',
      'Fill the well with olive oil and finish with paprika and a few whole chickpeas.',
    ],
    tip: 'The ice cubes make the hummus lighter and whiter, and the long blending time is not optional.',
    sources: [helou],
  },
  {
    slug: 'tabbouleh',
    name: 'Tabbouleh',
    native: 'تبولة',
    blurb: 'A salad where the parsley is the point: lots of it, finely chopped, with lemon and a little bulgur.',
    time: 25,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '3 big bunches flat-leaf parsley',
          'Small bunch of mint',
          '4 ripe tomatoes, finely diced',
          '4 spring onions, thinly sliced',
          '3 tbsp fine bulgur',
          'Juice of 2–3 lemons',
          '5 tbsp olive oil',
          '½ tsp allspice',
          'Salt',
          'Little gem or cos lettuce leaves, to scoop',
        ],
      },
    ],
    steps: [
      'Soak the bulgur in the lemon juice and the tomato juices for 15 minutes, so it softens and absorbs the flavour.',
      'Wash the parsley and dry it completely. Wet parsley turns the salad to mush.',
      'Gather the parsley into a tight bundle and slice it as thinly as you can with a sharp knife. Chop the mint the same way.',
      'Toss the herbs, tomatoes, spring onions and bulgur mixture together with the allspice, oil and salt.',
      'Serve right away with lettuce leaves as scoops.',
    ],
    tip: 'Dress it at the last minute. Tabbouleh is a salad of herbs, not a salad of bulgur.',
    sources: [helou],
  },
  {
    slug: 'mujaddara',
    name: 'Mujaddara',
    native: 'مجدرة',
    blurb: 'Lentils and bulgur crowned with deeply caramelised onions. A humble recipe that deserves a feast.',
    time: 55,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '1 cup brown lentils',
          '1 cup coarse bulgur',
          '3 large onions, sliced thin',
          '½ cup olive oil',
          '1 tsp cumin',
          '3 cups water',
          'Salt',
          'Yogurt and a chopped cucumber salad, to serve',
        ],
      },
    ],
    steps: [
      'Fry the onions in the olive oil over medium heat for 25–30 minutes, stirring often, until deep brown and crisp at the edges. Lift out half and keep for topping.',
      'Add the lentils, cumin, salt and water to the pan with the rest of the onions. Simmer for 15 minutes.',
      'Stir in the bulgur, cover and cook on low for 15 minutes, until the water has been absorbed.',
      'Rest, covered, for 10 minutes. Fluff with a fork.',
      'Pile onto a plate and top with the reserved crispy onions. Serve with yogurt and salad.',
    ],
    tip: 'Patience with the onions is the entire recipe. Dark, almost-burnt edges are what you want.',
    sources: [helou],
  },
];
