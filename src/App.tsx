import React from 'react'
import Main from './components/Main/Main'
import { Provider } from 'react-redux'
import { store } from './store'
import { Strings } from './enums/strings'
import HeaderContainer from './containers/HeaderContainer'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HeaderContainer title={Strings.header} />
      <Main />
    </Provider>
  )
}

export default App
