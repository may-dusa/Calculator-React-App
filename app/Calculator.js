import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import { currentThemeState } from "./ThemeSlice";

import Expression from "./Expressions";
import ButtonGrid from "./ButtonGrid";
import Toolbar from "./Toolbar";

const Calculator = () => {
  const currentTheme = useSelector(currentThemeState);
  const theme = currentTheme.data;

  return (
    <SafeAreaView
      style={[styles.background, { backgroundColor: theme.background }]}
    >
      {/* Toolbar */}
      <Toolbar />
      {/* Expression*/}
      <Expression />

      {/* Buttons*/}
      <ButtonGrid />
    </SafeAreaView>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});
