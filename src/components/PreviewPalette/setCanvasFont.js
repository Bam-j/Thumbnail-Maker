//canvas 사용시 사용할 모듈. 추후에 canvas 미사용시 삭제

export const setCanvasFont = (canvas, params) => {
  const ctx = canvas.getContext('2d');
  const { textColor, fontSize, fontFamily } = params;

  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
};