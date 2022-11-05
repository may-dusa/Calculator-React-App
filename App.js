import React, { useState } from "react";
import Calculator from "./app/Calculator";

export default function App() {
  const [theme, changeTheme] = useState("light");
  return <Calculator themeMode={theme} changeTheme={changeTheme} />;
}
