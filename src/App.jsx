import React from "react";
import { Header } from "./components/Header";
import { ThumbnailPalette } from "./components/contents/ThumbnailPalette";
import { TextInput } from "./components/contents/TextInput";
import './styles/App.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className={'maker-wrapper'}>
        <div className={'maker-container'}>
          <ThumbnailPalette/>
          <TextInput/>
        </div>
      </div>
    </>
  );
};

export default App;
