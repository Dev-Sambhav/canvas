// src/CanvasEditor.js
import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";

const CanvasEditor = () => {
  const canvasRef = useRef(null);
  const [drawingMode, setDrawingMode] = useState("sketch");


  const saveDrawing = () => {
    const canvas = canvasRef.current.canvas.drawing;
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "sketch.png";
    link.click();
  };

  return (
    <div>
      <h1>Canvas Editor</h1>
      <div className="canvas-container">
        <CanvasDraw
          ref={canvasRef}
          brushColor="#000"
          brushRadius={3}
          lazyRadius={0}
          hideGrid={true}
          className="canvas-draw"
        />
      </div>

      <div>
        <button onClick={() => setDrawingMode("sketch")}>Sketch Mode</button>
        <button onClick={saveDrawing}>Save Sketch</button>
      </div>
    </div>
  );
};

export default CanvasEditor;
