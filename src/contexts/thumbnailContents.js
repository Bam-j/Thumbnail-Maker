import { createContext, useState } from 'react';

const ThumbnailContentsContext = createContext({
  state: {
    width: '',
    height: '',
    text: '',
    textColor: '',
    fontSize: '',
    fontFamily: '',
    backgroundColor: '',
  },
  actions: {},
});

const ThumbnailContentsProvider = ({ children }) => {
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(350);
  const [text, setText] = useState('Sample');
  const [textColor, setTextColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(60);
  const [fontFamily, setFontFamily] = useState('Helvetica');
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  const value = {
    state: {
      width,
      height,
      text,
      textColor,
      fontSize,
      fontFamily,
      backgroundColor,
    },
    actions: {
      setWidth,
      setHeight,
      setText,
      setTextColor,
      setFontSize,
      setFontFamily,
      setBackgroundColor,
    },
  };

  return (
    <ThumbnailContentsContext.Provider value={value}>
      {children}
    </ThumbnailContentsContext.Provider>
  );
};

export { ThumbnailContentsContext, ThumbnailContentsProvider };