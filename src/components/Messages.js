import React from 'react';

class Messages extends React.Component {

  render() {
    return (
      <div>
        {
          Object.keys(this.props.messages)
          .map( (key, index)=> 
            <p key={index}>{key}: <input value={this.props.messages[key]}/></p>
          )
        }
      </div>
    )
  }
}

export default Messages;