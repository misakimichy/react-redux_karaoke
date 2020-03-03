import constants from '../constants'
const { initialState, types } = constants

const lyricChangeReducer = (state = initialState.songsById, action) => {
    let newSongsByIdEntry
    let newSongsByIdStatesSlice
    switch(action.type) {
        case types.NEXT_LYRIC :
            const newArrayPosition = state[action.currentSongId].arrayPosition + 1
            newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
                arrayPosition: newArrayPosition
            })
            newSongsByIdStatesSlice = Object.assign({}, state, {
                [action.currentSongId]: newSongsByIdEntry
            })
            return newSongsByIdStatesSlice

        case types.RESTART_SONG :
            newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
                arrayPosition: 0
            })
            newSongsByIdStatesSlice = Object.assign({}, state, {
                [action.currentSongId]: newSongsByIdEntry
            })
            return newSongsByIdStatesSlice

        case types.REQUEST_SONG :
            newSongsByIdEntry = {
                isFetching: true,
                title: action.title,
                songId: action.songId
            }
            newSongsByIdStatesSlice = Object.assign({}, state, {
                [action.songId]: newSongsByIdEntry
            })
            return newSongsByIdStatesSlice

        case types.RECEIVE_SONG :
            newSongsByIdEntry = Object.assign({}, state[action.songId], {
                isFetching: false,
                receivedAt: action.receivedAt,
                title: action.title,
                artist: action.artist,
                songArray: action.songArray,
                arrayPosition: 0,
                songId: action.songId
            })
            newSongsByIdStatesSlice = Object.assign({}, state, {
                [action.songId]: newSongsByIdEntry
            })
            return newSongsByIdStatesSlice
            
        default :
            return state
    }
}

export default lyricChangeReducer