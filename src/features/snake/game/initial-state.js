import { SNAKE_DIRECTION } from "./constants";

export const initialState = cols => rows => ({
  cols: cols,
  rows: rows,
  snake: [],
  snakeDirection: [SNAKE_DIRECTION.EAST],
  apple: { x: 5, y: 2 }
});
