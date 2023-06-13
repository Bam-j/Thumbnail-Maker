import styled from 'styled-components';
import { HexColorPicker } from 'react-colorful';
import React, { useState } from "react";

export const ColorPicker = React.forwardRef(({}, colorPickRef) => {
  const [color, setColor] = useState('#ffffff');

  return (
      <ColorPickBox ref={colorPickRef}>
        <HexColorPicker color={color} onChange={setColor}/>
      </ColorPickBox>
  );
});

const ColorPickBox = styled.div`
  border-radius: 14px;
  background-color: #ffffff;
  transition: visibility 0s, opacity 0.5s linear;
  box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 2rem;
  z-index: 2;
`;