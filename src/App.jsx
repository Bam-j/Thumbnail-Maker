import React from "react";
import { Header } from "./components/Header";
import { ThumbnailPalette } from "./components/contents/ThumbnailPalette";
import { TextInput } from "./components/Tools/TextInput";
import './styles/App.scss';
import { SizeForm } from "./components/Tools/SizeForm";

const App = () => {
  return (
    <>
      <Header />
      <div className={'maker-wrapper'}>
        <div className={'maker-container'}>
          <ThumbnailPalette/>
          <TextInput/>
          <SizeForm/>
        </div>
      </div>
    </>
  );
};

export default App;
