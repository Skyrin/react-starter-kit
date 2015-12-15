import React from 'react';
import Header from '../Header/';
import DocTitle from 'react-document-title';

export default React.createClass({
	handleKeyDown(e) {
		// Scheme to only show the focus outline when the user has used keyboard navigation to focus an element.
		if (e.key === 'Tab') {
			setTimeout(()=>{
				if (this.activeElement !== document.activeElement) {
					if (this.activeElement) {
						this.activeElement.removeAttribute('data-focused');
					}
					if (document.activeElement) {
						this.activeElement = document.activeElement;
						this.activeElement.setAttribute('data-focused', true);
					}
				}
			}, 0);
		}
	},
	render() {
		return (
			<div className='Root' onKeyDown={this.handleKeyDown}>
				<DocTitle title='Default Page Title'/>
				<Header/>
				<div className='Root_main'>
					{this.props.children}
				</div>
			</div>
		);
	},
});