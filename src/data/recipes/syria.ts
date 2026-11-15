import type { Recipe } from '../types';

const helou = { who: 'Anissa Helou', work: 'Levant: Recipes and Memories from the Middle East' };

export const syria: Recipe[] = [
  {
    slug: 'muhammara',
    name: 'Muhammara',
    native: 'محمرة',
    blurb: 'Aleppo’s roasted red pepper and walnut dip: smoky, sweet, sour and a little fiery.',
    time: 25,
    serves: 6,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '3 red bell peppers, roasted and peeled (or 300 g jarred)',
          '100 g walnuts, toasted',
          '40 g fresh breadcrumbs',
          '1 tbsp Aleppo pepper flakes',
          '2 tbsp pomegranate molasses',
          '1 tsp ground cumin',
          '1 garlic clove',
          'Juice of ½ lemon',
          '80 ml olive oil',
          'Salt',
        ],
      },
    ],
    steps: [
      'If roasting your own peppers, char them under a hot grill until blackened, steam in a covered bowl for 10 minutes, then peel and deseed.',
      'Pulse the walnuts, breadcrumbs and garlic in a food processor until coarse.',
      'Add the peppers, Aleppo pepper, molasses, cumin, lemon and salt, and blend to a thick, slightly textured paste.',
      'With the machine running, drizzle in the olive oil.',
      'Taste and adjust sweetness and heat. Serve with a pool of oil on top, warm bread and raw vegetables.',
    ],
    tip: 'Keep some texture. Muhammara should be rustic and a bit nubbly, not hummus-smooth.',
    sources: [
      helou,
      {
        who: 'Grantourismo, from the Academy of Syrian Gastronomy',
        work: 'Muhammara recipe',
        url: 'https://grantourismotravels.com/muhammara-recipe-syrian-walnut-red-pepper-dip/',
      },
    ],
  },
  {
    slug: 'kibbeh-bil-sanieh',
    name: 'Kibbeh bil-sanieh',
    native: 'كبة بالصينية',
    blurb: 'A baked tray of spiced bulgur-and-lamb shell sandwiching a pine nut filling. Aleppo’s signature.',
    time: 100,
    serves: 6,
    level: 'Project',
    ingredients: [
      {
        title: 'Shell',
        items: [
          '350 g fine bulgur',
          '350 g very lean lamb, finely minced twice',
          '1 onion, grated',
          '1 tsp allspice',
          '½ tsp cinnamon',
          '1 tsp salt',
          'Ice water, as needed',
        ],
      },
      {
        title: 'Filling',
        items: ['300 g lamb mince', '1 onion, finely chopped', '60 g pine nuts', '1 tsp allspice', '¼ tsp cinnamon', '2 tbsp ghee or oil', 'Salt and pepper'],
      },
      { title: 'To finish', items: ['4 tbsp melted ghee or butter'] },
    ],
    steps: [
      'Make the filling: sauté the onion in the ghee, add lamb and cook until browned. Stir in the pine nuts, spices and salt. Cool.',
      'Rinse the bulgur, drain well and let it soften for 15 minutes.',
      'Process the lean lamb, grated onion, spices and salt to a smooth paste. Knead it into the bulgur with splashes of ice water until pliable, like dough.',
      'Heat the oven to 200 °C. Oil a 25 × 30 cm tray and press half of the shell mixture across the bottom with wet hands.',
      'Spread the filling over the shell. Flatten the remaining shell mixture between damp palms in patches, lay it over the filling and smooth the top.',
      'Score into diamonds, pour the melted ghee over and bake for 35–40 minutes until golden. Rest 10 minutes before cutting.',
    ],
    tip: 'Wet your hands constantly when shaping. It prevents sticking and gives a smooth top.',
    sources: [helou],
  },
  {
    slug: 'fattet-hummus',
    name: 'Fattet hummus',
    native: 'فتة حمص',
    blurb: 'Crisp bread, warm chickpeas and garlicky yogurt, finished with sizzling butter and pine nuts.',
    time: 30,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '2 pita breads, torn or cut and toasted until crisp',
          '400 g cooked chickpeas, with a cup of their liquid',
          '250 g plain yogurt',
          '1 tbsp tahini',
          '2 garlic cloves, crushed',
          'Juice of 1 lemon',
          '40 g pine nuts',
          '3 tbsp ghee or butter',
          '1 tsp paprika',
          '1 tsp ground cumin',
          'Chopped parsley and salt',
        ],
      },
    ],
    steps: [
      'Warm the chickpeas gently in their liquid with the cumin and salt for 10 minutes.',
      'Stir the yogurt, tahini, garlic and lemon together to a loose sauce.',
      'Spread the crisp pita in a wide dish, spoon the warm chickpeas and a little of their liquid over to soften slightly, then cover with the yogurt.',
      'Fry the pine nuts in the ghee until golden, stir in the paprika and pour sizzling over the top.',
      'Scatter with parsley and eat straight away while the bread is still crisp underneath.',
    ],
    tip: 'Assemble just before serving. This dish has a very short window between crisp and soggy.',
    sources: [helou],
  },
];
