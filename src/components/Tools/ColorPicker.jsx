import styled from 'styled-components';
import { HexColorPicker } from 'react-colorful';
import React, { useState } from "react";
import './../../styles/conponents/Tools/ColorPicker.scss';

export const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');

  return (
      <ColorPickerBox className={'color-picker-box'}>
        <HexColorPicker color={color} onChange={setColor} prefixed/>
      </ColorPickerBox>
  );
};

const ColorPickerBox = styled.div`
  border-radius: 14px;
  background-color: #ffffff;
  transition: visibility 0s, opacity 0.5s linear;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 2rem;
  z-index: 2;
`;