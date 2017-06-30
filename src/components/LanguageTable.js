import React from 'react';
/*import translationStore from '../store/store'
*/
class LanguageTable extends React.Component {


  renderHeader(){
    return(
      <thead>
        <tr>
        <th>Key</th>
          {this.props.languageTable.map((language, key) => <th key={key}>{language.languageName}</th>)}
        </tr>
      </thead>
    )
  }

  renderBody(){
    let mainLanguage = this.props.languageTable[0];
    return(
      <tbody>
      {
        Object.keys(mainLanguage.messages).map( (key, index) => {
          return (
            <tr key={index}>
              <td>{key}</td>
              {this.props.languageTable.map((language, index) =>  <td key={index}><input value={language.messages[key]}/></td>)}
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