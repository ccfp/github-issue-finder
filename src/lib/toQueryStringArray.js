import { unwords } from ".";
import normalizeQueryString from "./normalizeQueryString";
import subsequences from "./subsequences";

export const toQueryString = ({ keywords = "", labels, language }) =>
  unwords([
    keywords,
    unwords(labels.map(label => `label:"${label}"`)),
    language === "Any" ? "" : `language:${language}`
  ]);

export default ({ keywords, labels, language }) =>
  (labels.length > 0
    ? subsequences(labels).map(ls =>
        toQueryString({ keywords, labels: ls, language })
      )
    : [toQueryString({ keywords, labels, language })]
  ).map(normalizeQueryString);
