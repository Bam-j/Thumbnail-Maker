export const setCanvasFont = (canvas, params) => {
  const ctx = canvas.getContext('2d');
  const { textColor, fontSize, fontFamily } = params;

  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
};