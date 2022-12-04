/* eslint-disable no-useless-constructor */
import { Component } from "react";
import './previewer.css'
import {marked} from 'marked';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";

class Previewer extends Component {
    constructor(props) {
        super(props);
        marked.setOptions({
            breaks: true,
            gfm: true,
        })
    }
    render() {
        return (
        <div id="previewer">
            <div className="header">
                <FontAwesomeIcon icon={faFreeCodeCamp} />
                Previewer
                <FontAwesomeIcon icon={faArrowsAlt} className="expand" />
            </div>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.props.input)}} />
        </div>
        );
    }
}

export default Previewer;