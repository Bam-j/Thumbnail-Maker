import styled from 'styled-components';

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
            width: `250px`,
            height: `150px`,
            backgroundColor: '#ffffff',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#000000',
          }}>
          테스트 문구
        </Preview>
      </div>
    </>
  );
};

const Preview = styled.div`
  margin: auto;
`;