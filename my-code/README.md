## Instructions

```sh
# Install
yarn

# Copy .env.example to .env and add OMDb API key
cp .env.example .env

# Develop
yarn start

# Build
yarn build
```

## Prettier and styled-components

Although the idea of Prettier is good, a tool that modifies code needs to
prioritize correctness. Prettier has built-in support for styled-components, but
it's buggy and introduces weird formatting:

* [Playground example](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEBnGBPANnAJgOlwEsA3AAwB0oACagEmADMIIBfK2gWwEMAnAcyJQk1AAz4ArLzicA3FUpQq6bHkKlFtBszYKQAGhAQADjCLRUyUH14QA7gAU+CSym4kIRXAZAAjXtxgANZwMADKxoFC-MgwvACucIZCqHC8MA4B-DzIjNxYqYYAVqgAHgBCAcGhYdyccAAyQnC5+YUgkbypvMggjFj2Psa8QjAA6l4wABbIAByihsMQqWMBxr3DcN0kLYbSAI7xRNKZ3NncrQVJaDJEsQnXqNE4AIrxEPCX7TDcvhO402QACZDHFuEQsNEAMIQTg5FBQaC7EDxVIAFV+rjyV1YrCAA)
* [prettier#2350](https://github.com/prettier/prettier/issues/2350)
* [prettier#2291](https://github.com/prettier/prettier/issues/2291)

I worked around this by by importing styled-components as `sc` instead of
`styled`.

## API

OMDb API is not suitable for production use. It lacks proper documentation and
makes some weird choices regarding responses, for example:

* Uses strings for boolean values
* Return `N/A` if a poster not available
* Sometimes has duplicates in search results
* Returns an error instead of an empty list if no search results are found

It's also slow and error-prone.

## Browser support

Only minimal transpilation is enabled and there is no polyfilling, which means
browser support is limited.

## Bundle size

The final bundle size is about 80kB gzipped, which is large for this app.
This could be significantly reduced with proper tree-shaking/dead code
elimination(webpack does a poor job of this). Several of the libraries used
could be replaced with smaller versions(Preact), or with bespoke
implementations(e.g. the routing). I have used them here because of faster
development and because of their widespread use.

## Design

I have not focused on the design. The loading indicator and mobile layouts are done
in a minimum effort way.
