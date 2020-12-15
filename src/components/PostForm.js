import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

class PostForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			body: '',
		}
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = e => {
		e.preventDefault()

		const post = {
			title: this.state.title,
			body: this.state.body,
		}

		this.props.createPost(post)
	}

	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<hr />
				<form onSubmit={this.onSubmit}>
					<div>
						<label htmlFor=''>Title: </label>
						<br />
						<input
							type='text'
							name='title'
							value={this.state.title}
							onChange={this.onChange}
						/>
					</div>
					<br />
					<div>
						<label htmlFor=''>Body: </label>
						<br />
						<input
							type='text'
							name='body'
							value={this.state.body}
							onChange={this.onChange}
						/>
					</div>

					<button value='submit'>Send</button>
				</form>
			</div>
		)
	}
}

export default connect(null, { createPost })(PostForm)
