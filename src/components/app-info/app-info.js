import './app-info.css';

const AppInfo = ({ numberOfEmployees }) => {
	const countEmployeesWithBonus = () => {
		return numberOfEmployees.filter(item => item.increase).length;
	};

	return (
		<div className='app-info'>
			<h1>Учет сотрудников в компании N</h1>
			<h2>Общее число сотрудников: {numberOfEmployees.length}</h2>
			<h2>Премию получат: {countEmployeesWithBonus()}</h2>
		</div>
	);
};

export default AppInfo;
