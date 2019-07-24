import React, { forwardRef } from "react";

// eslint-disable-next-line
export const Canvas = forwardRef(({ canvasWidth, canvasHeight }, ref) => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000"
    }}
  >
    <canvas
      ref={ref}
      width={canvasWidth}
      height={canvasHeight}
      style={{
        border: "10px solid #ffffff"
      }}
    />
  </div>
));
