import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { Strings } from './enums/strings'
import HeaderContainer from './containers/HeaderContainer'
import { BrowserRouter } from 'react-router-dom'
import Content from './components/Content'
import Nav from './components/Nav'

const App: React.FC = () => {
  // {'teest'}
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderContainer title={Strings.header} />
        <Nav />
        <Content />
      </BrowserRouter>
    </Provider>
  )
}

export default App
