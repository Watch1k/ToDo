import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { Provider } from 'react-redux'
import { store } from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header/>
      <Main />
    </Provider>
  );
};

export default App;
