import type { Recipe } from '../types';

const kassis = {
  who: 'Reem Kassis',
  work: 'The Palestinian Table',
  url: 'https://177milkstreet.com/recipes/palestinian-chicken-rice-maqlubeh',
};
const kalla = { who: 'Joudie Kalla', work: 'Palestine on a Plate' };
const falastin = { who: 'Sami Tamimi & Tara Wigley', work: 'Falastin' };

export const palestine: Recipe[] = [
  {
    slug: 'maqluba',
    name: 'Maqluba',
    native: 'مقلوبة',
    blurb: 'The "upside-down" pot: chicken, fried vegetables and spiced rice, flipped onto a platter at the table.',
    time: 110,
    serves: 6,
    level: 'Medium',
    ingredients: [
      {
        title: 'Pot',
        items: [
          '1 kg bone-in chicken thighs',
          '2 cups basmati rice, rinsed and soaked 30 minutes',
          '2 medium aubergines, sliced and fried',
          '1 small cauliflower, cut into florets and fried',
          '3 tomatoes, sliced',
          '1 onion, quartered',
          '2 bay leaves',
        ],
      },
      {
        title: 'Spices',
        items: ['2 tsp allspice', '1 tsp cinnamon', '1 tsp turmeric', '½ tsp ground cardamom', 'Salt'],
      },
      { title: 'To finish', items: ['Toasted pine nuts or almonds', 'Plain yogurt'] },
    ],
    steps: [
      'Simmer the chicken with the onion, bay and half the spices in 1 litre of water for 30 minutes. Strain, keeping both stock and chicken.',
      'Fry the aubergines and cauliflower in batches until golden. Drain.',
      'Oil a heavy pot and line the base with tomato slices. Layer in the chicken, then the vegetables.',
      'Toss the drained rice with the remaining spices and salt and spread it over the top. Pour over enough hot stock to come 2 cm above the rice.',
      'Bring to a boil, then cover and cook on low for 40 minutes. Rest, off the heat, for 15 minutes.',
      'Run a knife round the edge, put a large platter on top and flip firmly. Wait a minute before lifting the pot. Top with nuts and serve with yogurt.',
    ],
    tip: 'Rest before flipping. A wait of 15 minutes makes the difference between a tall cake and a pile of rice.',
    sources: [kassis, kalla],
  },
  {
    slug: 'musakhan',
    name: 'Musakhan',
    native: 'مسخن',
    blurb: 'Roasted chicken on flatbread soaked with sumac onions and olive oil, one of Palestine’s national dishes.',
    time: 100,
    serves: 5,
    level: 'Medium',
    ingredients: [
      {
        items: [
          '4 chicken legs (thigh and drumstick)',
          '5 large onions, thinly sliced',
          '½ cup good olive oil',
          '3 tbsp sumac',
          '1 tsp allspice',
          '½ tsp cinnamon',
          '4 large flatbreads (taboon, or Lebanese/pita)',
          '60 g pine nuts, toasted',
          'Yogurt and salt',
        ],
      },
    ],
    steps: [
      'Heat the oven to 200 °C. Rub the chicken with salt, allspice, cinnamon, 1 tbsp sumac and a little oil. Roast for 45 minutes.',
      'Cook the onions gently in the remaining oil with salt for 25–30 minutes until completely soft and sweet. Stir in the rest of the sumac.',
      'Lay the flatbreads on a tray and pile the onions on top, spooning over some of the chicken juices.',
      'Place the chicken on the onions and bake for 10 minutes more, so the bread crisps and soaks up the juices.',
      'Scatter with pine nuts and serve with yogurt, eating with your hands.',
    ],
    tip: 'Use the best olive oil you have. With so few ingredients you will taste it.',
    sources: [kassis],
  },
  {
    slug: 'knafeh-nabulsiyeh',
    name: 'Knafeh Nabulsiyeh',
    native: 'كنافة نابلسية',
    blurb: 'Golden shredded pastry over melted white cheese, soaked in fragrant syrup. The dessert of Nablus.',
    time: 75,
    serves: 8,
    level: 'Medium',
    ingredients: [
      {
        title: 'Knafeh',
        items: [
          '400 g shredded kataifi pastry',
          '200 g ghee or melted butter',
          '500 g Nabulsi cheese, soaked in water for 2–3 hours (or half mozzarella, half ricotta)',
          '3 tbsp crushed pistachios',
        ],
      },
      {
        title: 'Syrup',
        items: ['1 cup sugar', '½ cup water', '1 tsp lemon juice', '1 tsp orange blossom water'],
      },
    ],
    steps: [
      'Simmer the syrup ingredients for 8–10 minutes, adding the orange blossom water at the end. Cool.',
      'Heat the oven to 200 °C. Pull the kataifi into fine strands and work the melted ghee through it until every strand is coated.',
      'Press half into a buttered 25 cm round tin. Spread the grated or sliced cheese over it, then cover with the rest of the pastry, pressing firmly.',
      'Bake for 30–35 minutes until deep golden.',
      'Spoon the cool syrup over the hot knafeh. Place a plate on top, invert, and scatter with pistachios. Serve immediately, while the cheese is stretchy.',
    ],
    tip: 'Hot knafeh needs cool syrup. The temperature difference keeps the crust crisp.',
    sources: [falastin, kalla],
  },
];
