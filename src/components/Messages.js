import React from 'react';
import translationStore from '../store/store'

class Messages extends React.Component {

  onChangeHandler(event, key){
    translationStore.dispatch({ type: 'SET_MESSAGE_VALUE', langIndex:  this.props.langIndex, key: key, value: event.target.value});
  }

  render() {
    return (
      <div>
        {
          Object.keys(this.props.messages)
          .map( (key, index)=> 
            <p key={index}>{key}: 
            <input value={this.props.messages[key]} 
                   onChange={(event)=>this.onChangeHandler(event, key)}/>
            </p>
          )
        }
      </div>
    )
  }
}

export default Messages;