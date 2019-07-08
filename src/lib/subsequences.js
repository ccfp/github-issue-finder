import compose from "lodash/fp/compose";
import reverse from "lodash/fp/reverse";
import slice from "lodash/fp/slice";

const powerset = xs => {
  const x = xs.shift();
  return x === undefined ? [[]] : powerset(xs).flatMap(r => [r.concat(x), r]);
};

export default compose(
  slice(0, -1),
  powerset,
  reverse
);
