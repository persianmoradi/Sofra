import type { Recipe } from '../types';

const helou = { who: 'Anissa Helou', work: 'Levant: Recipes and Memories from the Middle East' };

export const syria2: Recipe[] = [
  {
    slug: 'yabrak',
    name: 'Yabrak',
    native: 'يبرق',
    blurb: 'Slim vine-leaf rolls of rice and lamb, simmered with lemon, garlic and a touch of pomegranate.',
    time: 120,
    serves: 6,
    level: 'Project',
    ingredients: [
      {
        items: [
          '40 preserved vine leaves, rinsed',
          '300 g minced lamb',
          '¾ cup short-grain rice, rinsed',
          '2 tbsp pomegranate molasses',
          'Juice of 2 lemons',
          '6 garlic cloves, whole',
          'Handful of dried mint',
          '1 tsp allspice, ½ tsp cinnamon',
          '2 tbsp olive oil',
          'Salt',
        ],
      },
    ],
    steps: [
      'Mix the lamb, rice, spices, 1 tbsp of the oil and salt with your hands.',
      'Place a vine leaf shiny-side down, add a small line of filling near the stem, fold in the sides and roll into a slim cigar, not too tight.',
      'Cover the base of a heavy pot with a few spare leaves, scatter in the garlic and arrange the rolls snugly in layers.',
      'Mix lemon juice, pomegranate molasses, remaining oil, mint and 1½ cups water and pour over the rolls. Weigh down with an inverted plate.',
      'Cover and simmer on low for 60–75 minutes until the rice is soft and most liquid is gone. Serve warm or at room temperature.',
    ],
    tip: 'Roll small. Aleppo cooks pride themselves on yabrak as thin as a finger.',
    sources: [helou],
  },
  {
    slug: 'shish-barak',
    name: 'Shish barak',
    native: 'شيش برك',
    blurb: 'Tiny lamb-filled dumplings simmered in warm garlicky yogurt. The ultimate comfort bowl.',
    time: 110,
    serves: 5,
    level: 'Project',
    ingredients: [
      {
        title: 'Dough',
        items: ['300 g plain flour', '1 tsp salt', '150 ml water', '2 tbsp oil'],
      },
      {
        title: 'Filling',
        items: ['250 g minced lamb', '1 onion, finely chopped', '1 tsp allspice', '2 tbsp pine nuts', '1 tbsp oil', 'Salt and pepper'],
      },
      {
        title: 'Yogurt sauce',
        items: ['1 kg plain yogurt', '1 egg white', '1 tbsp cornflour', '4 garlic cloves, crushed', '2 tbsp dried mint', 'Salt'],
      },
      { title: 'To finish', items: ['2 tbsp ghee', '2 tbsp chopped coriander'] },
    ],
    steps: [
      'Knead the dough ingredients until smooth and rest for 30 minutes.',
      'Fry the onion in the oil until soft, brown the lamb, then add the allspice, pine nuts and seasoning. Cool.',
      'Roll the dough very thin and cut 4 cm circles. Put a little filling on each, fold into half-moons and pinch the corners together to make caps.',
      'Bake the dumplings at 200 °C for 10 minutes until pale golden (or boil them for 5 minutes).',
      'Whisk the yogurt with the egg white and cornflour. Heat slowly, stirring constantly in one direction, until it just starts to bubble, then season with salt.',
      'Fry the garlic and mint in the ghee, tip half into the yogurt, add the dumplings and simmer for 5 minutes. Top with the remaining garlic-mint and coriander.',
    ],
    tip: 'Stir only in one direction and never let the yogurt boil hard. The egg white and cornflour keep it from splitting.',
    sources: [helou],
  },
  {
    slug: 'kebab-karaz',
    name: 'Kebab karaz',
    native: 'كباب كرز',
    blurb: 'Aleppo’s lamb meatballs in a sweet-sour cherry sauce, served on toasted bread with pine nuts.',
    time: 55,
    serves: 4,
    level: 'Medium',
    ingredients: [
      {
        title: 'Meatballs',
        items: ['500 g minced lamb', '1 small onion, grated', '1 tsp allspice', '½ tsp cinnamon', 'Salt and pepper'],
      },
      {
        title: 'Sauce',
        items: ['400 g jarred sour cherries, drained (keep ½ cup juice)', '2 tbsp sugar', '1 tbsp pomegranate molasses', '1 tbsp butter'],
      },
      { title: 'To serve', items: ['Toasted pita', 'Toasted pine nuts'] },
    ],
    steps: [
      'Knead the lamb with the onion, spices and seasoning until sticky. Shape into small walnut-sized balls.',
      'Brown the meatballs in a wide pan in batches, then transfer to a plate.',
      'In the same pan, simmer the cherry juice, sugar and pomegranate molasses for 5 minutes.',
      'Add the cherries and meatballs and cook for 10 minutes until the sauce is syrupy and the meatballs cooked through. Swirl in the butter.',
      'Serve over toasted pita, topped with pine nuts.',
    ],
    tip: 'Taste the sauce as it cooks. It should be tart-sweet, so add lemon if your cherries are too sweet.',
    sources: [helou],
  },
];
