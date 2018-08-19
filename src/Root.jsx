import React, {Component} from 'react';
import download from './images/download.jpg';

export default class Root extends Component{
	render(){
		return (
			<div>
				<img src={download} />
				<h1>Hello Worldddd</h1>
			</div>
		);
	}
}