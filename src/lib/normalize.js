import compose from "lodash/fp/compose";
import replace from "lodash/fp/replace";
import trim from "lodash/fp/trim";

export default compose(
  replace(/{ }+/g, ""),
  trim
);
