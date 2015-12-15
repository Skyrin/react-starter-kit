import React from 'react';
import Hero from '../Hero/';
import DocTitle from 'react-document-title';

export default React.createClass({
	render() {
		return (
			<div className='Home'>
				<DocTitle title='Home Page'/>
				<Hero/>
			</div>
		);
	},
});
