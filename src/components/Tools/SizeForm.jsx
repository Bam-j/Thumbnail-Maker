import styled from 'styled-components';
import { useContext } from 'react';
import { ThumbnailContentsContext } from '../../contexts/thumbnailContents';

/*
기능: 사용자가 width와 height 크기를 입력하면 그 값을 Preview로 전달.
 */
export const SizeForm = () => {
  const { state, actions } = useContext(ThumbnailContentsContext);
  const { setWidth, setHeight } = useContext(ThumbnailContentsContext).actions;

  const handleChange = (e) => {
    e.target.name === 'width'
      ? setWidth(e.target.value)
      : setHeight(e.target.value);
  };

  return (
    <SizeFormWrapper>
      <label className={'size-input'}>
        width:&nbsp;
        <WidthInput
          placeholder={'width'}
          name={'width'}
          value={state.width}
          onChange={handleChange}
        />
      </label>
      <label className={'size-input'}>
        height:&nbsp;
        <HeightInput
          placeholder={'height'}
          name={'height'}
          value={state.height}
          onChange={handleChange}
        />
      </label>
    </SizeFormWrapper>
  );
};

const SizeFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-top: 1rem;
  color: #ffffff;
  transform: scale(1.2, 1.2);

  & .size-input:first-child {
    margin-right: 10px;
  }
`;

const WidthInput = styled.input`
  width: 50px;
  
`;

const HeightInput = styled.input`
  width: 50px;
`;