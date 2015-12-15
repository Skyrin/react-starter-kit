import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Error404 from './components/Error404';
import Root from './components/Root';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

export default function(history) {
	return (
		<Router history={history}>
			<Route path='/' component={Root}>
				<IndexRoute component={Home}/>
				<Route path='about' component={About}/>
				<Route path='contact' component={Contact}/>
				<Route path='*' component={Error404}/>
			</Route>
		</Router>
	);
}