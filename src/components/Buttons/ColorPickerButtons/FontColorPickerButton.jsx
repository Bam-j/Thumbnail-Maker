import { BiFontColor } from 'react-icons/bi';
import styled from 'styled-components';

export const FontColorPickerButton = () => {
  return (
    <div>
      <Button>
        <BiFontColor />
      </Button>
    </div>
  );
};

const Button = styled.button`
  background-color: #e3e3e3;
  width: 30px;
  height: 30px;
  outline: none;
`;