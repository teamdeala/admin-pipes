export function declOfNum(num: number, titles: any[]): any {
  return titles[Math.round(Math.abs(+num)) > 1 ? 1 : 0];
}

export function romanize(value: number): string {
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let roman = '';
  Object.keys(lookup)
    .forEach(key => {
      while (value >= lookup[key]) {
        roman += key;
        value -= lookup[key];
      }
    });

  return roman;
}

export function linkWithProtocol(href): string {
  if (href) {
    if (!href.includes('http://') && !href.includes('https://')) {
      href = `http://${ href }`;
    }
  }

  return href;
}
