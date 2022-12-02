import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

const change = (color) => {
  document.getElementById("preview").style.backgroundColor =
    color.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-main-dark-bg rounded-3x1">
      <Header category="App" title="ColorPicker" />
      <div className="text-center">
        {/* This generates the pen for a preview */}
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-white">
              Inline Pallette
            </p>
            <ColorPickerComponent
              id="inline-pallette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-white">
              Inline Picker
            </p>
            <ColorPickerComponent
              id="inline-picker"
              mode="picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
