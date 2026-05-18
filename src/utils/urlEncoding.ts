import { personalityByCode } from '../data/personalities';

/** Validate a code string against the known personalities. */
export function isValidCode(code: string | null | undefined): code is string {
  if (!code) return false;
  return !!personalityByCode(code.toUpperCase());
}

/** Build a shareable result URL using the current origin. */
export function buildShareUrl(code: string): string {
  const url = new URL(window.location.href);
  url.hash = `#/result?r=${code.toUpperCase()}`;
  url.search = '';
  return url.toString();
}

export function getCodeFromSearch(search: string): string | null {
  const params = new URLSearchParams(search);
  const r = params.get('r');
  return r ? r.toUpperCase() : null;
}
