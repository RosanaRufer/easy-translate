import React from 'react';
import translationStore from '../store/store';

class LanguageValueHeaderCell extends React.Component {

  toggleRaw(event){
    const langIndex = this.props.langIndex;
    translationStore.dispatch({ type: 'TOGGLE_SHOW_RAW', langIndex:  langIndex});
  }

  editLanguageName(event){
    const langIndex = this.props.langIndex;
    translationStore.dispatch({ type: 'CHANGE_LANGUAGE_NAME', langIndex:  langIndex, newLangName: event.target.value});
  }

  removeLanguage(event){
    const langIndex = this.props.langIndex;
    translationStore.dispatch({ type: 'REMOVE_LANGUAGE', langIndex:  langIndex});
  }

  render() {
  	const langIndex = this.props.langIndex;
  	const langName = this.props.language.name;
  	const buttonText = (this.props.language.showRaw) ? 'JSON' : 'JSON';
    const removeLangButton =  (this.props.langIndex !==0) ? <button className="button is-danger language-card-header-button" onClick={(event)=>{this.removeLanguage(event)}}> X </button> : null;
    return (
      <th key={langIndex}>
       <div>
        <input className="no-appearance editable-header" value={langName} onChange={event => this.editLanguageName(event)}></input>
        <button className="button is-primary language-card-header-button" 
        		onClick={(event,langIndex)=>{this.toggleRaw(event, langIndex)}}>
        		{buttonText}
        </button>
        {removeLangButton}
        </div>
      </th>
    )
  }
}

export default LanguageValueHeaderCell;