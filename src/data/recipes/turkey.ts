import type { Recipe } from '../types';

const dagdeviren = { who: 'Musa Dağdeviren', work: 'The Turkish Cookbook (Phaidon, 2019)' };

export const turkey: Recipe[] = [
  {
    slug: 'menemen',
    name: 'Menemen',
    native: 'Menemen',
    blurb: 'Soft-scrambled eggs in a pan of melting tomato and green pepper. Breakfast, but it works at any hour.',
    time: 20,
    serves: 2,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '2 tbsp butter or olive oil',
          '2 long green Turkish peppers (or 1 green bell pepper), diced',
          '3 ripe tomatoes, grated or finely chopped',
          '4 eggs',
          '1 tsp pul biber (Turkish chilli flakes)',
          'Salt',
          'Crusty bread, to serve',
        ],
      },
    ],
    steps: [
      'Melt the butter in a wide pan over medium heat and soften the peppers for 3–4 minutes.',
      'Add the tomatoes and a pinch of salt. Cook for about 8 minutes, until the juices reduce to a thick, jammy sauce.',
      'Crack the eggs straight into the pan and break the yolks with a fork. Stir slowly, just a few times.',
      'Take the pan off the heat while the eggs still look slightly wet. They finish cooking in the pan’s heat.',
      'Sprinkle with pul biber and bring the pan straight to the table with bread for dipping.',
    ],
    tip: 'Onions in menemen are a regional argument. Add one finely diced with the peppers if you like, or leave it out and defend the purists.',
    sources: [dagdeviren],
  },
  {
    slug: 'adana-kebap',
    name: 'Adana kebap',
    native: 'Adana kebap',
    blurb: 'Hand-minced lamb and tail fat pressed onto wide skewers and grilled over charcoal until it blisters.',
    time: 60,
    serves: 4,
    level: 'Medium',
    ingredients: [
      {
        title: 'Kebab',
        items: [
          '450 g lamb mince (shoulder)',
          '50 g lamb tail fat or very fatty lamb, finely chopped',
          '2 tbsp pul biber',
          '1 tsp sweet paprika',
          '1 tsp salt',
        ],
      },
      {
        title: 'To serve',
        items: ['Lavash or flatbread', 'Grilled tomatoes and long green peppers', 'Sliced red onion tossed with sumac and parsley', 'Ayran'],
      },
    ],
    steps: [
      'Combine the lamb, fat, pul biber, paprika and salt. With wet hands, knead for 8–10 minutes until the mix turns sticky and paste-like.',
      'Chill, covered, for at least 30 minutes so it firms up and holds to the skewer.',
      'Wet your hands and press about a quarter of the mixture onto a wide flat skewer in a 2 cm thick strip. Pinch ridges along it with your fingers.',
      'Grill over very hot charcoal for 3–4 minutes per side, until charred at the edges and just cooked through.',
      'Slide off onto lavash, which soaks up the juices. Serve with the grilled vegetables, sumac onions and cold ayran.',
    ],
    tip: 'Fat is the flavour here. If the mince is lean, the kebab will be dry however well you grill it.',
    sources: [dagdeviren],
  },
  {
    slug: 'mercimek-corbasi',
    name: 'Mercimek çorbası',
    native: 'Mercimek çorbası',
    blurb: 'Silky red lentil soup with a spiced butter swirl. A bowl served in nearly every Turkish home.',
    time: 35,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        title: 'Soup',
        items: [
          '200 g red lentils, rinsed',
          '1 onion, chopped',
          '1 carrot, chopped',
          '1 small potato, chopped',
          '2 tbsp butter',
          '1 tbsp tomato paste',
          '1 tsp cumin',
          '1.2 litres stock or water',
          'Salt',
        ],
      },
      { title: 'To finish', items: ['2 tbsp butter', '1 tsp pul biber', 'Lemon wedges'] },
    ],
    steps: [
      'Soften the onion and carrot in the butter for 5 minutes. Stir in the tomato paste and cumin for a minute.',
      'Add the lentils, potato and stock. Bring to a boil, then simmer for 20 minutes until everything is very soft.',
      'Blend until completely smooth. Loosen with a little hot water if it’s thicker than cream. Season with salt.',
      'Melt the finishing butter with the pul biber until it foams and turns red, then spoon it over each bowl.',
      'Serve with lemon wedges and bread.',
    ],
    tip: 'Squeeze lemon over the soup right before eating. The acidity wakes up the lentils.',
    sources: [dagdeviren],
  },
];
