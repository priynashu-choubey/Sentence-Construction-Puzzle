export const compareAnswers = (a: string[], b: string[]): boolean =>
  a.length === b.length && a.every((val, i) => val === b[i]);

