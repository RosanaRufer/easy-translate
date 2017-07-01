import React from 'react';

class Messages extends React.Component {

  render() {
    return (
     <textarea className="raw-json" 
     		   value={JSON.stringify(this.props.messages, null, 2) }
     		   readOnly>
     </textarea>
    )
  }
}

export default Messages;