import React from 'react';
import Header from '../header/header.js';
import MainContent from '../../containers/mainContent/mainContent.js'

const App = () => (
  <div>
    <header>
      <Header/>
    </header>
    <main>
      <MainContent/>
    </main>
  </div>
);

export default App;
