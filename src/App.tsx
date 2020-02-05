import React from 'react'
import Header from './components/Header'
import Main from './components/Main/Main'
import { Provider } from 'react-redux'
import { store } from './store'
import { Strings } from './enums/strings';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header title={Strings.header}/>
      <Main />
    </Provider>
  );
};

export default App;
