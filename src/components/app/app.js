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

	onToggleIncrease = id => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, increase: !item.increase };
				}

				return item;
			}),
		}));
	};

	onToggleRise = id => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, rise: !item.rise };
				}

				return item;
			}),
		}));
	};

	render() {
		const { data } = this.state;

		return (
			<div className='app'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={data}
					onDelete={this.removeEmployee}
					onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleRise}
				/>
				<EmployeesAddForm onAdd={this.addEmployee} />
			</div>
		);
	}
}

export default App;
