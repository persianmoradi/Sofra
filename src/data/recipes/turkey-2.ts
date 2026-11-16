import type { Recipe } from '../types';

const dagdeviren = { who: 'Musa Dağdeviren', work: 'The Turkish Cookbook (Phaidon, 2019)' };

export const turkey2: Recipe[] = [
  {
    slug: 'lahmacun',
    name: 'Lahmacun',
    native: 'Lahmacun',
    blurb: 'A paper-thin crisp flatbread topped with spiced lamb and tomato. Squeeze lemon, add herbs, roll and eat.',
    time: 90,
    serves: 4,
    level: 'Medium',
    ingredients: [
      {
        title: 'Dough',
        items: ['300 g plain flour', '1 tsp instant yeast', '1 tsp salt', '180 ml warm water', '1 tbsp olive oil'],
      },
      {
        title: 'Topping',
        items: [
          '250 g minced lamb or beef',
          '1 small onion, grated',
          '1 red pepper, finely diced',
          '2 tomatoes, grated',
          '3 garlic cloves',
          'Handful of parsley, chopped',
          '1 tbsp pepper paste (biber salçası)',
          '1 tsp pul biber, 1 tsp paprika, salt',
        ],
      },
      { title: 'To serve', items: ['Lemon wedges', 'Parsley and sliced onion'] },
    ],
    steps: [
      'Knead the dough ingredients for 8 minutes until smooth. Cover and rest for 45 minutes.',
      'Mix every topping ingredient well. It should be spreadable, not soupy, so squeeze out excess tomato juice.',
      'Heat the oven to its maximum (250 °C) with a baking tray inside.',
      'Divide the dough into 4 and roll each piece paper-thin into an oval. Spread the topping in a very thin layer right to the edges.',
      'Bake one or two at a time on the hot tray for 5–7 minutes, until the edges are crisp and the meat is cooked.',
      'Serve at once with lemon, parsley and onion. Roll it up and eat it with your hands.',
    ],
    tip: 'Thin is everything. The topping should look nearly transparent, and the base should crackle.',
    sources: [dagdeviren],
  },
  {
    slug: 'imam-bayildi',
    name: 'İmam bayıldı',
    native: 'İmam bayıldı',
    blurb: 'Aubergines braised until silky with onions, tomatoes and olive oil, and eaten cold. The imam fainted, the story goes.',
    time: 80,
    serves: 4,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '4 small aubergines',
          '3 onions, thinly sliced',
          '4 garlic cloves, sliced',
          '3 ripe tomatoes, chopped',
          '1 green pepper, chopped',
          '1 tsp sugar',
          '½ cup olive oil',
          'Handful of parsley',
          'Juice of ½ lemon',
          'Salt',
        ],
      },
    ],
    steps: [
      'Peel the aubergines in stripes, leaving alternate bands of skin. Slit each one lengthwise without cutting through. Salt for 20 minutes, then rinse and pat dry.',
      'Fry the aubergines in a little of the oil for 5 minutes until lightly golden, then set them in a wide pan.',
      'Cook the onions in 3 tbsp oil for 15 minutes until soft and sweet. Add the garlic, pepper, tomatoes, sugar and salt and cook 5 minutes more.',
      'Stuff the mixture into the slits and heap the rest on top. Add the remaining oil, the lemon and ½ cup water to the pan.',
      'Cover and cook gently for 40 minutes until the aubergines are completely tender. Cool to room temperature and scatter with parsley.',
    ],
    tip: 'It tastes better the next day. Make it ahead and keep it in the fridge, then bring it out an hour before serving.',
    sources: [dagdeviren],
  },
  {
    slug: 'sutlac',
    name: 'Fırın sütlaç',
    native: 'Sütlaç',
    blurb: 'Creamy baked rice pudding with a blistered, caramelised top. The classic ending to a Turkish meal.',
    time: 55,
    serves: 6,
    level: 'Easy',
    ingredients: [
      {
        items: [
          '½ cup short-grain rice',
          '1 litre whole milk',
          '½ cup sugar',
          '1 tbsp rice flour or cornflour, mixed with 3 tbsp cold water',
          '1 tsp vanilla',
          'Pinch of salt',
          'Cinnamon, to serve (optional)',
        ],
      },
    ],
    steps: [
      'Boil the rice in 1 cup of water for 10 minutes until the water is absorbed.',
      'Add the milk and simmer for 15–20 minutes, stirring often, until the rice is very soft.',
      'Stir in the sugar, salt and vanilla, then slowly whisk in the flour mixture. Cook for 3–4 more minutes until thick.',
      'Pour into ovenproof dishes and set under a very hot grill for 3–5 minutes, until the surface is dappled with brown. Watch closely.',
      'Cool, then chill for a few hours. Dust with cinnamon if you like.',
    ],
    tip: 'The scorched top is intentional. It gives a slightly bitter edge that balances the sweetness.',
    sources: [dagdeviren],
  },
];
