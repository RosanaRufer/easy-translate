import React from 'react';
import LanguageCardSet from './LanguageCardSet';
import translationStore from '../store/store';

class App extends React.Component {

  state = {
    languageCardSet: {}
  }

  componentWillMount() {
    translationStore.subscribe(()=>{
      this.setState(translationStore.getState());  
    });
    this.setState(translationStore.getState());  
  }


  render() {
    return (
      <div>
            <h1 className="title">Easily translate your language JSON</h1>
            <LanguageCardSet languageCardSet={this.state.languageCardSet} />
      </div>
    )
  }
}

export default App;
