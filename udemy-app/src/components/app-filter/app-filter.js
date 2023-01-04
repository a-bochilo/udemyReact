import "./app-filter.css";

const AppFilter = ({ setFilter, filter }) => {
    const btnsData = [
        { name: "all", label: "All employees" },
        { name: "rise", label: "To promotion" },
        { name: "hightSalary", label: "Salary about $1000" },
    ];

    return (
        <div className="btn-group">
            {btnsData.map(({ name, label }) => (
                <button
                    key={name}
                    type="button"
                    onClick={() => setFilter(name)}
                    className={
                        "btn" +
                        (filter === name ? " btn-light" : " btn-outline-light")
                    }
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default AppFilter;
