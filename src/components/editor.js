import { Component } from "react";
import './editor.css'

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
                    Editor
                </div>
                <textarea id="editor" value={this.props.input} onChange={this.handleChange} />
            </div>
        )
    }
}

export default Editor;