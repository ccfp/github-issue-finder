import React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
import compose from "lodash/fp/compose";
import map from "lodash/fp/map";

// @TODO: Add REACT_APP_GH_KEY to Now variables
const headers = {
  authorization: `Bearer ${process.env.REACT_APP_GH_KEY}`
};

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers
});

// This lens will drill down into the returned JSON to get
// the actual relevant data that we want. Feel free to experiment
// with it, or we can remove it altogether. Lenses add safety for
// getting deeply nested data out of JSON but with how Apollo works,
// we might not need it.
const exampleLens = compose(
  map(get(["node"])),
  get(["search", "edges"])
);

function Results() {
  const { data, loading } = useQuery(exampleQuery, {
    client,
    // @TODO: Read variables from URL query string
    // These variables are hardcoded right now, but ultimately we'll
    // need to read them from the query string:
    // https://en.wikipedia.org/wiki/Query_string
    variables: {
      search: 'react label:"good first issue"'
    }
  });
  console.log(exampleLens(data));
  return (
    <main>
      <h1>GitHub Issue Finder</h1>
      <h2>Results</h2>
      <ul>
        {exampleLens(data).map(issue => (
          <li key={issue.id}>
            <h4>{issue.title}</h4>
            <h5>
              {issue.repository.owner.login} {issue.updatedAt}
            </h5>
            <p>{issue.body}</p>
            <p>
              {issue.labels.nodes.map(label => (
                <button>{label.name}</button>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Results;

// @TODO: Fix this query to get all the info that is illustrated in the mock-up
const exampleQuery = gql`
  query ExampleQuery($search: String!) {
    search(query: $search, first: 10, type: ISSUE) {
      edges {
        node {
          ... on Issue {
            repository {
              owner {
                login
              }
              updatedAt
            }
            updatedAt
            title
            id
            body
            labels(first: 10) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
