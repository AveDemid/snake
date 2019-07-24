import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";

import { handleControlKeys } from "./../game/controls";
import { initialState } from "./../game/initial-state";
import { draw, step } from "./../game/rendering";
import { enqueue } from "./../game/logic";

import { Canvas } from "./canvas";

export const PlayingField = ({ canvasWidth, canvasHeight, speed }) => {
  const canvasRef = useRef(null);

  const [state, setState] = useState(
    initialState(canvasWidth / 10)(canvasHeight / 10)
  );

  useLayoutEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    draw(ctx)(canvasWidth)(canvasHeight)(state);

    window.requestAnimationFrame(step(setState)(speed)(0));
  }, []);

  useLayoutEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    draw(ctx)(canvasWidth)(canvasHeight)(state);
  }, [state, canvasWidth, canvasHeight]);

  const keyDownListener = event => {
    setState(state => enqueue(handleControlKeys(event))(state));
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownListener);

    return () => {
      window.addEventListener("keydown", keyDownListener);
    };
  }, []);

  return (
    <Canvas
      canvasHeight={canvasWidth}
      canvasWidth={canvasHeight}
      ref={canvasRef}
    />
  );
};

PlayingField.propTypes = {
  canvasWidth: PropTypes.number.isRequired,
  canvasHeight: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired
};
