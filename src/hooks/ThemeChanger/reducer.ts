import { ThemeChangerState } from "./Model";

type Actions = {
  type: "CHANGE_FILTER_VALUE";
};

export const reducer = (
  state: ThemeChangerState,
  action: Actions
): ThemeChangerState => {
  if (action.type === "CHANGE_FILTER_VALUE") {
    return { ...state };
  }
  return state;
};
