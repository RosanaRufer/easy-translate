import React from 'react';
import translationStore from '../store/store';
import LanguageTable from './LanguageTable';

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
            <LanguageTable languageTable={this.state.languageCardSet} />
      </div>
    )
  }
}

export default App;
 