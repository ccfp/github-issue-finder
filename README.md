# GitHub issue finder

## Overview

Idea for a long(ish)-term collaborative project for CCFP members to contribute to. I would like to leverage a functional programming approach as much as possible, while staying reasonably within the bounds of everyone's wheelhouse. It could also be an opportunity to "level up" and learn some emerging tech (e.g., since we'd be using GitHub API's, this could be a good for getting familiar with GraphQL).

## Proposed timeline

This is pretty rough and off-the-top-of-my-head, but a rough _order of events_ might look something like:
1. **Draft project specification/user stories** I roughly have something in mind, so would be happy to self-assign this.
2. **Design specification** Also happy to put something together in XD/Sketch, it could just be a single view to start
3. **Decide on tech stack** Since most are familiar with React, that seems like a reasonable framework for frontend. Other considerations:
    1. **Utility libraries** I'd push for something in the spirit of `lodash/fp`, `partial.lenses` or `ramda` to maintain the functional-inspired approach 🙂, but it would also be good practice to implement as many utility functions from scratch as possible
    2. **State management** I'd recommend Redux (or Redux-style use of React hooks)
    2. **Testing**
    3. **Styling**
    4. **Data-fetching** If using GraphQL, `react-apollo` is very nice to work with
    5. **Deployment** Zeit's `now` seems nice?
4. **DevOps** Set up CircleCI, go over Git workflow, test deployment
4. **Proof-of-concept** Frontend only
5. **?**

## GitHub GraphQL API
I'd recommend we all spend some time exploring the GitHub GraphQL API to get an understanding of the sort of queries that we're _able_ to construct: https://developer.github.com/v4/explorer/.
For example, this is a good starting point for a basic query that finds issues tagged `good first issue`:
```graphql
query { 
  search(query:"label:\"good first issue\"", first:10, type:ISSUE) {
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
          labels(first:10) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
}
```
