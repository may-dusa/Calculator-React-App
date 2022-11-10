import { createSlice } from "@reduxjs/toolkit";
import Mexp from "math-expression-evaluator";
import { addToHistory } from "./HistorySlice";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    expression: "",
    answer: "",
  },
  reducers: {
    addToExp(state, actions) {
      let currentExpression = state.expression;
      let changedExpression = currentExpression + actions.payload;
      state = { ...state, expression: changedExpression };
      return state;
    },

    clrExp(state) {
      let changedExpression = "";
      let changedAnswer = "";
      state = {
        ...state,
        expression: changedExpression,
        answer: changedAnswer,
      };
      return state;
    },

    backSpExp(state) {
      let currentExpression = state.expression;
      let changedExpression = currentExpression.trim().slice(0, -1).trim();
      state = { ...state, expression: changedExpression };
      return state;
    },

    addParentheses(state) {
      let currentExpression = state.expression;
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
        state = { ...state, expression: changedExpression };
      } else {
        let changedExpression = currentExpression + "(";
        state = { ...state, expression: changedExpression };
      }
      return state;
    },

    getAns(state) {
      let calculatedAnswer = Mexp.eval(state.expression);

      state = {
        ...state,
        answer: calculatedAnswer,
      };

      return state;
    },
  },
});

export const { addToExp, clrExp, backSpExp, addParentheses, getAns } =
  dataSlice.actions;
export default dataSlice.reducer;
export const currentDataState = (state) => state.dataReducer;
