import React, { useContext } from "react";
import { Header } from "./components/Header";
import { PreviewPalette } from "./components/PreviewPalette/PreviewPalette";
import { TextInput } from "./components/Tools/TextInput";
import './styles/App.scss';
import { SizeForm } from "./components/Tools/SizeForm";
import { ColorPickerButtons } from "./components/Buttons/ColorPickerButtons/ColorPickerButtons";
import { DownloadButton } from "./components/Buttons/DownloadButton";
import { ThumbnailContentsContext, ThumbnailContentsProvider } from "./contexts/thumbnailContents";

const App = () => {
  const { state } = useContext(ThumbnailContentsContext);

  return (
    <ThumbnailContentsProvider>
      <Header />
      <div className={'maker-wrapper'}>
        <div className={'maker-container'}>
          <PreviewPalette/>
          <TextInput/>
          <SizeForm/>
          <ColorPickerButtons/>
          <DownloadButton/>
        </div>
      </div>
    </ThumbnailContentsProvider>
  );
};

export default App;
