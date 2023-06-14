import { createContext, useState } from 'react';

const ThumbnailContentsContext = createContext({
  state: {
    width: '',
    height: '',
    text: '',
    typeOfColorPicker: '',
    textColor: '',
    fontSize: '',
    fontFamily: '',
    backgroundColor: '',
    href: '',
  },
  actions: {},
});

const ThumbnailContentsProvider = ({ children }) => {
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(350);
  const [text, setText] = useState('Text');
  const [typeOfColorPicker, setTypeOfColorPicker] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(20);
  const [fontFamily, setFontFamily] = useState('Helvetica');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [href, setHref] = useState('');

  const value = {
    state: {
      width,
      height,
      text,
      typeOfColorPicker,
      textColor,
      fontSize,
      fontFamily,
      backgroundColor,
      href,
    },
    actions: {
      setWidth,
      setHeight,
      setText,
      setTypeOfColorPicker,
      setTextColor,
      setFontSize,
      setFontFamily,
      setBackgroundColor,
      setHref,
    },
  };

  return (
    <ThumbnailContentsContext.Provider value={value}>
      {children}
    </ThumbnailContentsContext.Provider>
  );
};

export { ThumbnailContentsContext, ThumbnailContentsProvider };