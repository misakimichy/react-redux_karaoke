import React from 'react'

const SongSearch = () => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        console.log('SEARCHED TITLE:')
        console.log(input.value.trim())
        input.value = ''
      }}>
        <input placeholder="Song Title" ref={node => {
          input = node
        }}></input>
        <button>Search</button>
      </form>
    </div>
  )
}

export default SongSearch