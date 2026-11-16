const F = '½¼¾⅓⅔⅛';
const NUM = `(?:\\d+(?:\\.\\d+)?[${F}]?|[${F}])`;
const LEAD = new RegExp(`^(${NUM})(?:[–-](${NUM}))?(?=\\s)`);
const PAREN = /(\((?:about )?)(\d+)( (?:g|ml)\))/;
const FR: Record<string, number> = { '½': 0.5, '¼': 0.25, '¾': 0.75, '⅓': 1 / 3, '⅔': 2 / 3, '⅛': 0.125 };

function num(s: string) {
  let t = 0;
  for (const ch of s) if (FR[ch] !== undefined) t += FR[ch];
  const d = s.replace(new RegExp(`[${F}]`, 'g'), '');
  return t + (d ? parseFloat(d) : 0);
}

export type ItemPart = { t: string } | { lo: number; hi: number; raw: string };

/** Split an ingredient line into text and scalable quantities (leading amount and "(400 g)"-style amounts). */
export function parseItem(item: string): ItemPart[] {
  const m = item.match(LEAD);
  if (!m) return [{ t: item }];
  const parts: ItemPart[] = [{ lo: num(m[1]), hi: num(m[2] ?? m[1]), raw: m[0] }];
  const rest = item.slice(m[0].length);
  const p = rest.match(PAREN);
  if (!p) return [...parts, { t: rest }];
  const at = rest.indexOf(p[0]);
  const n = parseFloat(p[2]);
  return [...parts, { t: rest.slice(0, at) + p[1] }, { lo: n, hi: n, raw: p[2] }, { t: p[3] + rest.slice(at + p[0].length) }];
}

export type StepPart = { t: string } | { label: string; sec: number };

/** Find "20 minutes" / "1 hour" in a step and turn it into a timer. */
export function stepParts(step: string): StepPart[] {
  const re = /(\d+)(?:–(\d+))?\s(minutes?|hours?)/g;
  const out: StepPart[] = [];
  let last = 0, m: RegExpExecArray | null;
  while ((m = re.exec(step))) {
    out.push({ t: step.slice(last, m.index) });
    out.push({ label: m[0], sec: parseInt(m[2] ?? m[1]) * (m[3].startsWith('h') ? 3600 : 60) });
    last = m.index + m[0].length;
  }
  out.push({ t: step.slice(last) });
  return out;
}
