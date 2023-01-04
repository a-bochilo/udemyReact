import "./app-info.css";

const AppInfo = ({ totalNumberOfEmployees, numberOfEmployeesIncrease }) => {
    return (
        <div className="app-info">
            <h1>Employees accounting in N company</h1>
            <h2>Total number of employees: {totalNumberOfEmployees}</h2>
            <h2>Bonus will be recieved by: {numberOfEmployeesIncrease}</h2>
        </div>
    );
};

export default AppInfo;
