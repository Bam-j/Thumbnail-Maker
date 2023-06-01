import styled from 'styled-components';

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
  padding-top: 1.125rem;
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