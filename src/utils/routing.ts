export function getSearchParams(): URLSearchParams {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
}

export function getURLParam(key: string): string | null {
  const urlParams = getSearchParams();
  if (urlParams.has(key)) return urlParams.get(key);
  return null;
}
