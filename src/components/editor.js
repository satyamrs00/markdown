import { Component } from "react";
import './editor.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";

class Editor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.updateInput(event.target.value);
    }
    render(){
        return (
            <div id="editor-wrapper">
                <div className="header">
                    <FontAwesomeIcon icon={faFreeCodeCamp} />
                    Editor
                    <FontAwesomeIcon icon={faArrowsAlt} className="expand" />
                </div>
                <textarea id="editor" value={this.props.input} onChange={this.handleChange} />
            </div>
        )
    }
}

export default Editor;