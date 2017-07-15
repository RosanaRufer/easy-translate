import React from 'react';
import LanguageCard from './LanguageCard';
import AddLanguageButton from './AddLanguageButton';

class LanguageCardSet extends React.Component {

  constructor(){
  	super();
  	this.readerCard = this.renderCard.bind(this);
  }	

  renderCard(card, key){
  	return(
  		<LanguageCard key={key} 
                    langIndex={key}
                    card={card} />
  	)
  }

  render() {
    return (
      <div className="language-card-set">
      	{this.props.languages.map( (card, key) => this.renderCard(card, key))}
        <AddLanguageButton/>
      </div>
    )
  }
}

export default LanguageCardSet;