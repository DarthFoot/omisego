import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var helper = require('./helper');
var beautify = require('js-beautify').js_beautify,
    fs = require('fs');
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
			convertedOutput = beautify(helper.convert(value), { indent_size: 2 });
			console.log(convertedOutput);
		}
		this.setState({OutputText: convertedOutput});
		console.log();
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
					<pre>{this.state.OutputText}</pre>
				</div>
			</div>
		</div>
      </div>
    );
  }
}

export default App;
