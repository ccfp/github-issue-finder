### UI/UX

For now, all UI components and styles are hand-crafted. It's neither elegant nor robust, so experience suffers for example on mobile, or Safari. The idea is to use this format (with hand-written Sass extending HTML5 elements) for the time being, until a "proof-of-concept" milestone is reached and then transition to a UI kit/component library.

I'm looking at [Blueprint](https://blueprintjs.com/)–and haven't found a better alternative–since it has both a `Select` and a `Slider` component (and it's not Material-UI!).

### State management

Using local state for rapid prototyping right now, but I think that I will quickly transition to using Redux for everything. The hooks API in Redux is new but stable, and I think this will be the way forward. Local state may still make sense for UI state, such as forms, etc.

### Data fetching

Going to use Apollo for this, and specifically [`apollo-boost`](https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost) (which is a pre-configured, batteries-included wrapper around Apollo Client) and [`@apollo/react-hooks`](https://github.com/apollographql/react-apollo/blob/1a69cd244910b801176550a7137baf570c836516/packages/hooks/README.md) which is in **beta**! But it should be fine for what we're doing: consuming an external GraphQL endpoint.

## Functional programming concepts

There have already been a couple times where I've wanted to bring in some heavy-weight FP solutions, but for now just sticking with the [`lodash/fp`](https://github.com/lodash/lodash/wiki/FP-Guide) set of functions, which is easily accessible.

I think the first concept to introduce would be a `Maybe` type (something found in most modern programming languages as a way of avoiding `null` values, the million-dollar mistake).

Down the line, I would be interested in trying to incrementally adopt a functional PL, such as [Reason](https://reasonml.github.io/) or [PureScript](http://www.purescript.org/), or just explore the benefits adding types with [TypeScript](https://www.typescriptlang.org). All these languages can live happily side-by-side with plain JavaScript so buy-in is not steep. 