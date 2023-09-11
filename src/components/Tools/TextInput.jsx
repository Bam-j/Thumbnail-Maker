import styled from 'styled-components';
import { useContext } from 'react';
import { ThumbnailContentsContext } from '../../contexts/thumbnailContents';
import { fontList, fontSizeList } from "../../utils/utils";
import { MenuItem, Select } from "@mui/material";


export const TextInput = () => {
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
        <Select
          sx={{
            width: '3rem', height: '1.5rem', marginRight: '0.25rem',
            fontSize: '0.75rem', backgroundColor: '#e9e9e9'
          }}
          onChange={changeFontSize}
          defaultValue={fontSizeList[5]}
        >
          {fontSizeList.map(size => (
            <MenuItem value={size}>{size}</MenuItem>
          ))}
        </Select>
        <Select
          sx={{
            width: '6rem', height: '1.5rem', marginRight: '0.25rem',
            fontSize: '0.5rem', backgroundColor: '#e9e9e9'
          }}
          onChange={changeFontFamily}
          defaultValue={fontList[0]}
        >
          {fontList.map(font => (
            <MenuItem value={font}>{font}</MenuItem>
          ))}
        </Select>
      </FontSettingWrapper>
    </>
  );
};

const Input = styled.input`
  display: flex;
  background: none;
  border-style: none none solid none;
  border-bottom-color: #eeeeee;
  color: #ffffff;
  padding-top: 0.75rem;
  margin: auto;
  width: 13rem;
  font-size: 0.75rem;
  outline: none;

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
  padding-top: 0.5rem;
`;