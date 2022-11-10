import React, { useState } from "react";
import Calculator from "./app/Calculator";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import themeReducer from "./app/ThemeSlice";
import dataReducer from "./app/DataSlice";

export default function App() {
  const store = configureStore({
    reducer: {
      themeReducer,
      dataReducer,
    },
  });

  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}
