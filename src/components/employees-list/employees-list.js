import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete }) => {
	const elements = data.map(item => {
		const { id, ...data } = item;
		return (
			<EmployeesListItem key={id} {...data} onDelete={() => onDelete(id)} />
		);
	});

	return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeesList;
