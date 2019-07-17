import { normalizeLabelString } from "lib";
import {
  ADD_SELECTED_LABEL,
  REMOVE_SELECTED_LABEL,
  SET_SELECTED_LANGUAGE,
  SET_KEYWORDS,
  SET_CURRENT_LABEL
} from "store/constants";

const DEFAULT_LABELS = ["good first issue", "help wanted", "first-timers-only"];

const LANGUAGES = [
  "Any",
  "Haskell",
  "JavaScript",
  "OCaml",
  "PureScript",
  "Python",
  "TypeScript"
];

const initialState = {
  keywords: "",
  currentLabel: "",
  suggestedLabels: DEFAULT_LABELS,
  selectedLabels: DEFAULT_LABELS,
  languages: LANGUAGES,
  selectedLanguage: LANGUAGES[2] // default to JavaScript
};

const selectedLabels = (state = initialState.selectedLabels, action) => {
  // Normalize the input label (lowercase and remove extra whitespace)
  const label = normalizeLabelString(action.payload);
  switch (action.type) {
    case ADD_SELECTED_LABEL:
      // If the normalized label is not an empty string,
      // _and_ if it's not already in the selectedLabels
      // then add it to the selectedLabels
      // otherwise, no changes
      return label !== "" && !state.includes(label) ? [...state, label] : state;
    case REMOVE_SELECTED_LABEL:
      return state.filter(l => l !== label);
    default:
      return state;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED_LABEL:
      return {
        ...state,
        currentLabel: "",
        selectedLabels: selectedLabels(state.selectedLabels, action)
      };
    case REMOVE_SELECTED_LABEL:
      return {
        ...state,
        selectedLabels: selectedLabels(state.selectedLabels, action)
      };
    case SET_CURRENT_LABEL:
      return { ...state, currentLabel: action.payload };
    case SET_SELECTED_LANGUAGE:
      return { ...state, selectedLanguage: action.payload };
    case SET_KEYWORDS:
      return { ...state, keywords: action.payload };
    default:
      return state;
  }
};

export { reducer as default, selectedLabels };
