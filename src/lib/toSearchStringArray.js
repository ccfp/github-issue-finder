import { unwords } from "lib/string";
import normalizeSearchString from "lib/normalizeSearchString";
import subsequences from "lib/subsequences";

const toSearchString = ({ keywords = "", labels, language }) =>
  unwords([
    keywords,
    unwords(labels.map(label => `label:"${label}"`)),
    language === "Any" ? "" : `language:${language}`
  ]);

const toQueryStringArray = ({ keywords, labels, language }) =>
  subsequences(labels)
    .map(ls => toSearchString({ keywords, labels: ls, language }))
    .map(normalizeSearchString);

export { toSearchString, toQueryStringArray as default };
