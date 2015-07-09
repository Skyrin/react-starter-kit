# React Starter Kit

This boiler-plate application is mainly to demonstrate the tooling and structure that we are currently using to build React applications.

## Tooling

* Webpack for building the application. It handles transpiling the JavaScript and preprocessing the CSS and bundling of those files for use in the browser.  This replaces Grunt or Gulp for task running, and RequireJS or Browserify for bundling. This application includes a starting configuration file for Webpack to handle these things, so don't worry if you are unfamiliar.

* NPM for dependency management. If you use 3rd-party code, please use NPM to install the module and save it as a dependency.  For example, to install and save the momentjs library: `npm install --save moment`. Please do not use Bower to pull in dependencies. If the 3rd-party code you want to use doesn't exist on NPM, it's probably not a good dependency to use for this project as it is unlikely to have been packaged with Node in mind.  Eventually we may want to support server-side rendering for this application, which will require node-compatible modules.

* [React Router](http://rackt.github.io/react-router/) for routing.

* [React Document Title](https://github.com/gaearon/react-document-title) for setting the value of the `<title>` element from within a component.

### Installing

You'll need to install node and npm on your development machine. Then use NPM to install Webpack globally, which makes `webpack` available from the command line:
```
npm install webpack -g
```

The install this application and it's dependencies:
```
npm install react-starter-kit
```

### Development

Run the following to build the JavaScript and CSS files:
```
webpack -w
```

The `-w` option starts a watch task that will rebuild the bundles whenever the source files are modified.

Then, run the following to start at local server at `http://localhost:3333/`:
```
node server
```

## Component Structure

The reason why I created this starter application, versus using an existing boiler-plate project, is to impart the following convention for structuring components:

* Any styling a component needs should go it's own CSS file
* Any classes a component uses should be namespaced under the component name.
* Each component should have it's own directory that includes it's assets, such as it's CSS file.

For example, a component named `Header` might import the following SCSS file:

```
@import '../../variables.scss';

.Header {
	display: flex;

	&_logo {
		flex-shrink: 0;
	}

	&_nav {
		flex-shrink: 0;

		ul {
			margin: 0;
			padding: 0;

			li {
				display: table-cell;

				a {
					display: block;
					padding: 10px;
					background: $color-link;
					color: #fff;
					margin-right: 2px;
				}
			}
		}
	}
}
```