import "./employees-list-item.css";

const EmployeesListItem = ({
    name,
    salary,
    onDelete,
    onToggleProp,
    increase,
    rise,
    setSalary,
}) => {
    return (
        <li
            className={
                "list-group-item d-flex justify-content-between" +
                (increase ? " increase" : "") +
                (rise ? " like" : "")
            }
        >
            <span
                className="list-group-item-label"
                onClick={() => onToggleProp("rise")}
            >
                {name}
            </span>
            <input
                type="text"
                className="list-group-item-input"
                defaultValue={`$${salary}`}
                onBlur={(e) => {
                    const value = e.target.value.match(/\d/g).join("");
                    setSalary(value);
                    e.target.value = `$${value}`;
                }}
            />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-cookie btn-sm "
                    onClick={() => onToggleProp("increase")}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                    type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeesListItem;
