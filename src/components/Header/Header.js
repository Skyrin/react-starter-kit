import React from 'react';
import Router from 'react-router';

export default React.createClass({
	render() {
		return (
			<header className='Header'>
				<ul>
					<li><Router.Link to={'/'}>Home</Router.Link></li>
					<li><Router.Link to={'/about'}>About</Router.Link></li>
					<li><Router.Link to={'/contact'}>Contact</Router.Link></li>
				</ul>
			</header>
		);
	}
});