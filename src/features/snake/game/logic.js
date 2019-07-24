import { dropLast, dropFirst, mod } from "@lib";
import { isPointEq, getRandomPosition } from "./utils";

const isWillEat = state => isPointEq(nextHead(state))(state.apple);
const isWillCrash = state => state.snake.find(isPointEq(nextHead(state)));

const isValidMove = move => state =>
  state.snakeDirection[0].x + move.x !== 0 &&
  state.snakeDirection[0].y + move.y !== 0;

const nextHead = state =>
  state.snake.length === 0
    ? { x: 2, y: 2 }
    : {
      x: mod(state.cols)(state.snake[0].x + state.snakeDirection[0].x),
      y: mod(state.rows)(state.snake[0].y + state.snakeDirection[0].y)
    };

// prettier-ignore
const nextSnake = state => isWillCrash(state)
  ? []
  : isWillEat(state)
    ? [nextHead(state)].concat(state.snake)
    : [nextHead(state)].concat(dropLast(state.snake));

// prettier-ignore
const nextApple = state => isWillEat(state)
  ? getRandomPosition(state)
  : state.apple;

const nextMoves = state =>
  state.snakeDirection.length > 1
    ? dropFirst(state.snakeDirection)
    : state.snakeDirection;

export const next = state => ({
  ...state,
  snake: nextSnake(state),
  apple: nextApple(state),
  snakeDirection: nextMoves(state)
});

export const enqueue = move => state => {
  console.log(move, "MOOOVE");
  return isValidMove(move)(state)
    ? { ...state, snakeDirection: [...state.snakeDirection.concat(move)] }
    : state;
};
