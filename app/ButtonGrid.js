import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";

import {
  addToExp,
  clrExp,
  backSpExp,
  addParentheses,
  getAns,
} from "./DataSlice";
import { currentThemeState } from "./ThemeSlice";

import { Fonts } from "./Theme";

const ButtonGrid = () => {
  const currentTheme = useSelector(currentThemeState);
  const theme = currentTheme.data;
  const buttonContent = [
    {
      name: "alpha-c",
      theme: "new",
      onPress: [clrExp, ""],
    },
    {
      name: "backspace-outline",
      theme: "ops",
      onPress: [backSpExp, ""],
    },

    {
      name: "percent-outline",
      theme: "ops",
      onPress: [addToExp, " % "],
    },
    {
      name: "slash-forward",
      theme: "ops",
      onPress: [addToExp, " / "],
    },
    {
      name: 7,
      theme: "num",
      onPress: [addToExp, "7"],
    },
    {
      name: 8,
      theme: "num",
      onPress: [addToExp, "8"],
    },
    {
      name: 9,
      theme: "num",
      onPress: [addToExp, "9"],
    },
    {
      name: "close",
      theme: "ops",
      onPress: [addToExp, " * "],
    },
    {
      name: 4,
      theme: "num",
      onPress: [addToExp, "4"],
    },
    {
      name: 5,
      theme: "num",
      onPress: [addToExp, "5"],
    },
    {
      name: 6,
      theme: "num",
      onPress: [addToExp, "6"],
    },
    {
      name: "minus",
      theme: "ops",
      onPress: [addToExp, " - "],
    },
    {
      name: 1,
      theme: "num",
      onPress: [addToExp, "1"],
    },
    {
      name: 2,
      theme: "num",
      onPress: [addToExp, "2"],
    },
    {
      name: 3,
      theme: "num",
      onPress: [addToExp, "3"],
    },
    {
      name: "plus",
      theme: "ops",
      onPress: [addToExp, " + "],
    },
    {
      name: 0,
      theme: "num",
      onPress: [addToExp, "0"],
    },
    {
      name: "code-parentheses",
      theme: "num",
      onPress: [addParentheses, ""],
    },
    {
      name: "circle-small",
      theme: "num",
      onPress: [addToExp, "."],
    },
    {
      name: "equal",
      theme: "ops",
      onPress: [getAns, ""],
    },
  ];

  function buttonTheme(themeType) {
    if (themeType == "new") {
      return {
        bg: theme.secondaryVariation,
        fg: theme.secondary,
      };
    } else if (themeType == "ops") {
      return {
        bg: theme.tertiaryVariation,
        fg: theme.tertiary,
      };
    } else {
      return {
        bg: theme.primaryVariation,
        fg: theme.primary,
      };
    }
  }

  return (
    <View style={styles.buttonGrid}>
      <FlatList
        data={buttonContent}
        renderItem={({ item, index, _ }) => {
          return (
            <Button
              content={item.name}
              theme={buttonTheme(item.theme)}
              onP={item.onPress}
            />
          );
        }}
        numColumns={4}
        horizontal={false}
        keyExtractor={(_, index) => index}
      />
    </View>
  );
};

export default ButtonGrid;

const styles = StyleSheet.create({
  buttonGrid: {
    marginHorizontal: 8,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    aspectRatio: 1,
    borderRadius: 100,
  },
});

const Button = ({ content, theme, onP }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => dispatch(onP[0](onP[1]))}
      style={[styles.button, { backgroundColor: theme.bg }]}
    >
      {!isNaN(content) ? (
        <Text style={[Fonts.default, { color: theme.fg }]}>{content}</Text>
      ) : (
        <MaterialCommunityIcons name={content} size={24} color={theme.fg} />
      )}
    </TouchableOpacity>
  );
};
