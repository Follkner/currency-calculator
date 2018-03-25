import React, {Component} from 'react';
import './Navigator.css';


const NAMES = [
  {ccy:"USD" , baseccy:"UAH" },
  {ccy:"EUR" , baseccy:"UAH" },
  {ccy:"RUR" , baseccy:"UAH" },
  {ccy:"BTC" , baseccy:"USD" },
]

class Navigator extends Component {

  constructor() {
      super();
      this.state = {
        activePlace : null,

      };
  }

  numberFunc(){
    return this.state.activePlace;
  }

	render() {
		return (
		
		<div className="navigator nav">
      		<ul>

            {NAMES.map((place, index) => (
              <li className = 'menuButton'
                key={index} 
                onClick={() => {

                  let that = this;
                  this.setState({ activePlace: index });

                  setTimeout(function(){
                    that.props.update(that.numberFunc());
                  },0)

                  for(let i =0; i < document.getElementsByClassName('menuButton').length; i++){
                    document.getElementsByClassName('menuButton')[i].classList.remove('active');
                  }
                  document.getElementsByClassName('menuButton')[index].classList.add('active');
       
                }}
              >
                {place.ccy} - {place.baseccy}
              </li>
            ))}

		       
      		</ul>
    </div>
		)
	}

}

export default Navigator;