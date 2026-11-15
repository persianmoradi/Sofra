import { countries } from './countries';
import { turkey } from './recipes/turkey';
import { iran } from './recipes/iran';
import { egypt } from './recipes/egypt';
import { iraq } from './recipes/iraq';
import { syria } from './recipes/syria';
import { lebanon } from './recipes/lebanon';
import { palestine } from './recipes/palestine';
import { morocco } from './recipes/morocco';
import type { Recipe } from './types';

export { countries };
export const recipes: Record<string, Recipe[]> = { turkey, iran, egypt, iraq, syria, lebanon, palestine, morocco };
export { patternUri, themeVars } from './patterns';
