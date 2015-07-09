import React from 'react';
import Router from 'react-router';

export default React.createClass({
	render() {
		return (
			<header className='Header'>
				<Router.Link to={'/'} className='Header_logo'>
					<i className='Header_logo_icon fa fa-home'/>
				</Router.Link>
				<div className='Header_nav'>
					<ul>
						<li><Router.Link to={'/about'}>About</Router.Link></li>
						<li><Router.Link to={'/contact'}>Contact</Router.Link></li>
					</ul>
				</div>
			</header>
		);
	}
});