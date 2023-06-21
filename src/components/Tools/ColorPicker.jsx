import styled from 'styled-components';
import { HexColorPicker } from 'react-colorful';
import { useContext, useState } from 'react';
import './../../styles/conponents/Tools/ColorPicker.scss';
import { ThumbnailContentsContext } from '../../contexts/thumbnailContents';

export const ColorPicker = ({ buttonType }) => {
  const [selectedColor, setSelectedColor] = useState();
  const { actions } = useContext(ThumbnailContentsContext);

  const changeColor = (color) => {
    setSelectedColor(color);

    if (buttonType === 'background') {
      actions.setBackgroundColor(selectedColor);
    } else {
      actions.setTextColor(selectedColor);
    }
  };

  return (
    <ColorPickerBox className={'color-picker-box'}>
      <HexColorPicker
        color={selectedColor}
        onChange={changeColor}
      />
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