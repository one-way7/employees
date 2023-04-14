import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
	const data = [
		{ name: 'John S.', salary: 1200, increase: false, id: 1 },
		{ name: 'Sam J.', salary: 2300, increase: false, id: 2 },
		{ name: 'Matt B.', salary: 1950, increase: true, id: 3 },
	];

	return (
		<div className='app'>
			<AppInfo />
			<div className='search-panel'>
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList data={data} />
			<EmployeesAddForm />
			<div></div>
		</div>
	);
}

export default App;
