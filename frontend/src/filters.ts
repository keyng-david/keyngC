export function serverLinkFormat(link: string): string {
  return `https://your-server.com/${link}`;
}

export function truncate(text: string, length: number): string {
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export function numberFormat(number: number): string {
  return new Intl.NumberFormat().format(number);
}