import React from 'react';

class Messages extends React.Component {

  onChangeHandler(event, key){
    
    this.props.onMessageValueChange(this.props.langIndex, key, event.target.value);
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