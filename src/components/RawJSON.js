import React from 'react';

class Messages extends React.Component {

  render() {
    return (
     <textarea className="raw-json">
     	{JSON.stringify(this.props.messages, null, 2) }
     </textarea>
    )
  }
}

export default Messages;