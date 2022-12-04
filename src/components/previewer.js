/* eslint-disable no-useless-constructor */
import { Component } from "react";
import './previewer.css'
import {marked} from 'marked';

class Previewer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div id="previewer">
            <div className="header">Previewer</div>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.props.input)}} />
        </div>
        );
    }
}

export default Previewer;