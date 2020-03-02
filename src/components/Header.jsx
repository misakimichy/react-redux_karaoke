import React from 'react'
import SongSearch from './SongSearch'

const Header = () => {
  return (
    <header>
      <h1>Singer</h1>
      <em>Search for a song:</em>
      <SongSearch />
    </header>
  )
}

export default Header