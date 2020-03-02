import { createStore } from 'redux'
import constants from "./constants"
import songChangeReducer from './reducers/songChangeReducer'
import lyricChangeReducer from './reducers/lyricChangeReducer'
import { rootReducer } from './reducers/'

describe('Karaoke App', () => {
  const { initialState, types } = constants
  const store = createStore(rootReducer, initialState)

  describe('lyricChangeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(lyricChangeReducer(initialState.songsById, { type: null })).toEqual(initialState.songsById)
    })

    it('Should update currently-displayed lyric of song', () => {
      expect(lyricChangeReducer(initialState.songsById, { type: 'NEXT_LYRIC', currentSongId: 2 })[2].arrayPosition).toEqual(initialState.songsById[2].arrayPosition + 1)
    })

    it('Should restart song', () => {
      expect(lyricChangeReducer(initialState.songsById, { type: 'RESTART_SONG', currentSongId: 1 })[1].arrayPosition).toEqual(0)
    })
  })

  describe('songChangeReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(songChangeReducer(initialState, { type: null })).toEqual(initialState)
    })

    it('Should change selectedSong.', () => {
      expect(songChangeReducer(initialState, { type: 'CHANGE_SONG', newSelectedSongId: 1 })).toEqual(1)
    })
  })

  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState)
    })

    it('Should contain logic from both reducers.', () => {
      expect(store.getState().currentSongId).toEqual(songChangeReducer(undefined, { type: null }))
      expect(store.getState().songsById).toEqual(lyricChangeReducer(undefined, { type: null }))
    })
  })

})