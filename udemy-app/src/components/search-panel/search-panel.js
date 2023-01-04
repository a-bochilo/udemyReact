import { Component } from "react";

import "./search-panel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
        };
    }

    onSearcInputChange = (e) => {
        const term = e.target.value;
        this.setState({ term: term });
        this.props.onSearcInputChange(term);
    };

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Find employee"
                value={this.state.term}
                onChange={this.onSearcInputChange}
            />
        );
    }
}

export default SearchPanel;
