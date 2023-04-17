import { Component } from 'react';
import nextId from 'react-id-generator';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'John S.', salary: 1200, increase: false, rise: false, id: 1 },
				{ name: 'Sam J.', salary: 2300, increase: false, rise: false, id: 2 },
				{ name: 'Matt B.', salary: 1950, increase: false, rise: false, id: 3 },
			],
			term: '',
			filter: 'all',
		};
	}

	addEmployee = (name, salary) => {
		if (!name.length || !salary.length) return;

		this.setState(({ data }) => ({
			data: [
				...data,
				{
					name: name,
					salary: +salary,
					increase: false,
					rise: false,
					id: nextId(),
				},
			],
		}));
	};

	removeEmployee = id => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id),
			};
		});
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}

				return item;
			}),
		}));
	};

	searchEmp = (data, pattern) => {
		if (pattern.length === 0) return data;

		return data.filter(item => {
			return item['name'].toLowerCase().indexOf(pattern.toLowerCase()) > -1;
		});
	};

	onUpdateSearch = term => {
		this.setState({ term });
	};

	filterPost = (data, filter) => {
		switch (filter) {
			case 'rise': {
				return data.filter(item => item['rise']);
			}
			case 'salary': {
				return data.filter(item => item['salary'] > 1000);
			}
			default: {
				return data;
			}
		}
	};

	onFilterSelect = filter => {
		this.setState({ filter });
	};

	render() {
		const { data, term, filter } = this.state;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);

		return (
			<div className='app'>
				<AppInfo numberOfEmployees={data} />
				<div className='search-panel'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.removeEmployee}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addEmployee} />
			</div>
		);
	}
}

export default App;
