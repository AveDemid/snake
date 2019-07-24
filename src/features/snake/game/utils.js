import { rnd } from "@lib";

export const isPointEq = p1 => p2 => p1.x === p2.x && p1.y === p2.y;
export const getRandomPosition = state => ({
  x: rnd(0)(state.cols - 1),
  y: rnd(0)(state.rows - 1)
});
