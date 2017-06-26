import React from 'react';
import LanguageCardSet from './LanguageCardSet';


class App extends React.Component {

  state = {
    languageCardSet: {}
  }

  constructor() {
    super();
    this.setMessageValue = this.setMessageValue.bind(this);
  }

  setMessageValue(langIndex, key, value){
    var newLanguageCardSet = this.state.languageCardSet;
    newLanguageCardSet[langIndex].messages[key]=value;
    this.setState({languageCardSet: newLanguageCardSet});
  }

  componentWillMount() {
    // Create dummy data:
    let english = {
      isMainLanguage: true,
      languageName: "English (en-GB)",
      messages: { USER_NAME_LABEL: "User name", PASSWORD_LABEL: "Password", LOG_IN_BUTTON: "Log in"},
     
    };
    let spanish = {
      isMainLanguage: false,
      languageName: "Español (es-ES)",
      messages: { USER_NAME_LABEL: "Usuario", PASSWORD_LABEL: "Contraseña", LOG_IN_BUTTON: "Entrar"},
     
    }
    let languageCardSet = [];
    languageCardSet.push(english);
    languageCardSet.push(spanish);

    this.setState({languageCardSet});
  }


  render() {
    return (
      <div>
            <h1>Easily translate your language JSON</h1>
            <LanguageCardSet languageCardSet={this.state.languageCardSet} 
                             onMessageValueChange={this.setMessageValue}/>
      </div>
    )
  }
}

export default App;
