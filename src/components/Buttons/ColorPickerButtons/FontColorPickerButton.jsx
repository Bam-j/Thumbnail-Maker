import { BiFontColor } from 'react-icons/bi';
import styled from 'styled-components';

/*
기능: 폰트를 선택하면 Preview의 글자 색 변경. 컬러 선택기가 오픈.
 */
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
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #a3a3a3;
  }
`;