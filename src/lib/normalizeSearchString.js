import compose from "lodash/fp/compose";
import trim from "lodash/fp/trim";
import { removeExtraWhitespace } from "lib/string";

const normalizeSearchString = compose(
  removeExtraWhitespace,
  trim
);

export default normalizeSearchString;
