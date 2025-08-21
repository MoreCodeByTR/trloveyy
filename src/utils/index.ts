export function formatImgUrl(url: string): string {
    let res = url;
    const hasImageView2 = url.includes('imageView2');
    const hasQuery = url.includes('?');

    if (!hasImageView2) {
      if (hasQuery) {
        res += '/';
      } else {
        res += '?';
      }
      res += 'imageView2/2';
    }
    return `${res}/format/webp`;
}