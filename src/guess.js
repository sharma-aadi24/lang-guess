








































import franc from 'franc';
import langs from 'langs';
 
export const MIN_LENGTH = 10;
 
function describe(code) {
  const lang = langs.where('3', code);
  return {
    code,
    name: lang ? lang.name : code,
    native: lang ? lang.local : null,
  };
}
 
// Returns { status: 'short' | 'unknown' | 'ok', best?, all? }
export function guessLanguage(text) {
  const clean = text.trim();
  if (clean.length < MIN_LENGTH) return { status: 'short' };
 
  // franc.all gives [[code, score], ...] sorted best-first (score 1 = best)
  const ranked = franc.all(clean).slice(0, 4);
  if (ranked[0][0] === 'und') return { status: 'unknown' };
 
  const all = ranked.map(([code, score]) => ({ ...describe(code), score }));
  return { status: 'ok', best: all[0], all };
}
 

