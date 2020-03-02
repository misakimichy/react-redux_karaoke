import React from 'react'
import './App.css'
import SongDisplay from './SongDisplay'
import SongList from './SongList'
import Header from './Header'

const App = () => {
  return (
    <div>
      <Header />
      <br/>
      <SongList />
      <hr/>
      <SongDisplay />
    </div>
  )
}

export default App
