[![Build Status](https://travis-ci.org/fernand0aguilar/frontend-challenge.svg?branch=fernando-aguilar)](https://travis-ci.org/fernand0aguilar/frontend-challenge) 
[![Maintainability](https://api.codeclimate.com/v1/badges/5e908ef8184fcc8707eb/maintainability)](https://codeclimate.com/github/fernand0aguilar/frontend-challenge/maintainability)

***
## About this project:

This is a tech recruiting challenge, forked from [this repo](https://github.com/Significa/frontend-challenge). 
All the design credits go to them. 
The common components credits goes to [Isabel Sá](https://github.com/isabelsa/frontend-challenge) which thanks to the existing code, saved me a lot of time and ennergy on the implementation of the UI styles.

## How to Execute:

***With Docker:***
> Requires docker and docker-composer
```
clone the repository
cd frontend-challenge
docker-compose build
docker-compose up
```
***With Yarn***
> Requires node_js and yarn
```
clone the repository
cd frontend-challenge/movie-search
yarn install
yarn test:flow
yarn start
```
When it's ready to go, access localhost:3000 to use the app

## Technical Details:

**All the below technologies were used:**

|Name|Description|Website| 
|--|---|---|
|CodeClimate| continuously measure and monitor code quality |[link](https://codeclimate.com/)|
|Docker|  create, deploy, and run applications by using containers |[link](https://www.docker.com/)|
|Eslint| The pluggable linting utility |[link](https://github.com/Significa/eslint-config-significa)|
|Flow| A static type checker |[link](https://flow.org/)|
|Node| A JavaScript runtime server|[link](https://nodejs.org/en/)|
|React| library for building user interfaces |[link](https://reactjs.org/)||
|Selenium| framework for testing web applications. |[link](https://www.seleniumhq.org/)|
|Styled System| Style props for rapid UI development |[link](https://styled-system.com/)|
|Surge| A static web publishing |[link](https://surge.sh/)|
|Travis CI| Service used to build and test |[link](https://travis-ci.org/)|
|...| ... | ... |


***

## About the Company

<img width="179" alt="screen shot 2018-04-11 at 14 55 21" src="https://user-images.githubusercontent.com/4838076/38634265-6545f090-3d98-11e8-8869-c5e477648fdf.png">

[Significa](https://significa.pt/) is an Oporto based digital studio founded in late 2013. Despite being specialised in Interaction Design and Brand Development, we believe that good design thinking can answer almost any question and solve most problems. We aim to provide meaningful design solutions to achieve the best user engagement possible in any situation.

## About the challenge

This is a pretty simple test, in which you should be able to write a React app, using the provided screens as reference. You’ll need to make requests to an API to get some JSON content, filter the data and print it on view.

You can use any boilerplate/approach you prefer, but try to keep it simple. We encourage you to use your favourite tools and packages to build a solid React application.

### The app should be a movie search with two pages:

* **Home page:** search field and a list with the results;

  _Think about empty state, loading state and movie not found_

* **Movie page:** movie details page;

  _Think about loading state and movie not found_

The purpose of this challenge is to evaluate your HTML, CSS, Javascript and React API skills and overall approach while composing a simple web app given a set of screens and an API feed. We will also assess the HTML, CSS, and JS output.

## Getting Started

1.  Fork this repository to your personal account;
2.  Create a branch with your name;
3.  Solve the challenge in the best way you can;

**Send us your code in one of two ways.**

1.  Send us a PR;
2.  Send us an email with your code in a zip to: hello@significa.pt

### Tips

* Write a good README with basic information (e.g.: how to start the project and how to build it);
* There's no screens designed for the mobile version, but if you build a responsive app it's a big plus. We would love to see your design skills as well!
* Feel free to work and improve on the available designs. Think of them as guidelines.
* There's a "like" button on the details page. It would be great if this information is persistent!
* Prefer to use a css methodology, such as BEM, ITCSS, etc;
* Asking questions is good. We will not penalize you for asking questions;
* The API server is sometimes slow, so think about loading and empty states throughout your application;
* We're looking for signs you understand concepts such as events, promises, and reactivity, and how those concepts are implemented in Javascript;
* Unit testing will be greatly valued;
* The git history will be evaluated;
* Your code will be evaluated by: semantics, structure, legibility, size, elegance (among other factors);

### Necessary information

#### API:

We suggest using [OMDb API](http://www.omdbapi.com/), although you can use any other API you prefer

#### Screens / Assets / Styleguide:

Take a look at the `/layout` folder, there you will find everything you need.

[Invision Prototype](https://invis.io/K6GW19Z3FP8#/291216728_1-Search)  
[Styleguide](https://invis.io/5JGW1AFQHUX#/291309274_1-type)

### Contact or doubts

Use the [issues](https://github.com/Significa/frontend-challenge/issues) or send us an email: hello@significa.pt

_Break a leg!_
