import React from 'react';
import LanguageValueHeaderCell from './LanguageValueHeaderCell';
import LanguageValueBodyCell from './LanguageValueBodyCell';

/*    let span = (language.isMainLanguage) ?  <span className="tag is-primary" title="Default language">D</span> :  '';*/
class LanguageTable extends React.Component {

  renderHeader(){
    return(
      <thead>
        <tr>
        <th>Key</th>
        {this.props.languageTable.map((language, langIndex) => <LanguageValueHeaderCell key={langIndex} langIndex={langIndex} language={language}></LanguageValueHeaderCell>)}
        </tr>
      </thead>
    )
  }

  renderMessageValues(messageKey, keyIndex){
    return this.props.languageTable.map((language, langIndex) => <LanguageValueBodyCell key={langIndex} langIndex={langIndex} language={language} messageKey={messageKey} keyIndex={keyIndex}></LanguageValueBodyCell>)
  }

  renderBody(){
    let mainLanguage = this.props.languageTable[0];
    return(
      <tbody>
      {
        Object.keys(mainLanguage.messages).map( (messageKey, keyIndex) => {
          return (
            <tr key={keyIndex}>
              <td className="message-key-cell">{messageKey}</td>
              {
                this.renderMessageValues(messageKey, keyIndex)
              }
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