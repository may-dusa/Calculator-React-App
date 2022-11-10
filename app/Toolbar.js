import React from "react";
import { View, StyleSheet, Switch } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { changeToDark, changeToLight, currentThemeState } from "./ThemeSlice";
import { useDispatch, useSelector } from "react-redux";

const Toolbar = () => {
  const currentTheme = useSelector(currentThemeState);
  const theme = currentTheme.data;
  const dispatch = useDispatch();

  return (
    <View style={styles.toolbarView}>
      {/* Theme changer */}
      <View style={styles.themeView}>
        <MaterialCommunityIcons
          name="moon-waning-crescent"
          size={24}
          style={styles.iconView}
          color={theme.primary}
        />
        <Switch
          value={currentTheme.theme == "dark"}
          trackColor={{
            false: theme.background,
            true: theme.background,
          }}
          thumbColor="white"
          ios_backgroundColor={{
            false: theme.background,
            true: theme.background,
          }}
          onValueChange={(value) => {
            dispatch(value ? changeToDark() : changeToLight());
          }}
          style={{ marginHorizontal: 8 }}
        />
        <MaterialCommunityIcons
          name="white-balance-sunny"
          size={24}
          style={styles.iconView}
          color={theme.primary}
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
