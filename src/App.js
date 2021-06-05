import React from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
