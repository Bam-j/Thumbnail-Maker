import styled from 'styled-components';
import { useContext } from 'react';
import { ThumbnailContentsContext } from '../../contexts/thumbnailContents';

/*
기능: 사용자가 입력한 텍스트가 Preview에 보이도록 전달.
 */
export const TextInput = () => {
  const fontSizeList = [20, 30, 40, 50, 60, 70, 80];
  const fontList = [
    'Helvetica',
    'Nanum Gothic',
    'Nanum Gothic Coding',
    'Arial',
    'Courier',
    'Noto Sans KR',
  ];
  const { actions } = useContext(ThumbnailContentsContext);

  const handleChange = e => {
    actions.setText(e.target.value);
  };

  const changeFontSize = e => {
    actions.setFontSize(e.target.value);
  };

  const changeFontFamily = e => {
    actions.setFontFamily(e.target.value);
  };

  return (
    <>
      <Input
        placeholder={'문구를 여기에 입력해주세요.'}
        onChange={(e) => handleChange(e)}
        type={'text'}
      />
      <FontSettingWrapper>
        <SelectFontSize
          className={'font-setting'}
          onChange={changeFontSize}
          defaultValue={fontSizeList[4]}
        >
          {fontSizeList.map(size => (
            <option
              key={size}
              value={size}>
              {size}
            </option>
          ))}
        </SelectFontSize>
        <SelectFont
          className={'font-setting'}
          onChange={changeFontFamily}
        >
          {fontList.map(font => (
            <option
              key={font}
              value={font}>
              {font}
            </option>
          ))}
        </SelectFont>
      </FontSettingWrapper>
    </>
  );
};

const Input = styled.input`
  display: flex;
  background: none;
  border-style: none none solid none;
  border-bottom-color: #c3c3c3;
  color: #ffffff;
  padding-top: 1.25rem;
  margin: auto;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: smaller;
  }

  & .font-setting:first-child {
    margin-right: 100px;
  }
`;

const FontSettingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-top: 1.125rem;
`;

const SelectFontSize = styled.select`
  width: 50px;
  height: 20px;
  margin-right: 5px;
`;

const SelectFont = styled.select`
  width: 100px;
  height: 20px;
  font-size: 0.5rem;
`;