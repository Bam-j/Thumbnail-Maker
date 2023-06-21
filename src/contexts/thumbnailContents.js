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
  const [text, setText] = useState('Sample');
  const [typeOfColorPicker, setTypeOfColorPicker] = useState('');
  const [textColor, setTextColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(60);
  const [fontFamily, setFontFamily] = useState('Helvetica');
  const [backgroundColor, setBackgroundColor] = useState('#000000');
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