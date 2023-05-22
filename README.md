
## What's in Challenge Solution - IMDb Movie Search App

I completed the Significa's React application challenge by building an IMDb movie search app. The challenge involved creating a functional and responsive app based on the provided screens as a reference. Throughout the development process, I retrieved JSON content from IMDb's API using a search mechanism, filtered the data, and displayed it on the movie's detailed page. I implemented a Like feature that works seamlessly within the app and designed two extra screens to predict responsiveness and a Not found component.

### Preview Extra screens

https://xd.adobe.com/view/9af3807a-1e37-426f-915d-f3c35f3a1ae9-cfa0/

### Technologies Used

To accomplish the challenge, I utilized the following technologies and tools:

* **React:** React as the framework for building the application;

* **Create React App:**  I used Create React App as a boilerplate to quickly set up the initial project structure and build configuration;

* **React Router:**  I employed React Router to handle routing within the application, ensuring seamless navigation between different pages;

* **BEM:** Followed the BEM naming convention to write modular and scalable CSS code for enhanced maintainability;

* **Sass:** Utilized Sass for improved code organization and maintainability;

* **Adobe XD:** Utilized Adobe XD for designing two extra screens, one to predict the responsive behavior and one to illustrate the Not found state.


## Getting Started

1.  Clone this repository: git clone https://github.com/fernanda-freitas/significa-frontend-challenge
2.  Navigate to the project directory: `cd significa-frontend-challenge/my-code/whats-in/`
3.  Install the dependencies: `npm install`

## Usage

1.  Run it with `npm start`
2.  Preview it in http://localhost:3000/

## Folder structure

significa-frontend-challenge/
  ├── layout/
  ├── my-code/
  |   ├── whats-in/
  |   |   ├── node_modules/
  |   |   ├── package-lock.json
  |   |   ├── package.json
  |   |   ├── public/
  |   |   └── README.md
  |   |   ├── src/
  |   |   |   ├── App.jsx
  |   |   |   ├── components/
  |   |   |   |   ├── Empty.jsx
  |   |   |   |   ├── Header.jsx
  |   |   |   |   ├── Loading.jsx
  |   |   |   |   └── Notfound.jsx
  |   |   |   ├── images/
  |   |   |   ├── index.jsx
  |   |   |   ├── index.scss
  |   |   |   ├── pages/
  |   |   |   |   ├── Homepage/
  |   |   |   |   |   └── index.jsx
  |   |   |   |   └── Movie/
  |   |   |   |       └── index.jsx
  |   |   |   └── App.js
  |   |   └── package.json
  |__ README.md

## Contributing

Contributions are super welcomed! If you find any issues or want to enhance the app, feel free to submit your pull request.

.
├── build                   # Compiled files (alternatively `dist`)
├── docs                    # Documentation files (alternatively `doc`)
├── src                     # Source files (alternatively `lib` or `app`)
├── test                    # Automated tests (alternatively `spec` or `tests`)
├── tools                   # Tools and utilities
├── LICENSE
└── README.md

├── src
│   ├── controller
│   │   ├── **/*.css
│   ├── views
│   ├── model
│   ├── index.js
├── public
│   ├── css
│   │   ├── **/*.css
│   ├── images
│   ├── js
│   ├── index.html
├── dist or build
├── node_modules
├── package.json
├── package-lock.json 
└── .gitignore