import compose from "lodash/fp/compose";
import trim from "lodash/fp/trim";
import { removeExtraWhitespace } from "lib/string";

const normalizeQueryString = compose(
  removeExtraWhitespace,
  trim
);

export default normalizeQueryString;
