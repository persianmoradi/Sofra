import type { Recipe } from '../types';

const roden = { who: 'Claudia Roden', work: 'The New Book of Middle Eastern Food' };

export const egypt: Recipe[] = [
  {
    slug: 'koshari',
    name: 'Koshari',
    native: 'كشري',
    blurb: 'Rice, lentils, pasta and chickpeas piled high with spicy tomato sauce and crisp onions. Egypt’s greatest street food.',
    time: 90,
    serves: 5,
    level: 'Medium',
    ingredients: [
      {
        title: 'Base',
        items: [
          '1 cup brown lentils',
          '1 cup short-grain or basmati rice',
          '1 cup small macaroni',
          '½ cup vermicelli, broken',
          '1 can (400 g) chickpeas, drained',
        ],
      },
      { title: 'Crispy onions', items: ['3 large onions, sliced thin', 'Oil for frying', '2 tbsp flour'] },
      {
        title: 'Tomato sauce',
        items: ['2 tbsp oil', '4 garlic cloves, minced', '400 g crushed tomatoes', '1 tsp cumin', '1 tbsp white vinegar', '½ tsp chilli flakes', 'Salt'],
      },
      { title: 'Garlic vinegar', items: ['3 garlic cloves, crushed', '¼ cup white vinegar', '1 tsp cumin', 'Pinch of salt'] },
    ],
    steps: [
      'Fry the onions: toss the slices in flour and fry in hot oil in batches until deep golden and crisp. Drain, keeping a few tablespoons of the oil.',
      'Simmer the lentils in salted water for 20–25 minutes until tender but whole. Drain and keep the cooking water.',
      'Toast the vermicelli in a little of the onion oil until brown, add the rice and stir to coat, then cook in 2 cups of the lentil water with salt for 15–18 minutes.',
      'Boil the macaroni in salted water until just tender, then drain.',
      'For the sauce, fry the garlic in oil for 30 seconds, add tomatoes, cumin, vinegar, chilli and salt, and simmer for 15 minutes.',
      'Stir the garlic, vinegar, cumin and salt together for the dakka sauce.',
      'Build each bowl: rice, lentils, macaroni, chickpeas, then tomato sauce, crispy onions and a splash of dakka.',
    ],
    tip: 'Shop-bought crispy onions work, but frying your own in the oil you use for the rice makes the whole bowl taste more like Cairo.',
    sources: [
      roden,
      { who: 'Great British Chefs', work: 'Koshari recipe', url: 'https://www.greatbritishchefs.com/recipes/koshari-recipe' },
    ],
  },
  {
    slug: 'ful-medames',
    name: 'Ful medames',
    native: 'فول مدمس',
    blurb: 'Slow-cooked fava beans mashed with lemon, garlic, cumin and olive oil. Egyptian breakfast, with fresh bread.',
    time: 25,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '2 cans (about 800 g) fava beans, with their liquid',
          '3 garlic cloves, crushed',
          '1 tsp ground cumin',
          'Juice of 1–2 lemons',
          '3 tbsp olive oil, plus more to finish',
          '½ tsp chilli flakes',
          'Chopped parsley and diced tomato',
          'Hard-boiled eggs and warm pita, to serve',
        ],
      },
    ],
    steps: [
      'Warm the beans with their liquid in a saucepan over medium heat for 10 minutes.',
      'Mash roughly with a fork or potato masher, leaving some beans whole.',
      'Stir in the garlic, cumin, lemon juice, oil and salt. Taste and push the lemon and cumin until bright.',
      'Spoon into a wide bowl and finish with more oil, chilli, parsley and tomato.',
      'Serve with halved eggs and warm pita.',
    ],
    tip: 'With dried beans, soak overnight and simmer for about 90 minutes until completely soft. The texture is creamier.',
    sources: [roden],
  },
  {
    slug: 'molokhia',
    name: 'Molokhia',
    native: 'ملوخية',
    blurb: 'A glossy green soup of finely chopped jute leaves and a garlic-coriander sizzle. Slippery and loved.',
    time: 75,
    serves: 4,
    level: 'Medium',
    ingredients: [
      {
        title: 'Soup',
        items: [
          '4 chicken legs',
          '1 onion, halved',
          '3 cardamom pods',
          '1 litre water',
          '400 g frozen minced molokhia, thawed',
          'Salt',
        ],
      },
      { title: 'Ta’leya (garlic sizzle)', items: ['6 garlic cloves, minced', '1 tbsp ground coriander', '3 tbsp ghee or butter'] },
      { title: 'To serve', items: ['Steamed white rice', 'Lemon wedges', 'Onion rings in vinegar'] },
    ],
    steps: [
      'Simmer the chicken with the onion, cardamom and salt in the water for 40 minutes. Remove the chicken and keep the stock.',
      'Bring 3 cups of the stock to a gentle simmer and stir in the molokhia. Cook for 5–8 minutes without letting it boil hard.',
      'Melt the ghee in a small pan and fry the garlic with the coriander until just golden. This is the ta’leya.',
      'Pour the sizzling ta’leya straight into the soup and stir once. Turn off the heat.',
      'Serve over rice with the chicken, lemon and pickled onions.',
    ],
    tip: 'Never boil molokhia hard or cover it tightly. The leaves go dark and bitter.',
    sources: [roden],
  },
];
