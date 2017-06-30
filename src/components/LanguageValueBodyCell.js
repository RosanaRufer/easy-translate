import React from 'react';
import translationStore from '../store/store';

class LanguageValueBodyCell extends React.Component {

  onChangeHandler(event, key){
    translationStore.dispatch({ type: 'SET_MESSAGE_VALUE', langIndex:  this.props.langIndex, key: key, value: event.target.value});
  }

  renderMessageValueCell(language, langIndex, messageKey, keyIndex){
    if(language.showRaw && keyIndex === 0){
      let body = document.querySelectorAll("tbody")[0];
      let textarea = document.querySelectorAll("textarea")[0];
      let cell = document.querySelectorAll(`#${messageKey}`)[0];

      var paddingRight = window.getComputedStyle(cell,null).getPropertyValue("padding-right").replace('px', '');
      var paddingBottom = window.getComputedStyle(cell,null).getPropertyValue("padding-bottom").replace('px', '');
    

      let cellWidth = (cell.clientWidth - 2*parseInt(paddingRight))+'px';
      let bodyHeight = (body.clientHeight - 2*parseInt(paddingBottom) )+'px';

      return (<td key={`${langIndex}-${keyIndex}`} id={`${messageKey}`}>
           <textarea style={{height: bodyHeight, position: 'absolute', width: cellWidth, background: 'white'}} className="raw-json" 
           value={JSON.stringify(language.messages, null, 2) }
           readOnly>
     </textarea>
      </td>)
    } else {
      return (
              <td key={`${langIndex}-${keyIndex}`} id={`${messageKey}`}>
                <textarea value={language.messages[messageKey]}  
                          onChange={(event)=>this.onChangeHandler(event, this.props.messageKey)}/>
              </td>
              )
    }
  }

  render() {
    return(
      this.renderMessageValueCell(this.props.language, this.props.langIndex, this.props.messageKey, this.props.keyIndex)
    )
  }
}

export default LanguageValueBodyCell;