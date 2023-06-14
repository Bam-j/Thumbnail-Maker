import { createContext, useState } from 'react';

const ColorContext = createContext({
  state: {
    color: '#000000',
  },
  actions: {
    setColor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#000000');

  const value = {
    state: {
      color,
    },
    actions: {
      setColor,
    },
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorContext, ColorProvider, ColorConsumer };