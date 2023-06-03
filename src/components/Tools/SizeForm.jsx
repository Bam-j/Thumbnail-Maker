import styled from 'styled-components';

/*
기능: 사용자가 width와 height 크기를 입력하면 그 값을 Preview로 전달.
 */
export const SizeForm = () => {
  return (
    <SizeFormWrapper>
      <label className={'size-input'}>
        <WidthInput placeholder={'width'} />
      </label>
      <label className={'size-input'}>
        <HeightInput placeholder={'height'} />
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