import React from "react";
import { Header } from "./components/Header";
import { PreviewPalette } from "./components/PreviewPalette/PreviewPalette";
import { TextInput } from "./components/Tools/TextInput";
import './styles/App.scss';
import { SizeForm } from "./components/Tools/SizeForm";
import { ColorPickerButtons } from "./components/Buttons/ColorPickerButtons/ColorPickerButtons";
import { ThumbnailContentsProvider } from "./contexts/thumbnailContents";

const App = () => {
  return (
    <ThumbnailContentsProvider>
      <Header />
      <div className={'maker-wrapper'}>
        <div className={'maker-container'}>
          <PreviewPalette/>
          <TextInput/>
          <SizeForm/>
          <ColorPickerButtons/>
        </div>
      </div>
    </ThumbnailContentsProvider>
  );
};

export default App;
