import compose from "lodash/fp/compose";
import toLower from "lodash/fp/toLower";
import trim from "lodash/fp/trim";
import { removeExtraWhitespace } from "lib/string";

const normalizeLabelString = compose(
  toLower,
  removeExtraWhitespace,
  trim
);

export default normalizeLabelString;
