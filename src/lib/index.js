const dropFirst = xs => xs.slice(1);
const dropLast = xs => xs.slice(0, xs.length - 1);
const rnd = min => max => Math.floor(Math.random() * max) + min;
const mod = x => y => ((y % x) + x) % x;

export { dropFirst, dropLast, rnd, mod };
