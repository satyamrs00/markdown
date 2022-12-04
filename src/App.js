import React from 'react';
import './App.css';
import Editor from './components/editor';
import Previewer from './components/previewer';
import { connect } from 'react-redux';
import inputCreator from './app/actionCreators';
import { viewCreator } from './app/actionCreators';
import { EXPAND_EDITOR, EXPAND_PREVIEWER, NORMALIZE } from './app/actions';


export class App extends React.Component {
    render (){
        return (
			<div className="App">
				<Editor input={this.props.input} updateInput={this.props.updateInput} expandEditor={this.props.expandEditor} normalize={this.props.normalize} view={this.props.view} />
				<Previewer input={this.props.input} expandPreviewer={this.props.expandPreviewer} normalize={this.props.normalize} view={this.props.view} />
			</div>
        );  
    }
}

const mapStateToProps = (state) => {
    return {
        input: state.input,
        view: state.view
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateInput: (input) => {
            dispatch(inputCreator(input))
        },
        expandEditor: () => {
            dispatch(viewCreator(EXPAND_EDITOR))
        },
        expandPreviewer: () => {
            dispatch(viewCreator(EXPAND_PREVIEWER))
        },
        normalize: () => {
            dispatch(viewCreator(NORMALIZE))
        }
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;