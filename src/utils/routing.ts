export function getUrl(): string {
  const protocol = window.location.protocol;
  const host = window.location.hostname;
  const port = window.location.port || '';
  if (port.length > 0) {
    return `${protocol}//${host}:${port}`;
  }
  return `${protocol}//${host}`;
}

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
