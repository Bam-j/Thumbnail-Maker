import styled from 'styled-components';
import { HexColorPicker } from 'react-colorful';

export const ColorPicker = () => {
  return (
      <ColorPickBox>
        <HexColorPicker />
      </ColorPickBox>
  );
};

const ColorPickBox = styled.div`
  border-radius: 14px;
  background-color: #ffffff;
  transition: visibility 0s, opacity 0.5s linear;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.5);
`;