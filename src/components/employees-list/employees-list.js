import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data }) => {
	const elements = data.map(item => {
		const { id, ...data } = item;
		return <EmployeesListItem key={id} {...data} />;
	});

	return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeesList;
