import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var helper = require('./helper');
/*function checkJsonValidity(json) {
	try{
		JSON.parse(json);
	}
	catch() {
		return false;
	}
	return true;
}*/
class App extends Component {
	constructor() {
		super();
		this.state = {
			OutputText: 'Output here...'
		}
	}
	handleChange(element) {
		var convertedOutput = '';
		var value = element.target.value;
		if(value.trim() == "") {
			convertedOutput = 'Output here...';
		}
		else {
			convertedOutput = helper.convert(value);
		}
		this.setState({OutputText: convertedOutput});
		console.log(convertedOutput);
	}
	
  render() {
    return (
  <div className="App">
	<header className="App-header">
		<div id="logoContainer" className="clearfix">
			<img src={logo} id="logo" className="App-logo headerItem" alt="logo" />
		</div>
	  <h1 className="App-title headerItem">JSON output converter</h1>
	</header>
	{/*<p className="App-intro">
	  To get started, edit <code>src/App.js</code> and save to reload.
	</p>*/}
		<div className="converterContainer clearfix">
			<div className="converterItem left input">
				<div className="converterItemTitle left">
					Input
				</div>
				<div className="converterItemInner input">
					<textarea id="input"  placeholder="Input here..." onChange={this.handleChange.bind(this)}></textarea>
				</div>
			</div>
			<div className="converterItem right output">
				<div className="converterItemTitle right">
					Output
				</div>
				<div className="converterItemInner output" id="output">
					{this.state.OutputText}
				</div>
			</div>
		</div>
      </div>
    );
  }
}

export default App;
