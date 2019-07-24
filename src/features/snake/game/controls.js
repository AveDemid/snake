import { SNAKE_DIRECTION } from "./../game/constants";

/* eslint-disable */
export const handleControlKeys = e => {
  switch (e.key) {
    case "w":
      return SNAKE_DIRECTION.NORTH;
    case "d":
      return SNAKE_DIRECTION.EAST;
    case "s":
      return SNAKE_DIRECTION.SOUTH;
    case "a":
      return SNAKE_DIRECTION.WEST;
  }
};
/* eslint-enable */
