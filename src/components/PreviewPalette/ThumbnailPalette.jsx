import styled from 'styled-components';
import { useContext, useEffect, useRef, useState } from "react";
import { ThumbnailContentsContext } from '../../contexts/thumbnailContents';
import { setCanvasFont } from "./setCanvasFont";
import { drawText } from "./drawText";

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
    ThumbnailContentsContext,
  ).state;
  const previewRef = useRef(null);

  useEffect(() => {
    const render = async () => {
      const canvas = previewRef.current;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas,height);

      setCanvasFont(canvas, {
        color: textColor,
        size: fontSize,
        family: fontFamily
      });
      drawText(canvas, text, fontSize);
      update(canvas.toDataURL());
    };
    render();
  }, [
    width,
    height,
    textColor,
    backgroundColor,
    update,
  ]);

  return (
    <canvas
      className={'previewCanvas'}
      ref={previewRef}
      width={width}
      height={height}
    />
  );
/*
  return (
    <>
      <div className={'thumbnail-palette-container'}>
        <Preview
          id={'thumbnail'}
          className={'thumbnail'}
          spellCheck={false}
          contentEditable={'true'}
          suppressContentEditableWarning={true}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: backgroundColor,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: textColor,
            fontSize: `${fontSize}px`,
            fontFamily: fontFamily,
          }}>
          테스트 문구
        </Preview>
      </div>
    </>
  );

 */
};

const Preview = styled.div`
  margin: auto;
`;