import React from "react";
import { View, StyleSheet, Switch } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Fonts } from "./Theme";

const Toolbar = ({ themeMode, theme, changeTheme }) => {
  return (
    <View style={styles.toolbarView}>
      {/* Theme changer */}
      <View style={styles.themeView}>
        <MaterialCommunityIcons
          name="moon-waning-crescent"
          size={24}
          style={styles.iconView}
          color={theme.basic.fg}
        />
        <Switch
          value={themeMode.toString() == "light"}
          trackColor={{
            false: theme.basic.bg,
            true: theme.basic.bg,
          }}
          thumbColor="white"
          ios_backgroundColor={{
            false: theme.basic.bg,
            true: theme.basic.bg,
          }}
          onChange={() => {
            console.log("clicked");
            changeTheme(themeMode == "light" ? "dark" : "light");
          }}
          style={{ marginHorizontal: 8 }}
        />
        <MaterialCommunityIcons
          name="white-balance-sunny"
          size={24}
          style={styles.iconView}
          color={theme.basic.fg}
        />
      </View>
      {/* History */}
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  toolbarView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  themeView: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconView: {
    aspectRatio: 1,
    padding: 4,
  },
});
