import { useContext, useRef } from 'react';
import { ThumbnailContentsContext } from '../../contexts/thumbnailContents';
import styled from 'styled-components';
import { DownloadButton } from '../Buttons/DownloadButton';
import html2canvas from 'html2canvas';
import { saveImg } from './saveImg';

export const PreviewPalette = () => {
  const {
    width,
    height,
    text,
    fontSize,
    fontFamily,
    textColor,
    backgroundColor,
  } = useContext(ThumbnailContentsContext).state;
  const previewRef = useRef(null);

  const capturingThumbnail = () => {
    html2canvas(document.getElementById('thumbnail'), {
      width: width,
      height: height,
      scale: 1,
    })
      .then((canvas) => {
        saveImg(canvas.toDataURL('image/jpg'), 'image.jpg', text);
      })
      .catch(e => {
        console.error(e);
      });
  };

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
            lineHeight: `${height}px`,
          }}>
          {text}
        </Preview>
      </PreviewWrapper>
      <DownloadButton onClick={() => capturingThumbnail()} />
    </>
  );
};

const PreviewWrapper = styled.div`
  text-align: center;
`;

const Preview = styled.div`
  margin: auto;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
