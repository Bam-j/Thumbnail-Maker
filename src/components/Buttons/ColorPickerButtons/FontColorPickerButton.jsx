import { BiFontColor } from 'react-icons/bi';
import styled from 'styled-components';
import { useContext, useEffect, useRef, useState } from "react";
import { ColorPicker } from "../../Tools/ColorPicker";
import { getContrastAndChangeColor } from "../../../utils/getContrastAndChangeColor";
import { ThumbnailContentsContext } from "../../../contexts/thumbnailContents";

export const FontColorPickerButton = () => {
  const [isClick, setIsClick] = useState(false);
  const colorPickRef = useRef(null);
  const { textColor } = useContext(ThumbnailContentsContext).state;

  useEffect(() => {
    const handleOutside = e => {
      if (colorPickRef && !colorPickRef.current.contains(e.target)) {
        setIsClick(false);
      }
    };

    document.addEventListener('mousedown', handleOutside);

    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, [colorPickRef]);

  const onClick = () => {
    setIsClick(!isClick);
  };

  const icon = {
    color: getContrastAndChangeColor(textColor),
    mixBlendMode: 'difference'
  };

  return (
    <ColorPickerWrapper ref={colorPickRef}>
      <Button
        onClick={onClick}
        style={{
          backgroundColor: textColor
        }}
      >
        <BiFontColor style={icon}/>
      </Button>

      {isClick && <ColorPicker buttonType={'font'}/>}
    </ColorPickerWrapper>
  );
};

const ColorPickerWrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  background-color: #e3e3e3;
  width: 1.5rem;
  height: 1.5rem;
  outline: none;
  border: black solid 1px;
  border-radius: 5px;
  margin-right: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #a3a3a3;
  }
`;