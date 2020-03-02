import { combineReducers } from 'redux'
import songChangeReducer from './songChangeReducer'
import lyricChangeReducer from './lyricChangeReducer'

export const rootReducer = combineReducers({
    currentSongId: songChangeReducer,
    songsById: lyricChangeReducer
})
