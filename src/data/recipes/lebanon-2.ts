import type { Recipe } from '../types';

const helou = { who: 'Anissa Helou', work: 'Levant: Recipes and Memories from the Middle East' };

export const lebanon2: Recipe[] = [
  {
    slug: 'fattoush',
    name: 'Fattoush',
    native: 'فتوش',
    blurb: 'Crunchy salad of chopped vegetables and herbs with crisp pita and a sumac-lemon dressing.',
    time: 25,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        title: 'Salad',
        items: [
          '2 pita breads, split, torn and fried or toasted',
          '1 cos lettuce, chopped',
          '3 tomatoes, cut into chunks',
          '2 small cucumbers, sliced',
          '6 radishes, sliced',
          '4 spring onions, sliced',
          'Handful of mint and parsley leaves',
        ],
      },
      {
        title: 'Dressing',
        items: ['4 tbsp olive oil', '3 tbsp lemon juice', '1 tbsp pomegranate molasses', '1 garlic clove, crushed', '1 tbsp sumac', 'Salt'],
      },
    ],
    steps: [
      'Shake or whisk the dressing ingredients in a jar and leave to sit while you prepare the vegetables.',
      'Toast the pita in a hot oven (200 °C) for 8 minutes until it is crisp and golden, then break it into pieces.',
      'Combine the vegetables and herbs in a large bowl.',
      'Pour on the dressing, toss, and add the pita at the very last moment.',
      'Dust with extra sumac and serve straight away.',
    ],
    tip: 'Add the bread right before serving. Soggy pita is the difference between fattoush and a sad salad.',
    sources: [helou],
  },
  {
    slug: 'manakish-zaatar',
    name: 'Manakish bi zaatar',
    native: 'مناقيش',
    blurb: 'Soft, chewy flatbread painted with za’atar and olive oil. The Lebanese breakfast, straight from the oven.',
    time: 95,
    serves: 4,
    level: 'Medium',
    ingredients: [
      {
        title: 'Dough',
        items: ['300 g plain flour', '1 tsp instant yeast', '1 tsp sugar', '1 tsp salt', '180 ml warm water', '2 tbsp olive oil'],
      },
      { title: 'Topping', items: ['4 tbsp za’atar', '6 tbsp olive oil'] },
      { title: 'To serve', items: ['Tomato, cucumber and fresh mint', 'Labneh'] },
    ],
    steps: [
      'Mix the dough ingredients and knead for 8–10 minutes until smooth. Cover and rise for 1 hour.',
      'Heat the oven to 250 °C with a baking tray inside.',
      'Divide the dough into 4 balls and press each into a 15 cm round, leaving it a little thicker at the rim.',
      'Mix the za’atar with the olive oil and spread on each round, leaving a 1 cm border.',
      'Bake on the hot tray for 8–10 minutes until puffed and golden at the edges.',
      'Serve warm with vegetables, mint and labneh.',
    ],
    tip: 'Keep the topping loose and oily. A paste that is too dry will burn instead of melting into the dough.',
    sources: [helou],
  },
  {
    slug: 'kafta',
    name: 'Kafta bil tahini',
    native: 'كفتة',
    blurb: 'Grilled lamb and parsley kafta skewers with a lemony tahini sauce.',
    time: 40,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        title: 'Kafta',
        items: ['500 g minced lamb or beef', '1 onion, grated and squeezed dry', '1 big bunch parsley, finely chopped', '1 tsp seven-spice', '1 tsp salt', 'Black pepper'],
      },
      {
        title: 'Tahini sauce',
        items: ['4 tbsp tahini', 'Juice of 1 lemon', '1 garlic clove, crushed', '4–5 tbsp cold water', 'Salt'],
      },
      { title: 'To serve', items: ['Flatbread', 'Grilled tomatoes', 'Sliced onion with sumac'] },
    ],
    steps: [
      'Knead the lamb with the onion, parsley, spices and salt for 3–4 minutes until it is sticky and holds together.',
      'Shape around flat skewers into long fingers about 2 cm thick.',
      'Whisk the tahini, lemon, garlic and salt, adding the water a little at a time until pourable.',
      'Grill over a hot fire or a very hot griddle for 3–4 minutes per side until charred and just cooked.',
      'Serve with the tahini sauce, flatbread, tomatoes and sumac onions.',
    ],
    tip: 'Squeeze the grated onion in a cloth. The extra water makes the kafta fall off the skewers.',
    sources: [helou],
  },
];
