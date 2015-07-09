import React from 'react';
import DocTitle from 'react-document-title';

const html = `
	<h1>About</h1>
	<hr/>
	<p>When visiting the site, the user shouldn't be downloading the entire site on first-visit, but the application that powers the site. Static content, like the text for this about page, will probably be moved into a database at some point in the future to get it out of the application.</p>
	<p>My preference would be for static content to be marked up as plainly as possible, using element styles for presentation instead of classes.  My goal for the future is that this content will be maintained through a WYSIWYG editor, rather than writing markup through a text-editor. React allows you to insert already marked-up content using the <a href='https://facebook.github.io/react/tips/dangerously-set-inner-html.html'>dangerouslySetInnerHTML</a> property, which this page is doing.</p>
`;

export default React.createClass({
	render() {
		return (
			<div className='About'>
				<DocTitle title='About Us'/>
				<div dangerouslySetInnerHTML={{__html: html}}/>
			</div>
		);
	}
});