import React from 'react';
import Router from 'react-router';

const Route = Router.Route;
const RouteHandler = Router.RouteHandler;
const NotFoundRoute = Router.NotFoundRoute;

export default [
	<Route path='/' handler={require('./components/Root/')}>
		<Route path='about' handler={require('./components/About/')}></Route>
		<Route path='contact' handler={require('./components/Contact/')}></Route>
		<Route handler={require('./components/Home/')}></Route>
		<NotFoundRoute handler={require('./components/Error404/')}/>
	</Route>,
	<NotFoundRoute handler={require('./components/ErrorRouter/')}/>,
];