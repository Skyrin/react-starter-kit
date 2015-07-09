# React Starter Kit

This boiler-plate application is mainly to demonstrate the tooling and structure that we are currently using to build React applications.

### Tooling

* Webpack for building the application. It handles transpiling the JavaScript and preprocessing the CSS and bundling of those files for use in the browser.  This replaces Grunt or Gulp for task running, and RequireJS or Browserify for bundling. This application includes a starting configuration file for Webpack to handle these things, so don't worry if you are unfamiliar.

* NPM for dependency management. If you use 3rd-party code, please use NPM to install the module and save it as a dependency.  For example, to install and save the momentjs library: `npm install --save moment`. Please do not use Bower to pull in dependencies. If the 3rd-party code you want to use doesn't exist on NPM, it's probably not a good dependency to use for this project as it is unlikely to have been packaged with Node in mind.  Eventually we may want to support server-side rendering for this application, which will require node-compatible modules.

* [React Router](http://rackt.github.io/react-router/) for routing.

* [React Document Title](https://github.com/gaearon/react-document-title) for setting the value of the `<title>` element from within a component.

### Installing

You'll need to install node and npm on your development machine. Then use NPM to install Webpack globally, which makes `webpack` available from the command line:
`
npm install webpack -g
`

The install this application and it's dependencies:
`
npm install react-starter-kit
`

### Development

Run the following to build the JavaScript and CSS files:
`
webpack -w
`

The `-w` option starts a watch task that will rebuild the bundles whenever the source files are modified.

Then, run the following to start at local server at `http://localhost:3333/`:
`
node server
`