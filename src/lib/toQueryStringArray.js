import { unwords } from "lib/string";
import normalizeQueryString from "lib/normalizeQueryString";
import subsequences from "lib/subsequences";

const toQueryString = ({ keywords = "", labels, language }) =>
  unwords([
    keywords,
    unwords(labels.map(label => `label:"${label}"`)),
    language === "Any" ? "" : `language:${language}`
  ]);

const toQueryStringArray = ({ keywords, labels, language }) =>
  subsequences(labels)
    .map(ls => toQueryString({ keywords, labels: ls, language }))
    .map(normalizeQueryString);

export { toQueryString, toQueryStringArray as default };
