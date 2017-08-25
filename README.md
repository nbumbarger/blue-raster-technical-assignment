# blue-raster-technical-assignment

Introductory ArcGIS JS API experiment, with React, Redux and Webpack

## Installation and Usage

The steps below will walk you through setting up your own instance of the project.

### Install Project Dependencies
To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) v6 (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/) Package manager

### Install Application Dependencies

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

```
nvm install
```

Install Node modules:

```
yarn install
```

### Usage

#### Starting the app

```
yarn run serve
```
Compiles the sass files, javascript, and launches the server making the site available at `http://localhost:8080/`
The system will watch files and execute tasks whenever one of them changes.

# Deployment
To prepare the app for deployment run:

```
yarn run build
```
This will package the app and place all the contents in the `dist` directory.
The app can then be run by any web server.
