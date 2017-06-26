import React from 'react';
import LanguageCard from './LanguageCard';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
            <div>App</div>
            <LanguageCard></LanguageCard>
      </div>
    )
  }
}

export default App;
