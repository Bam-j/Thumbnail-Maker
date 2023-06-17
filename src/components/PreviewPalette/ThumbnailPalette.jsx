import { useContext, useEffect, useRef, useState } from "react";
import { ThumbnailContentsContext } from '../../contexts/thumbnailContents';
import { setCanvasFont } from "./setCanvasFont";
import { drawText } from "./drawText";
import styled from "styled-components";

/*
기능: 사용자가 설정한 width/height, text, text와 bg의 색에 따라 섬네일 미리보기가 여기에 출력.
 */
export const ThumbnailPalette = ({
  width,
  height,
  textColor,
  backgroundColor,
  update,
}) => {
  const { text, fontSize, fontFamily } = useContext(
    ThumbnailContentsContext
  ).state;
  const previewRef = useRef(null);

  useEffect(() => {
    const render = async () => {
      const canvas = previewRef.current;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      setCanvasFont(canvas, {
        color: textColor,
        size: fontSize,
        family: fontFamily
      });
      //drawText(canvas, text, fontSize);
      ctx.fillText(text, canvas.width/2, canvas.height/2);
      update(canvas.toDataURL());
    };
    render().then(r => r);
  }, [
    width,
    height,
    text,
    textColor,
    fontSize,
    fontFamily,
    backgroundColor,
    update,
  ]);
/*
  return (
    <canvas
      className={'previewCanvas'}
      ref={previewRef}
      width={width}
      height={height}
    />
  );
*/

  return (
    <>
      <PreviewWrapper>
        <Preview
          id={'thumbnail'}
          className={'thumbnail'}
          spellCheck={false}
          suppressContentEditableWarning={true}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: backgroundColor,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: textColor,
            fontSize: `${fontSize}px`,
            fontFamily: fontFamily
          }}>
          {text}
        </Preview>
      </PreviewWrapper>
    </>
  );
};

const PreviewWrapper = styled.div`\
  border: 1px solid red;
  position: relative;
`;

const Preview = styled.div`
  margin: auto;
  border: 1px solid blue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
