import React from "react";
import { Header } from "./components/Header";
import { ThumbnailPalette } from "./components/contents/ThumbnailPalette";
import { TextInput } from "./components/contents/TextInput";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <ThumbnailPalette/>
        <TextInput/>
      </div>
    </>
  );
};

export default App;
