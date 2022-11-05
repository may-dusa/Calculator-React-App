import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Fonts } from "./Theme";

const Expression = ({ mainText, overHead, theme }) => {
  return (
    <View style={styles.expressionView}>
      <Text
        style={[Fonts.default, styles.smallText, { color: theme.basic.fg }]}
      >
        {overHead}
      </Text>
      <Text style={[Fonts.big, { color: theme.basic.fg }]}>{mainText}</Text>
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
