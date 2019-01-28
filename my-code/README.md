<img height="32" src="docs.png"></img>

# What’s in <sub><sup><sub>react-app for movies</sub></sup></sub>

[![www: online][www-badge]][www-url]

**This repo contains all the code for the [significa.vitordino.com](https://significa.vitordino.com) app.**

<br/><br/>

## Development Quick Start

> Make sure your system meets the [required dependencies and versions](#system-dependencies) before proceeding.

> Get one [themoviedb.org](https://themoviedb.org/documentation/api) API key, and set it as a environment variable named REACT_APP_TMDB_KEY (you can use a `.env.local` file for that)


```bash
# Install project dependencies
$ yarn

# Development server
$ yarn dev # starts dev server

# Build app
$ yarn build # Outputs to ./build directory
$ npx serve build # Static server for the built website
```

<br/><br/>

**Development Server Options**

To change the port set the **`PORT`** environment variable:

```bash
$ PORT=9000 yarn dev
# => starts server at http://localhost:9000
```

<br/><br/>

## Tech Stack

#### Key Front-End Packages

| name | license | description |
| :-- | :-: | :-- |
| [`react`](https://reactjs.org/) | [`MIT`](https://api.github.com/repos/facebook/react/license) | Declarative, component-based, functional aproach to user interfaces |
| [`create-react-app` `v2`](https://github.com/facebook/create-react-app) | [`MIT`](https://api.github.com/repos/facebook/create-react-app/license) | create `react` apps with no build configuration. |
| [`styled-components`](https://styled-components.com/) | [`MIT`](https://api.github.com/repos/styled-components/styled-components/license) | `css-in-js` library, composable styling |
| [`@reach/router`](https://reach.tech/router) | [`MIT`](https://api.github.com/repos/reach/router/license) | Next Generation Routing for `react` |
| [`rescripts`](https://github.com/harrysolovay/rescripts) | [`MIT`](https://api.github.com/repos/harrysolovay/rescripts/license) | Use the latest react-scripts with custom configurations for Babel, ESLint, TSLint, Webpack,... ∞ |
| [`react-snap`](https://github.com/stereobooster/react-snap) | [`MIT`](https://api.github.com/repos/stereobooster/react-snap/license) | Zero-configuration framework-agnostic static prerendering for SPAs |

<br/>

<sub>This app is heavily built on react alpha features — eg.: `hooks`, `lazy` and `Suspense`.</sub>

<sub>I do know the current syntax and features (class components, lifecycle methods, etc), but i do think the new APIs are much better to read / understand.</sub>

<sub>As this is just a small test, and doesn’t need rock solid compatibility or stability, I don’t see any problem on using these alpha features</sub>

<br/><br/>

#### System Dependencies

| name   | min. version |
| :----- | -----------: |
| `git`  |      `2.0.0` |
| `bash` |      `3.0.0` |
| `node` |      `8.0.0` |
| `yarn` |      `1.0.0` |

<br/><br/>

<sup>**&copy; 2019** Vitor Dino</sup>

[www-badge]: https://img.shields.io/badge/netlify-online-brightgreen.svg
[www-url]: https://significa.vitordino.com/
