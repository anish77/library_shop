import React from 'react'
//import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HomePage } from './pages/home-page'
import { Header } from './components/header'
import { OrderPage } from './pages/order-page'
import { Body } from './components/body'
import { store } from './redax'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Body />
                <div className='section-title'>
                  <h2>our books</h2>
                </div>
                    <HomePage />
            </Route>
            <Route exact path="/order">
              <OrderPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App


