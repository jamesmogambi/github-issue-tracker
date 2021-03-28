# Github-issue-tracker
>Progressive web app for viewing repository issues from the github.com. 

## Table of contents
* [Description](#description)
* [Live Demo](#live-demo)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [App Info](#app-info)

## Description
Github-issue-tracker Application is a Progressive web app for viewing repository issues from the github.com. Built with react, redux, redux-thunk and webpack.
The web communicates with  Github GRAPHQL API to fetch and display user repositories and issues.


## Live Demo
Here is a working live demo : [live](https://issue-tracker-2021.herokuapp.com/) 


## Screenshots

### Index

![index](https://user-images.githubusercontent.com/31744209/112748334-a8e66c00-8fc3-11eb-9700-3b0515ad61e6.png)

### Repos Page
![repos](https://user-images.githubusercontent.com/31744209/112755545-bf072300-8fe9-11eb-82db-9075b6560aa0.png)

### Issues Page
![screencapture-localhost-8080-issues-dev-MERN-Stack-jamesmogambi-2021-03-25-15_46_37](https://user-images.githubusercontent.com/31744209/112755610-0b526300-8fea-11eb-8c6f-52cf2ab3cbd5.png)

### Issue Detail Page
![issue-detail](https://user-images.githubusercontent.com/31744209/112755686-79972580-8fea-11eb-8b02-59cb29830ec1.png)

## Technologies
* Technologies used:
  * `React` 15.6 - for displaying UI components
  * `Redux` 3.7 -  predictable state container for managing application state
  * `Webpack` 3.1 - module bundler for this application 
  * `Express` 4.1 - middleware is used to handle requests, routes
  * `Jest` 20.0 - testing framework for Javascript codebase, specifically React for this application.
  * `Enzyme` 2.9 - JavaScript Testing utility for React that makes it easier to test your React Components' output.
 
  
  ## Setup
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.


###  Clone repo
Run the following scripts in the terminal to clone the repo
```
$ git clone git@github.com:jamesmogambi/github-issue-tracker.git
$ cd github-issue-tracker
```

----------------------------------


### Add a  .env.development file in root folder with the following
Obtain your personal access token from : [github.com](https://github.com/settings/tokens) 
```
{
    "GITHUB_ACCESS_TOKEN": "<your_github_access_token>",
 }
```


### Install  dependencies

```bash
npm install
```

### Run App

```bash
npm run dev-server
```
Runs the app in the development mode.<br>
The page will reload if you make edits.<br>

### Run Tests
```bash
npm run test --watch
```
Launches the test runner in the interactive watch mode.<br>


### Build for production

```bash
npm run build-prod
```

### Test production before deploy

After running a build 👆, run the following script...


```bash
npm run start
```

### Deploy to Heroku 
To deploy the build to Heroku run the following script...

```bash
npm run heroku-postbuild
```


## Features
List of features:
* Search user repositories
* View user repositories
* View Repository Issues
* Search/Filter issues by title
* View issue details
* View repository tags

To-do List:
* Add  filter issue by state,date


## App Info

### Author

James Mogambi
[James Mogambi](https://github.com/jamesmogambi)

### Version

2.0.0

### License

This project is licensed under the MIT License

