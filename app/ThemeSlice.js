import { createSlice } from "@reduxjs/toolkit";

const themeData = new Object();
themeData["light"] = {
  primary: "#141414",
  primaryVariation: "#ECECEC",
  secondary: "#235A31",
  secondaryVariation: "#97EAA2",
  tertiary: "#8b3c00",
  tertiaryVariation: "#EACBB4",
  background: "#ffffff",
};
themeData["dark"] = {
  primary: "#ffffff",
  primaryVariation: "#252525",
  secondary: "#144E4A",
  secondaryVariation: "#55AAB5",
  tertiary: "#20154F",
  tertiaryVariation: "#806AC2",
  background: "#141414",
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    theme: "light",
  },
  reducers: {
    changeToLight(state) {
      state = { ...state, theme: "light" };
      return state;
    },
    changeToDark(state) {
      state = { ...state, theme: "dark" };
      return state;
    },
  },
});

export const { changeToLight, changeToDark } = themeSlice.actions;

export default themeSlice.reducer;
export const currentThemeState = (state) => {
  return {
    theme: state.themeReducer.theme,
    data: themeData[state.themeReducer.theme],
  };
};
