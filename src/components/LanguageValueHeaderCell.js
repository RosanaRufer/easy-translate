import React from 'react';
import translationStore from '../store/store';

class LanguageValueHeaderCell extends React.Component {

  toggleRaw(event){
    const langIndex = this.props.langIndex;
    translationStore.dispatch({ type: 'TOGGLE_SHOW_RAW', langIndex:  langIndex});
  }

  render() {
  	const langIndex = this.props.langIndex;
  	const langName = this.props.language.languageName;
  	const buttonText = (this.props.language.showRaw) ? 'JSON' : 'JSON';
    return (
      <th key={langIndex}>
       <div>
        {langName}
        <button className="button is-primary" 
        		onClick={(event,langIndex)=>{this.toggleRaw(event, langIndex)}}>
        		{buttonText}
        </button>
        </div>
      </th>
    )
  }
}

export default LanguageValueHeaderCell;