# "What's in" Front-End Challenge

### `Hello!`

This is my implementation of a movie search React application, a take-home challenge created by Significa (an Oporto based digital studio).

The app - [**What's in**](https://whats-in.netlify.app/) - is divided in two pages: an initial **home page**, where we can search for movies according to title, and a second one, where we can check info about a **specific movie**.

- **Home page:** search field and a list with the results (_it also has an empty state, a loading state and movie not found condition_)

- **Movie page:** movie details page (_it also has a loading state and movie not found condition_)

Since it was a simple project, I decided to bootstrap it with [Create React App](https://github.com/facebook/create-react-app).

---

## How to start

1. Get an API key from [OMDb API](http://www.omdbapi.com/).
2. Copy this folder (`significa`).
3. Create a file called `.env` in the root of the project’s directory.
4. Inside the `.env` file, assign your API key to `REACT_APP_API_KEY` (like so: `REACT_APP_API_KEY=your_api_key`).
5. On your terminal, install dependencies by running `npm install`.
6. Start app in development mode by running `npm start`.
7. Test app by running `npm test`.
8. To build app for production to the `build` folder, run `npm run build`.
9. **This app is now ready to be deployed!**

---

## Tools/packages used

- [Reach Router:](https://reach.tech/router/) a small, simple router for React
- [Emotion's Styled Components:](https://emotion.sh/docs/styled) creates React components that have styles attached to them
- [Jest:](https://jestjs.io/docs/en/getting-started) a JavaScript testing framework, great for React projects
- [Testing Library:](https://testing-library.com/docs/dom-testing-library/intro) a DOM testing library (helps testing web pages by querying and interacting with DOM nodes)
- [react-responsive:](https://www.npmjs.com/package/react-responsive) uses media queries in React for responsive design
---

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

---

## Learn More

To know more about **Significa**, go to their [website](https://significa.pt/).

You can learn more about **Create React App** in the [documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn **React**, check out the [React documentation](https://reactjs.org/).

And here's my [**portfolio**](https://isabelmoreira.me)! 😊
