import React from 'react';
import './App.css';
import Editor from './components/editor';
import Previewer from './components/previewer';
import { connect } from 'react-redux';
import inputCreator from './app/actionCreators';


export class App extends React.Component {
    render (){
        return (
			<div className="App">
				<Editor input={this.props.input} updateInput={this.props.updateInput} />
				<Previewer input={this.props.input}/>
			</div>
        );  
    }
}

const mapStateToProps = (state) => {
    return {
        input: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateInput: (input) => {
            dispatch(inputCreator(input))
        }
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;