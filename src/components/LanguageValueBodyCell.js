import React from 'react';
import translationStore from '../store/store';

class LanguageValueBodyCell extends React.Component {

  onChangeHandler(event, key){
    translationStore.dispatch({ type: 'SET_MESSAGE_VALUE', langIndex:  this.props.langIndex, key: key, value: event.target.value});
  }

  renderMessageValueCell(language, langIndex, messageKey, keyIndex){
    if(language.showRaw && keyIndex === 0){
      return (
        <td key={`raw${langIndex}-${keyIndex}`} id={`raw${messageKey}`} rowSpan="3" rows="8">
           <textarea key={`raw${langIndex}-${keyIndex}`} style={{height: '160px'}}
           value={JSON.stringify(language.messages, null, 2) }
           readOnly>
          </textarea>
        </td>)
    } else {
      if(language.showRaw && keyIndex !==0){
        return null
      } else {
              return (
              <td key={`noraw${langIndex}-${keyIndex}`} id={`noraw${messageKey}`}>
                <textarea value={language.messages[messageKey]}  
                          onChange={(event)=>this.onChangeHandler(event, this.props.messageKey)}/>
              </td>
        )
      }
    }
  }

  render() {
    return(
      this.renderMessageValueCell(this.props.language, this.props.langIndex, this.props.messageKey, this.props.keyIndex)
    )
  }
}

export default LanguageValueBodyCell;