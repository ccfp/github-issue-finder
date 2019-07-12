import join from "lodash/fp/join";
import split from "lodash/fp/split";

export { default as normalizeLabelString } from "./normalizeLabelString";
export { default as normalizeQueryString } from "./normalizeQueryString";
export { default as toQueryStringArray } from "./toQueryStringArray";
export { default as subsequences } from "./subsequences";

export const words = split(" ");
export const unwords = join(" ");
