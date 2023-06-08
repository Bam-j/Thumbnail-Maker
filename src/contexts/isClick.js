import { createContext, useState } from 'react';

export const IsClickContext = createContext({
  state: false,
  actions: {
    setIsClick: () => {},
  },
});

const IsClickProvider = ({ children }) => {
  const [isClick, setIsClick] = useState(false);

  const value = {
    state: { isClick },
    actions: { setIsClick },
  };

  return (
    <IsClickContext.Provider value={value}>{children}</IsClickContext.Provider>
  );
};

const { Consumer: IsClickConsumer } = IsClickContext;

export { IsClickProvider, IsClickConsumer };