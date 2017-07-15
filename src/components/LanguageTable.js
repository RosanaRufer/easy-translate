import React from 'react';
import LanguageValueHeaderCell from './LanguageValueHeaderCell';
import LanguageValueBodyCell from './LanguageValueBodyCell';
import translationStore from '../store/store';

/*    let span = (language.isMainLanguage) ?  <span className="tag is-primary" title="Default language">D</span> :  '';*/
class LanguageTable extends React.Component {

  renderHeader(){
    return(
      <thead>
        <tr>
        <th>Key</th>
        { 
          this.props.languageTable
          .map((language, langIndex) => {
            return <LanguageValueHeaderCell key={langIndex} 
                                            langIndex={langIndex} 
                                            language={language}/>
          })
        }
        <th>Add Language</th>
        </tr>
      </thead>
    )
  }

  renderMessageValues(messageKey, keyIndex){
    return this.props.languageTable.map((language, langIndex) => <LanguageValueBodyCell key={langIndex} langIndex={langIndex} language={language} messageKey={messageKey} keyIndex={keyIndex}></LanguageValueBodyCell>)
  }

  onAddLanguageClicked(event){
    translationStore.dispatch({ type: 'ADD_LANGUAGE'});
  }

  renderBody(){
    let mainLanguage = this.props.languageTable[0];
    let keys = Object.keys(mainLanguage.messages);
    return(
      <tbody>
      {
        keys.map( (messageKey, keyIndex) => {
          let addLanguageCell = (keyIndex===0) ? <td rowSpan={keys.length} className="add-language-cell"><button className="button is-primary is-outlined is-large" onClick={(event)=> this.onAddLanguageClicked(event)}>+</button></td> : null;
          return (
            <tr key={keyIndex}>
              <td className="message-key-cell">{messageKey}</td>
              {
                this.renderMessageValues(messageKey, keyIndex)
              }
              {addLanguageCell}
            </tr>
          )
        })
      }
      </tbody>
    )
  }

  render() {
    return (
      <div>
        <table className="table">
          {this.renderHeader()}
          {this.renderBody()}
        </table>
      </div>
    )
  }
}

export default LanguageTable;