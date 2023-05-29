import React from "react";
import { Header } from "./components/Header";
import { ThumbnailPalette } from "./components/contents/ThumbnailPalette";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <ThumbnailPalette/>
      </div>
    </>
  );
};

export default App;
