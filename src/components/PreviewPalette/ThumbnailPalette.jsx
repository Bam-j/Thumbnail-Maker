import { useContext, useEffect, useRef, useState } from "react";
import { ThumbnailContentsContext } from '../../contexts/thumbnailContents';
import { setCanvasFont } from "./setCanvasFont";
import { drawText } from "./drawText";
import styled from "styled-components";

/*
기능: 사용자가 설정한 width/height, text, text와 bg의 색에 따라 섬네일 미리보기가 여기에 출력.
 */
export const ThumbnailPalette = () => {
  const {
    width,
    height,
    text,
    fontSize,
    fontFamily,
    textColor,
    backgroundColor
  } = useContext(ThumbnailContentsContext).state;
  //const { text, fontSize, fontFamily } = useContext(ThumbnailContentsContext).state;
  //const [contents, setContents] = useState('');
  //const { setText } = useContext(ThumbnailContentsContext).actions;
  const previewRef = useRef(null);

  /*
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
  return (
    <canvas
      className={'previewCanvas'}
      ref={previewRef}
      width={width}
      height={height}>
      대체 텍스트
      </canvas>
  );
*/

  return (
    <>
      <PreviewWrapper>
        <Preview
          id={'thumbnail'}
          className={'thumbnail'}
          ref={previewRef}
          spellCheck={false}
          height={height}
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
            lineHeight: `${height}px`
          }}>
          {text}
        </Preview>
      </PreviewWrapper>
    </>
  );
};

const PreviewWrapper = styled.div`
  text-align: center;
`;

const Preview = styled.div`
  margin: auto;
`;
