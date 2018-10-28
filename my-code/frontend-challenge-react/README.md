## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      header/
        Header.js
        Header.module.scss
        Header.test.js
      ..
    img/
      ..
    pages/
      search/
        movieCard/
          ...
        Search.js
        Search.module.scss
        Search.test.js
    index.css
    index.js
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

By default, the generated project supports all modern browsers.<br>
Support for Internet Explorer 9, 10, and 11 requires [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).
