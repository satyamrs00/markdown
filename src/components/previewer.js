/* eslint-disable no-useless-constructor */
import { Component } from "react";
import './previewer.css'
import {marked} from 'marked';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faArrowsAlt, faCompress } from "@fortawesome/free-solid-svg-icons";

class Previewer extends Component {
    constructor(props) {
        super(props);
        marked.setOptions({
            breaks: true,
            gfm: true,
        })
    }
    render() {
        const expandedStyles = {"minHeight": "95vh", "display": "flex"}
        const normalStyles = {"minHeight": "200px", "display": "flex"}
        const removedStyles = {"display": "none"}

        return (
        <div id="previewer"
        style={this.props.view === 'PREVIEWER' ? expandedStyles : this.props.view === 'EDITOR' ? removedStyles : normalStyles}
        >
            <div className="header">
                <FontAwesomeIcon icon={faFreeCodeCamp} />
                Previewer
                <FontAwesomeIcon 
                onClick={this.props.view === 'PREVIEWER' ? this.props.normalize : this.props.expandPreviewer} 
                icon={this.props.view === 'PREVIEWER' ? faCompress : faArrowsAlt}
                className="expand" 
                />
            </div>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.props.input)}} />
        </div>
        );
    }
}

export default Previewer;