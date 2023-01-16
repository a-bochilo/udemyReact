import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp, setSalary }) => {
    return (
        <ul className="app-list list-group">
            {data.map(({ id, ...employeeData }) => (
                <EmployeesListItem
                    key={id}
                    {...employeeData}
                    onDelete={() => onDelete(id)}
                    onToggleProp={onToggleProp.bind(undefined, id)}
                    setSalary={setSalary.bind(undefined, id)}
                />
            ))}
        </ul>
    );
};

export default EmployeesList;
