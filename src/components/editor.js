import { Component } from "react";
import './editor.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faArrowsAlt, faCompress } from "@fortawesome/free-solid-svg-icons";

class Editor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.updateInput(event.target.value);
    }
    render(){
        const expandedStyles = {"minHeight": "95vh", "display": "flex"}
        const normalStyles = {"minHeight": "200px", "display": "flex"}
        const removedStyles = {"display": "none"}

        return (
            <div id="editor-wrapper"
            style={this.props.view === 'EDITOR' ? expandedStyles : this.props.view === 'PREVIEWER' ? removedStyles : normalStyles} 
            >
                <div className="header">
                    <FontAwesomeIcon icon={faFreeCodeCamp} />
                    Editor
                    <FontAwesomeIcon 
                    onClick={this.props.view === 'EDITOR' ? this.props.normalize : this.props.expandEditor} 
                    icon={this.props.view === 'EDITOR' ? faCompress : faArrowsAlt}
                    className="expand" 
                    />
                </div>
                <textarea id="editor" value={this.props.input} onChange={this.handleChange} />
            </div>
        )
    }
}

export default Editor;