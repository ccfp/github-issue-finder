import compose from "lodash/fp/compose";
import reverse from "lodash/fp/reverse";

const powerset = xs => {
  const x = xs.shift();
  return x === undefined ? [[]] : powerset(xs).flatMap(r => [r.concat(x), r]);
};

const subsequences = compose(
  powerset,
  reverse
);

export { powerset, subsequences as default };
