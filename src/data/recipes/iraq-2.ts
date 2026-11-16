import type { Recipe } from '../types';

const nasrallah = { who: 'Nawal Nasrallah', work: 'Delights from the Garden of Eden' };

export const iraq2: Recipe[] = [
  {
    slug: 'quzi',
    name: 'Quzi',
    native: 'قوزي',
    blurb: 'Slow-roasted lamb on spiced rice with toasted almonds and raisins. Iraq’s centrepiece for a celebration.',
    time: 220,
    serves: 6,
    level: 'Project',
    ingredients: [
      {
        title: 'Lamb',
        items: [
          '1.5 kg bone-in lamb shoulder',
          '1 onion, quartered',
          '4 garlic cloves',
          '1 tsp cinnamon',
          '1 tsp allspice',
          '½ tsp cardamom',
          '2 tbsp olive oil',
          'Salt and pepper',
        ],
      },
      {
        title: 'Rice',
        items: ['2 cups basmati rice', '3 tbsp butter', '1 tsp cinnamon', '60 g almonds', '60 g raisins', 'Salt'],
      },
    ],
    steps: [
      'Heat the oven to 160 °C. Rub the lamb with the oil, spices and salt and set in a deep roasting dish with the onion, garlic and 2 cups of water.',
      'Cover tightly with foil and roast for 3 hours, until the meat comes away from the bone. Keep the tin juices.',
      'Rinse and soak the rice for 20 minutes. Brown the almonds and raisins in 1 tbsp butter, set aside.',
      'Cook the rice in 3½ cups of the strained lamb juices topped up with water, with the cinnamon, remaining butter and salt, covered, for 18 minutes. Rest 10 minutes.',
      'Heap the rice on a large platter, lay the lamb on top and scatter with almonds and raisins.',
    ],
    tip: 'Do not skip the foil. The lamb steams in its own juices, which then become the cooking liquid for the rice.',
    sources: [nasrallah],
  },
  {
    slug: 'tashreeb',
    name: 'Tashreeb',
    native: 'تشريب',
    blurb: 'Torn flatbread soaked in a tomato, chickpea and lamb stew. A humble Baghdad home meal.',
    time: 100,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '500 g lamb, cut in pieces',
          '1 onion, chopped',
          '2 tomatoes, chopped',
          '1 tbsp tomato paste',
          '1 can chickpeas, drained',
          '1 dried lime, pierced',
          '1 tsp turmeric',
          '1 tsp baharat',
          '1 litre water',
          '3 flatbreads, toasted and torn',
          '2 tbsp oil, salt',
        ],
      },
    ],
    steps: [
      'Brown the lamb in the oil with the onion for 10 minutes. Stir in the turmeric, baharat and tomato paste.',
      'Add the tomatoes, dried lime, water and salt. Simmer for 1 hour, until the lamb is tender.',
      'Add the chickpeas and simmer for 15 minutes more.',
      'Lay the torn toasted bread in a deep dish and pour the hot stew, with plenty of broth, over it.',
      'Let it soak for 3–5 minutes and serve immediately.',
    ],
    tip: 'Toast the bread until dry and crisp first. It then absorbs the broth without turning to glue.',
    sources: [nasrallah],
  },
  {
    slug: 'kleicha',
    name: 'Kleicha',
    native: 'كليجة',
    blurb: 'Soft date-filled cookies scented with cardamom, baked in vast numbers for Eid.',
    time: 80,
    serves: 20,
    level: 'Medium',
    ingredients: [
      {
        title: 'Dough',
        items: ['3 cups plain flour', '200 g butter, melted', '½ cup warm milk', '1 tsp instant yeast', '1 tbsp sugar', '1 tsp ground cardamom', 'Pinch of salt'],
      },
      { title: 'Filling', items: ['300 g date paste', '1 tsp ground cardamom', '1 tsp cinnamon', '1 tbsp ghee or butter'] },
    ],
    steps: [
      'Mix the dough ingredients into a soft, smooth dough. Cover and rest for 30 minutes.',
      'Warm the date paste with the cardamom, cinnamon and ghee, then knead to a smooth paste. Roll into small balls.',
      'Heat the oven to 180 °C. Flatten a walnut-sized piece of dough in your palm, set a date ball in the middle and seal it.',
      'Press each ball gently and decorate the top with a fork or tweezers.',
      'Bake for 20–25 minutes until pale golden. Cool on the tray.',
    ],
    tip: 'Keep the filling slightly firm. If it is too soft the date will leak while baking.',
    sources: [nasrallah],
  },
];
