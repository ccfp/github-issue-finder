import {
  ADD_SELECTED_LABEL,
  REMOVE_SELECTED_LABEL,
  SET_SELECTED_LANGUAGE,
  SET_KEYWORDS,
  SET_CURRENT_LABEL
} from "store/constants";

export const addSelectedLabel = label => ({
  type: ADD_SELECTED_LABEL,
  payload: label
});

export const removeSelectedLabel = label => ({
  type: REMOVE_SELECTED_LABEL,
  payload: label
});

export const setSelectedLanguage = language => ({
  type: SET_SELECTED_LANGUAGE,
  payload: language
});

export const setKeywords = keywords => ({
  type: SET_KEYWORDS,
  payload: keywords
});

export const setCurrentLabel = label => ({
  type: SET_CURRENT_LABEL,
  payload: label
});
