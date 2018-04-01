import React, {Component} from 'react';
import './Content.css';

const dataAPI = [];
class Content extends Component {

	constructor() {
	    super();
		
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
		if (dataAPI[0] === undefined) return ''
			else return dataAPI[this.props.cont]
	}
	
	render() {

		let funcOnChangeBuy = () => {
			let elemInput = document.getElementById('inputBuy');
			let elemOutput = document.getElementById('outputBuy');
			let result;
			try{
				result = (Math.round(dataAPI[this.props.cont].buy * elemInput.value*100))/100;

				elemOutput.innerHTML = result;

				if(isNaN(result) || result < 0){
					elemOutput.innerHTML = 'Please, enter a positive numeric value';
				}
			}
			catch(e){
				console.log('undef')
			}
		}

		let funcOnChangeSale = () => {
			let elemInput = document.getElementById('inputSale');
			let elemOutput = document.getElementById('outputSale');
			let result;
			try{
				result = (Math.round(dataAPI[this.props.cont].sale * elemInput.value*100))/100;
				elemOutput.innerHTML = result;

				if(isNaN(result) || result < 0){
					elemOutput.innerHTML = 'Please, enter a positive numeric value';
				}
			}
			catch(e){
				
			}
		}
			
		let nowDate = new Date();
		let valDate = nowDate.getDate() + '.' + (nowDate.getMonth()+1)+ '.' + nowDate.getFullYear();
		
		return (
			<div className = 'content'>

			{funcOnChangeBuy()}
			{funcOnChangeSale()}
				<div className = 'block'>
					<div>BUY: <br></br>{this.funcContentText().buy}</div>
					<input id = 'inputBuy' type = 'text' placeholder = 'Enter the amount for buy' 
						   onChange = {funcOnChangeBuy} >
					</input>

					<div id = 'outputBuy'>
					</div>
				</div>

				<div className = 'block'>
					<div>SALE: <br></br>{this.funcContentText().sale}</div>
					<input id = 'inputSale' type = 'text' placeholder = 'Enter the amount for sale' 
						   onChange = {funcOnChangeSale}>
					</input>
					<div id = 'outputSale'>
					</div>
				</div>

				<footer>
					Exchange rate as of {valDate}
				</footer>
			</div>
		)
	}

}

export default Content;