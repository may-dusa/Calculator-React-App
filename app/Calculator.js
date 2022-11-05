import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Mexp from "math-expression-evaluator";

import { Colors } from "./Theme";

import Expression from "./Expressions";
import ButtonGrid from "./ButtonGrid";
import Toolbar from "./Toolbar";

const Calculator = ({ themeMode, changeTheme }) => {
  const [[mainText, overHead], updateData] = useState(["", ""]);

  const theme = themeMode == "light" ? Colors.light : Colors.dark;

  function addToExp(entry) {
    let currentExpression = mainText.toString();
    let changedExpression = currentExpression + entry;
    updateData([changedExpression, overHead]);
  }

  function clrExp() {
    let changedExpression = "";
    let changedOverHead = "";
    updateData([changedExpression, changedOverHead]);
  }

  function backSpExp() {
    let currentExpression = mainText.toString();
    let changedExpression = currentExpression.trim().slice(0, -1).trim();
    updateData([changedExpression, overHead]);
  }

  function addParentheses() {
    let currentExpression = mainText.toString();
    const op = /\050/g;
    const cl = /\051/g;

    let opInstance =
      currentExpression.match(op) == null
        ? 0
        : currentExpression.match(op).length;
    let clInstance =
      currentExpression.match(cl) == null
        ? 0
        : currentExpression.match(cl).length;

    if (opInstance > clInstance) {
      let changedExpression = currentExpression + ")";
      updateData([changedExpression, overHead]);
    } else {
      let changedExpression = currentExpression + "(";
      updateData([changedExpression, overHead]);
    }
  }

  function getAns() {
    let currentExpression = mainText.toString();
    let answer = Mexp.eval(currentExpression);
    updateData([answer, currentExpression]);
  }

  return (
    <SafeAreaView style={[styles.background, { backgroundColor: theme.bg }]}>
      {/* Toolbar */}
      <Toolbar themeMode={themeMode} theme={theme} changeTheme={changeTheme} />
      {/* Expression*/}
      <Expression mainText={mainText} overHead={overHead} theme={theme} />

      {/* Buttons*/}
      <ButtonGrid
        addToExp={addToExp}
        backSpExp={backSpExp}
        clrExp={clrExp}
        addParentheses={addParentheses}
        getAns={getAns}
        theme={theme}
      />
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
