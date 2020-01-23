import configuration from '../configuration'

const NotesApiService = {
    getNotes() {
        fetch(`${configuration.API_ENDPOINT}/notes`, {
            method: 'GET',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${configuration.API_KEY}`
            }
          })
            .then(res => {
              if (!res.ok) {
                console.log(res)
                return res.json().then(error => Promise.reject(error))
              }
              return res.json()
            })
    },
    getNote(noteId) {
      return fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
        headers: {
        },
      })
        .then(res =>
          (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    postNote(note) {
        fetch(`${configuration.API_ENDPOINT}/notes`, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${configuration.API_KEY}`
            }
            })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => Promise.reject(error))
                }
                return res.json()
            })
    }
  }
  
  export default NotesApiService