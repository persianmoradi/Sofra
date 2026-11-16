import type { Recipe } from '../types';

const roden = { who: 'Claudia Roden', work: 'The New Book of Middle Eastern Food' };

export const egypt2: Recipe[] = [
  {
    slug: 'taameya',
    name: 'Ta’ameya',
    native: 'طعمية',
    blurb: 'Egypt’s falafel, made with fava beans and a lot of green herbs, bright green inside and crunchy outside.',
    time: 45,
    serves: 4,
    level: 'Medium',
    ingredients: [
      {
        items: [
          '300 g dried peeled split fava beans, soaked overnight',
          '1 onion, roughly chopped',
          '1 bunch each parsley, coriander and dill',
          '4 garlic cloves',
          '1 tsp ground cumin',
          '1 tsp ground coriander',
          '1 tsp baking soda',
          'Salt',
          'Sesame seeds',
          'Oil, for deep-frying',
        ],
      },
    ],
    steps: [
      'Drain the soaked beans well. Blend them with the onion, herbs, garlic and spices to a coarse, damp paste.',
      'Stir in the baking soda and salt and rest for 15 minutes.',
      'Shape into small patties and press one side into sesame seeds.',
      'Fry in 170 °C oil for 3–4 minutes, turning once, until deep golden.',
      'Drain and eat at once in warm pita with tomatoes, salad and tahini.',
    ],
    tip: 'Use dried beans only. Canned ones make the mixture too wet and the patties fall apart in the oil.',
    sources: [roden],
  },
  {
    slug: 'hawawshi',
    name: 'Hawawshi',
    native: 'حواوشي',
    blurb: 'Spiced minced beef baked inside crisp pita until the juices soak into the bread. Cairo comfort food.',
    time: 45,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '500 g minced beef or lamb',
          '1 onion, grated',
          '1 green pepper, finely chopped',
          '1 tomato, finely chopped',
          'Handful of parsley, chopped',
          '1 tsp allspice',
          '1 tsp cumin',
          '1 tsp salt, black pepper',
          '4 pita breads',
          '2 tbsp butter or oil, melted',
        ],
      },
    ],
    steps: [
      'Heat the oven to 200 °C.',
      'Mix the meat with the onion, pepper, tomato, parsley, spices and salt until well combined.',
      'Open each pita along one edge to make a pocket. Spread the meat evenly through the inside, pressing it flat to the edges.',
      'Brush both sides of the pita with melted butter and set on a tray.',
      'Bake for 20–25 minutes, turning once, until the bread is crisp and the meat is cooked.',
      'Cut into wedges and serve with tahini, pickles and salad.',
    ],
    tip: 'Press the filling thin and even. A thick centre will stay raw while the bread burns.',
    sources: [roden],
  },
  {
    slug: 'om-ali',
    name: 'Om Ali',
    native: 'أم علي',
    blurb: 'Egypt’s warm bread-and-milk pudding with nuts, raisins and coconut, baked until the top bubbles and browns.',
    time: 40,
    serves: 6,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '2 sheets ready-made puff pastry, baked and broken up (or 6 croissants, torn)',
          '1 litre whole milk',
          '½ cup sugar',
          '½ cup double cream',
          '½ cup mixed nuts (almonds, pistachios, walnuts)',
          '¼ cup raisins',
          '¼ cup desiccated coconut',
          '1 tsp vanilla',
        ],
      },
    ],
    steps: [
      'Bake the puff pastry according to the packet until golden, cool and break into bite-size pieces.',
      'Heat the oven to 200 °C. Warm the milk with the sugar and vanilla until the sugar dissolves.',
      'Layer the pastry in a baking dish with the nuts, raisins and coconut.',
      'Pour the warm milk over the pastry and drizzle with the cream.',
      'Bake for 15–20 minutes until the top is golden and bubbling. Serve hot.',
    ],
    tip: 'The pastry should stay partly crisp on top and soft beneath. Do not drown it in milk.',
    sources: [roden],
  },
];
