import { next } from "./logic";

const x = c => canvasWidth => state =>
  Math.round((c * canvasWidth) / state.cols);

const y = r => canvasHeight => state =>
  Math.round((r * canvasHeight) / state.rows);

export const draw = ctx => canvasWidth => canvasHeight => state => {
  // clear canvas
  ctx.fillStyle = "#232323";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // draw snake
  ctx.fillStyle = "#00C832";
  state.snake.map(p =>
    ctx.fillRect(
      x(p.x)(canvasWidth)(state),
      y(p.y)(canvasHeight)(state),
      x(1)(canvasWidth)(state),
      y(1)(canvasWidth)(state)
    )
  );

  // draw apple
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(
    x(state.apple.x)(canvasWidth)(state),
    y(state.apple.y)(canvasHeight)(state),
    x(1)(canvasWidth)(state),
    y(1)(canvasHeight)(state)
  );

  // draw crash
  if (state.snake.length === 999999999) {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }
};

export const step = setState => speed => t1 => t2 => {
  if (t2 - t1 > speed) {
    setState(state => next(state));
    window.requestAnimationFrame(step(setState)(speed)(t2));
  } else {
    window.requestAnimationFrame(step(setState)(speed)(t1));
  }
};
