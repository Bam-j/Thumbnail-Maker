import styled from 'styled-components';
import { useContext } from 'react';
import { ThumbnailContentsContext } from '../../contexts/thumbnailContents';
import { TextField } from '@mui/material';

export const SizeForm = () => {
  const { state } = useContext(ThumbnailContentsContext);
  const { setWidth, setHeight } = useContext(ThumbnailContentsContext).actions;

  const handleChange = (e) => {
    e.target.name === 'width'
      ? setWidth(e.target.value)
      : setHeight(e.target.value);
  };

  return (
    <SizeFormWrapper>
      <TextField
        sx={{
          width: '5rem', height: 'auto', backgroundColor: '#ffffff', outline: 'none',
          borderRadius: '3px', border: '0', marginRight: '1rem'
        }}
        label={'Width'}
        size={'small'}
        variant={'filled'}
        name={'width'}
        value={state.width}
        onChange={handleChange}
      />
      <TextField
        sx={{
          width: '5rem', height: 'auto', backgroundColor: '#ffffff', outline: 'none',
          borderRadius: '3px', border: '0'
        }}
        label={'Height'}
        size={'small'}
        variant={'filled'}
        name={'height'}
        value={state.height}
        onChange={handleChange}
      />
    </SizeFormWrapper>
  );
};

const SizeFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-top: 0.8rem;
  color: #ffffff;

  & .size-input:first-child {
    margin-right: 10px;
  }
`;