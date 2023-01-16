import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employess-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    name: "John C.",
                    salary: 800,
                    increase: false,
                    rise: true,
                },
                {
                    id: 2,
                    name: "Alex B.",
                    salary: 1500,
                    increase: true,
                    rise: false,
                },
                {
                    id: 3,
                    name: "Walter W.",
                    salary: 4000,
                    increase: false,
                    rise: false,
                },
            ],
            term: "",
            filter: "all",
        };
        this.nextId = this.state.data.length + 1;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter((item) => item.id !== id),
        }));
    };

    addItem = (name, salary) => {
        this.setState(({ data }) => ({
            data: [
                ...data,
                {
                    id: this.nextId++,
                    name,
                    salary,
                    increase: false,
                    rise: false,
                },
            ],
        }));
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((item) => ({
                ...item,
                [prop]: item.id === id ? !item[prop] : item[prop],
            })),
        }));
    };

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => item.name.toLowerCase().includes(term));
    };

    onSearcInputChange = (term) => {
        this.setState({ term: term });
    };

    filterEmployee = (items, filter) => {
        switch (filter) {
            case "rise":
                return items.filter((item) => item.rise);
            case "hightSalary":
                return items.filter((item) => item.salary > 1000);
            default:
                return items;
        }
    };

    setFilter = (filter) => {
        this.setState({ filter: filter });
    };

    setSalary = (id, newSalary) => {
        this.setState(({ data }) => ({
            data: data.map((item) => ({
                ...item,
                salary:
                    item.id === id
                        ? newSalary
                        : item.salary,
            })),
        }));
    };

    render() {
        const { data, term, filter } = this.state,
            totalNumberOfEmployees = data.length,
            numberOfEmployeesIncrease = data.filter(
                (item) => item.increase
            ).length,
            visibleData = this.filterEmployee(
                this.searchEmployee(data, term),
                filter
            );

        return (
            <div className="app">
                <AppInfo
                    totalNumberOfEmployees={totalNumberOfEmployees}
                    numberOfEmployeesIncrease={numberOfEmployeesIncrease}
                />
                <div className="search-panel">
                    <SearchPanel onSearcInputChange={this.onSearcInputChange} />
                    <AppFilter
                        setFilter={this.setFilter}
                        filter={this.state.filter}
                    />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    setSalary={this.setSalary}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
