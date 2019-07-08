import { unwords } from ".";

export const toQueryString = ({ keywords, labels, language }) =>
  `${keywords} ${unwords(
    labels.map(label => `label:"${label}"`)
  )} language:${language}`;

// @TODO: Implement `toQueryStringArray` function
// Combinations of labels in a query will only
// yield results where _all_ labels are present.
// We want to be a bit less strict, so if a user
// enters multiple, we want to generate the power
// set of possible combinations, and distribute
// across multiple queries. An example: a user
// searches for label "a", label "b", and label "c".
// We want to yield results for when all three
// labels appear together, _then_ we want results
// where just "a" and "b" are present, then match
// "a" and "c", then "b" and "c", then match each
// label individually.
// I've implemented a `subsequences` function to
// help with this.
export default ({ keywords, labels, language }) => [
  toQueryString({ keywords, labels, language })
];
