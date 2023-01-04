import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
            isInvalidName: false,
            isInvalidSalary: false,
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length > 3 && this.state.salary) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: "",
                salary: "",
                isInvalidName: false,
                isInvalidSalary: false,
            });
        } else {
            if (this.state.name.length <= 3) {
                this.setState({
                    isInvalidName: true,
                });
            }
            if (!this.state.salary) {
                this.setState({
                    isInvalidSalary: true,
                });
            }
        }
    };

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className={
                            "form-control new-post label" +
                            (this.state.isInvalidName ? " is-invalid" : "")
                        }
                        placeholder="What is his name?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className={
                            "form-control new-post label" +
                            (this.state.isInvalidSalary ? " is-invalid" : "")
                        }
                        placeholder="What is his salary?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />
                    <button className="btn btn-outline-light" type="submit">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
