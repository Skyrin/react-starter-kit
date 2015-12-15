import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render() {
		return (
			<header className='Header'>
				<ul>
					<li>
						<Link to='/' activeClassName='is-active' onlyActiveOnIndex={true}><i className='Header_home-icon fa fa-home'/> Home</Link>
					</li>
					<li>
						<Link to='/about' activeClassName='is-active'>About</Link>
					</li>
					<li>
						<Link to='/contact' activeClassName='is-active'>Contact</Link>
					</li>
				</ul>
			</header>
		);
	}
});