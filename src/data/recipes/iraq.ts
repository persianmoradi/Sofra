import type { Recipe } from '../types';

const nasrallah = {
  who: 'Nawal Nasrallah',
  work: 'Delights from the Garden of Eden',
  url: 'https://app.ckbk.com/recipe/deli98836c09s001ss004r001/dolma',
};

export const iraq: Recipe[] = [
  {
    slug: 'masgouf',
    name: 'Masgouf',
    native: 'مسگوف',
    blurb: 'Tigris river fish split open, marinated in tamarind and turmeric, and roasted next to the fire.',
    time: 60,
    serves: 4,
    level: 'Medium',
    ingredients: [
      {
        title: 'Fish',
        items: ['1 whole carp, sea bream or sea bass (about 1.5 kg), butterflied and scored', '1 tsp salt'],
      },
      {
        title: 'Marinade',
        items: ['4 tbsp olive oil', '2 tbsp tamarind paste', '1 tsp turmeric', '2 tbsp lemon juice', '3 garlic cloves, crushed'],
      },
      { title: 'To serve', items: ['Sliced onion, tomato and lemon', 'Flatbread', 'Amba (pickled mango sauce)'] },
    ],
    steps: [
      'Pat the fish dry and season it generously inside and out with salt.',
      'Whisk the marinade ingredients and rub it over the fish, working it into the cuts. Leave for 30–60 minutes.',
      'Over charcoal, lean the open fish skin-side to the embers at an angle and cook for 25–35 minutes. At home, roast on a tray in a 220 °C oven, skin-side down, for 25–30 minutes.',
      'Turn briefly towards the heat to crisp the flesh side.',
      'Serve on flatbread with raw onion, tomato, lemon and amba.',
    ],
    tip: 'The fire does the work in Baghdad. At home, a very hot oven plus a final blast under the grill gets you close.',
    sources: [nasrallah],
  },
  {
    slug: 'dolma',
    name: 'Dolma',
    native: 'دولمة',
    blurb: 'Vine leaves rolled round spiced lamb and rice, cooked in a tart pomegranate-and-lemon broth.',
    time: 120,
    serves: 6,
    level: 'Project',
    ingredients: [
      {
        title: 'Filling',
        items: [
          '300 g minced lamb or beef',
          '1 cup short-grain rice, rinsed',
          '1 onion, grated',
          '3 tbsp tomato paste',
          '1 tsp baharat (allspice, cinnamon, cumin, pepper)',
          'Handful of dill and parsley, chopped',
          '1 tsp salt',
        ],
      },
      {
        title: 'To cook',
        items: ['About 40 preserved vine leaves, rinsed', '2 potatoes, sliced thick', '2 tbsp pomegranate molasses', 'Juice of 1 lemon', '2 cups hot water'],
      },
    ],
    steps: [
      'Mix everything for the filling with your hands until combined.',
      'Lay a vine leaf shiny-side down and put a heaped teaspoon of filling near the stem. Fold in the sides and roll up firmly but not tight, since the rice swells.',
      'Line a heavy pot with the potato slices and pack the dolma in snugly, seam-side down, in tight layers.',
      'Mix the pomegranate molasses and lemon juice into the hot water and pour it over until it just reaches the top layer.',
      'Weigh down with an upturned plate, cover and simmer on low for 60–75 minutes, until the rice is tender and the liquid has been absorbed.',
      'Rest for 10 minutes, then invert onto a platter.',
    ],
    tip: 'The potato slices are the crispy reward at the bottom of the pot. Fight your family for them.',
    sources: [nasrallah],
  },
  {
    slug: 'timman-bagilla',
    name: 'Timman bagilla',
    native: 'تمن باقلاء',
    blurb: 'Fluffy dill rice studded with fava beans, usually served with lamb or chicken. A spring favourite.',
    time: 60,
    serves: 5,
    level: 'Medium',
    ingredients: [
      {
        items: [
          '2 cups basmati rice',
          '2 cups shelled fava beans (fresh or frozen)',
          '1 big bunch dill (about 100 g), chopped',
          '3 tbsp ghee or oil',
          '½ tsp turmeric',
          '½ tsp ground cardamom',
          'Salt',
          'Roast chicken or lamb, to serve',
        ],
      },
    ],
    steps: [
      'Rinse the rice until the water runs clear, then soak for 30 minutes.',
      'Boil the rice in generously salted water for 5 minutes. Add the fava beans for the last 2 minutes, then drain.',
      'Heat the ghee in a heavy pot and sprinkle in half the dill. Layer the rice and beans on top, sprinkling dill, turmeric and cardamom between layers.',
      'Poke steam holes, wrap the lid in a towel and cook on the lowest heat for 35–40 minutes.',
      'Fluff gently and serve with roast chicken or lamb.',
    ],
    tip: 'Peel the fava beans out of their outer skins if they are large. The rice looks greener and the beans turn silky.',
    sources: [nasrallah],
  },
];
