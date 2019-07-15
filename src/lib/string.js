import join from "lodash/fp/join";
import split from "lodash/fp/split";
import replace from "lodash/fp/replace";

export const words = split(" ");
export const unwords = join(" ");
export const removeExtraWhitespace = replace(/[ ]{2,}/g, " ");
