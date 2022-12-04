/* eslint-disable no-useless-constructor */
import { Component } from "react";
import './previewer.css'

class Previewer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div id="previewer">
            <div className="header">Previewer</div>
            <div id="preview">
                {this.props.input}
            </div>
        </div>
        );
    }
}

export default Previewer;