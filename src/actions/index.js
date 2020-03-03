import v4 from 'uuid/v4'
import * as types from './../constants/ActionTypes'
import apiKey from './../.env'

export const nextLyric = currentSongId => ({
    type: types.NEXT_LYRIC,
    currentSongId
})

export const restartSong = currentSongId => ({
    type: types.RESTART_SONG,
    currentSongId
})

export const changeSong = newSelectedSongId => ({
    type: types.CHANGE_SONG,
    newSelectedSongId
})

export const fetchSongId = title => {
    return dispatch => {
        const localSongId = v4()
        dispatch(requestSong(title, localSongId))
        title = title.replace(' ', '_')
        return fetch(`http://api.musixmatch.com/ws/1.1/track.search?&q_track=${title}&page_size=1&s_track_rating=desc&apikey=${apiKey}`).then(
            res => res.json(),
            error => console.log('An error occurred', error)
        ).then(json => {
            if(json.message.body.track_list.length > 0) {
                console.log("We couldn't locate a song under that ID.")
            // } else {
            //     const title = json.message.body.track_list[0].track.track_name
            //     const artist = json.message.body.track_list[0].track.artist_name
            //     const musicMatchId = json.message.body.track_list[0].track.track_id
            //     fetchLyrics(title, artist, musicMatchId, localSongId, dispatch)
            }
        })
    }
}

export const requestSong = (title, localSongId) => ({
    type: types.REQUEST_SONG,
    title,
    songId: localSongId
})

// export const fetchLyrics = (title, artist, musicMatchId, localSongId, dispatch) => {
//     return fetch(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${musicMatchId}&apikey=${apiKey}`).then(
//         res => res.json(),
//         error => console.log('An error occurred.', error)
//     ).then(json => {
//         if(json.message.body.lyrics) {
//             let lyrics = json.message.body.lyrics.lyrics_body
//             lyrics = lyrics.replace('"', '')
//             const songArray = lyrics.split(/\n/g).filter(entry => entry !== '')
//             dispatch(receiveSong(title, artist, localSongId, songArray))
//             dispatch(changeSong(localSongId))
//         } else {
//             console.log("We couldn't locate lyrics for this song!")
//         }
//     })
// }

export const receiveSong = (title, artist, songId, songArray) => ({
    type: types.RECEIVE_SONG,
    songId,
    title,
    artist,
    songArray,
    receivedAt: Date.now()
})