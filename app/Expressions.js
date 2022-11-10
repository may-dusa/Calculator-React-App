import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

import { currentThemeState } from "./ThemeSlice";
import { currentDataState } from "./DataSlice";

import { Fonts } from "./Theme";

const Expression = () => {
  const currentTheme = useSelector(currentThemeState);
  const theme = currentTheme.data;
  const currentData = useSelector(currentDataState);

  return (
    <View style={styles.expressionView}>
      <Text
        style={[
          currentData.answer != "" ? Fonts.default : Fonts.big,
          styles.smallText,
          { color: theme.primary },
        ]}
      >
        {currentData.expression}
      </Text>
      <Text style={[Fonts.big, { color: theme.primary }]}>
        {currentData.answer}
      </Text>
    </View>
  );
};

export default Expression;

const styles = StyleSheet.create({
  expressionView: {
    display: "flex",
    flex: "1",
    padding: 24,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  smallText: {
    marginBottom: 8,
  },
});
