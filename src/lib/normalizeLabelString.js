import compose from "lodash/fp/compose";
import replace from "lodash/fp/replace";
import toLower from "lodash/fp/toLower";
import trim from "lodash/fp/trim";

export default compose(
  toLower,
  replace(/{ }+/g, ""),
  trim
);
