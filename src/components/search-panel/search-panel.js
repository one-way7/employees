import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}

	onUpdateTerm = e => {
		const value = e.target.value;
		this.setState({ term: value });
		this.props.onUpdateSearch(value);
	};

	render() {
		return (
			<input
				type='text'
				className='form-control search-input'
				placeholder='Найти сотрудника'
				value={this.state.term}
				onChange={this.onUpdateTerm}
			/>
		);
	}
}

export default SearchPanel;
