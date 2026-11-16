import { countries } from './countries';
import { turkey } from './recipes/turkey';
import { turkey2 } from './recipes/turkey-2';
import { iran } from './recipes/iran';
import { iran2 } from './recipes/iran-2';
import { egypt } from './recipes/egypt';
import { egypt2 } from './recipes/egypt-2';
import { iraq } from './recipes/iraq';
import { iraq2 } from './recipes/iraq-2';
import { syria } from './recipes/syria';
import { syria2 } from './recipes/syria-2';
import { lebanon } from './recipes/lebanon';
import { lebanon2 } from './recipes/lebanon-2';
import { palestine } from './recipes/palestine';
import { palestine2 } from './recipes/palestine-2';
import { morocco } from './recipes/morocco';
import { morocco2 } from './recipes/morocco-2';
import type { Recipe } from './types';

export { countries };
export const recipes: Record<string, Recipe[]> = {
  turkey: [...turkey, ...turkey2],
  iran: [...iran, ...iran2],
  egypt: [...egypt, ...egypt2],
  iraq: [...iraq, ...iraq2],
  syria: [...syria, ...syria2],
  lebanon: [...lebanon, ...lebanon2],
  palestine: [...palestine, ...palestine2],
  morocco: [...morocco, ...morocco2],
};
export { patternUri, themeVars } from './patterns';
