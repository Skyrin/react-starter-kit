import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, (Handler, route)=>{
	React.render(<Handler route={route}/>, document.getElementById('react-root'));
});
