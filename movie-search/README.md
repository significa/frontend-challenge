[![Build Status](https://travis-ci.org/fernand0aguilar/frontend-challenge.svg?branch=fernando-aguilar)](https://travis-ci.org/fernand0aguilar/frontend-challenge) 
[![Maintainability](https://api.codeclimate.com/v1/badges/5e908ef8184fcc8707eb/maintainability)](https://codeclimate.com/github/fernand0aguilar/frontend-challenge/maintainability)

***
## About this project:

This is a tech recruiting challenge, forked from [this repo](https://github.com/Significa/frontend-challenge). 
All the design credits go to them. 
The common components credits goes to [Isabel Sá](https://github.com/isabelsa/frontend-challenge) which thanks to the existing code, saved me a lot of time and ennergy on the implementation of the UI styles.

## How to Execute:

Install
***With Docker:***
> Requires docker and docker-composer
```
clone the repository
cd frontend-challenge
docker-compose build
```
***With Yarn***
> Requires node_js and yarn
```
clone the repository
cd frontend-challenge/movie-search
yarn install
```
### When it's ready to go: 

Edit the file */movie-search/.env.development* with your **API_KEY**

Then run ***`docker-compose up`*** or `yarn start` \
access localhost:3000 to use the app

***

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

To-Do List:
- [X] Manage States With Redux
- [X] Fix Continuous Deploy
- [X] Refactor Css To make the website responsible
- [X] Refactor HomePage for components modularization
- [X] Write a good README with basic information (e.g.: how to start the project and how to build it with docker;)
- [X] Create Automated Tests with Selenium
- [X] Plan app development
- [X] Research css methodology, such as BEM, ITCSS, etc;
- [X] Take a look at the /layout folder, there you will find everything you need.
- [x] Break a leg!

*** 
