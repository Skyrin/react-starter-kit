import React from 'react';
import DocTitle from 'react-document-title';

export default React.createClass({
	handleSubmit(e) {
		e.preventDefault();
	},
	render() {
		return (
			<div className='Contact'>
				<DocTitle title='Contact Us'/>
				<form onSubmit={this.handleSubmit}>
					<label>
						<div>Name</div>
						<input name='name' type='text' required/>
					</label>
					<label>
						<div>Email</div>
						<input name='email' type='email' required/>
					</label>
					<label>
						<div>Subject</div>
						<input name='subject' type='text' required/>
					</label>
					<label>
						<div>Message</div>
						<textarea name='message' required/>
					</label>
					<button>Submit</button>
				</form>
			</div>
		);
	}
});