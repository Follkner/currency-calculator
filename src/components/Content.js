import React, {Component} from 'react';
import './Content.css';

const dataAPI = [];
class Content extends Component {

	constructor() {
	    super();
	    this.state = {
	    	index : null,
	    };		
    }

	componentWillMount(){
		const URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
			
		fetch(URL)
  			.then(function (response) {
  				//console.log(response.json)
    			return response.json();
    		})
    		.then(function (data) {
      			
      			for(let i = 0; i < data.length; i++){
      				dataAPI.push(data[i]);
      			}
      						
    		})

	}
	
	funcContentText(){
		if (dataAPI[1] === undefined) return ''
			else return dataAPI[this.props.cont]
	}

	render() {

		return (
			<div className = 'content'>
			
				<h2>{'Buy: '}</h2>
				
				{this.funcContentText().buy}

				<h2>{'Sale: '}</h2>
				{this.funcContentText().sale}
			
			</div>
		)
	}

}

export default Content;