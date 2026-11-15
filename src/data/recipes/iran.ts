import type { Recipe } from '../types';

const deravian = {
  who: 'Naz Deravian',
  work: 'Bottom of the Pot',
  url: 'https://amp.cbc.ca/lite/story/1.5064827',
};
const batmanglij = {
  who: 'Najmieh Batmanglij',
  work: 'Food of Life',
  url: 'https://app.ckbk.com/recipe/joon23720c07s001r012/fresh-herb-khoresh',
};

export const iran: Recipe[] = [
  {
    slug: 'ghormeh-sabzi',
    name: 'Ghormeh sabzi',
    native: 'قورمه سبزی',
    blurb: 'A dark, sour herb stew with tender meat, kidney beans and dried limes. Many call it the national dish.',
    time: 210,
    serves: 6,
    level: 'Project',
    ingredients: [
      {
        title: 'Stew',
        items: [
          '600 g beef or lamb stewing meat, cubed',
          '1 large onion, finely diced',
          '1 tsp turmeric',
          '3–4 dried limes (limoo omani), pierced with a fork',
          '1 can (400 g) red kidney beans, drained',
          '4 tbsp oil',
          'Salt and black pepper',
        ],
      },
      {
        title: 'Herbs',
        items: ['300 g flat-leaf parsley', '200 g coriander', '150 g spring onions or chives', '2 tbsp dried fenugreek leaves (shanbalileh)'],
      },
      { title: 'To serve', items: ['Steamed basmati rice (chelow)', 'Yogurt and raw onion'] },
    ],
    steps: [
      'Fry the onion in 2 tbsp oil with the turmeric until golden. Add the meat and brown on all sides.',
      'Cover with 700 ml water, add salt and pepper, and simmer gently for 1 hour.',
      'Meanwhile, wash and thoroughly dry the fresh herbs, then chop them very finely.',
      'Fry the chopped herbs in the remaining oil over medium heat for 20–25 minutes, stirring often, until deep dark green and fragrant. Add the fenugreek for the last 2 minutes.',
      'Stir the herbs, pierced dried limes and beans into the meat. Simmer partly covered for 1.5 hours, until the oil rises to the surface.',
      'Taste and balance with salt. If it isn’t sour enough, squeeze a dried lime against the side of the pot. Serve with rice and yogurt.',
    ],
    tip: 'Don’t rush the herbs. Frying them until they darken is where the savoury depth comes from.',
    sources: [deravian, batmanglij],
  },
  {
    slug: 'tahdig',
    name: 'Tahdig',
    native: 'ته‌دیگ',
    blurb: 'The crown of Persian rice: a saffron-gold crust you flip out of the pot in one piece.',
    time: 90,
    serves: 5,
    level: 'Medium',
    ingredients: [
      {
        items: [
          '3 cups basmati rice',
          '½ tsp ground saffron steeped in 3 tbsp hot water',
          '⅓ cup neutral oil or melted butter',
          '½ cup plain yogurt',
          '1 egg yolk (optional)',
          'Salt',
        ],
      },
    ],
    steps: [
      'Rinse the rice in several changes of water until it runs mostly clear, then soak for 30 minutes to 2 hours.',
      'Boil in generously salted water for 6–8 minutes, until the grains are tender outside but still firm in the middle. Drain and rinse with lukewarm water.',
      'Mix about a quarter of the rice with the yogurt, yolk and 2 tbsp of the saffron water.',
      'Heat the oil in a non-stick pot and spread the yogurt rice across the bottom. Mound the rest of the rice on top and poke a few steam holes with a spoon handle.',
      'Drizzle with remaining saffron water and a little more oil. Wrap the lid in a clean towel and cover tightly.',
      'Cook on medium-high for 5 minutes, then on the lowest heat for 40–45 minutes.',
      'Set the pot on a damp towel for 5 minutes to loosen the crust. Place a platter over it and flip in one confident motion.',
    ],
    tip: 'Listen. A steady, light sizzle means the crust is forming. Silence means too little oil, and loud popping means too much heat.',
    sources: [deravian],
  },
  {
    slug: 'kuku-sabzi',
    name: 'Kuku sabzi',
    native: 'کوکو سبزی',
    blurb: 'A dense green herb omelette, jewelled with walnuts and barberries. Served at Nowruz and everywhere else.',
    time: 35,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '250 g mixed fresh herbs (parsley, coriander, dill, chives), very finely chopped',
          '6 eggs',
          '1 tsp turmeric',
          '1 tbsp plain flour',
          '1 tsp baking powder',
          '40 g walnuts, roughly chopped',
          '1 tbsp barberries (optional)',
          '4 tbsp oil',
          'Salt and pepper',
        ],
      },
    ],
    steps: [
      'Whisk the eggs with the turmeric, flour, baking powder, salt and pepper.',
      'Fold in the herbs, walnuts and barberries until the mixture looks more green than yellow.',
      'Heat the oil in a 24 cm non-stick pan and pour in the mixture, pressing it level.',
      'Cover and cook on low for 10–12 minutes until the underside is golden and the top is nearly set.',
      'Cut into wedges, flip each one and cook for 3–4 minutes more. Serve warm or cold with yogurt and flatbread.',
    ],
    tip: 'Chop the herbs by hand. A food processor bruises them and turns the kuku watery.',
    sources: [batmanglij],
  },
];
