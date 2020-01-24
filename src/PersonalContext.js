import React from 'react'
const PersonalContext = React.createContext({
    notes: [],
    isLogged: null,
    loggingIn: () => {},
    logginOut: () => {},
    retrieveTheInfos: () => {},
    addNote: () => {},
    deleteNote: () => {},
    updateNote: () => {},
})

export default PersonalContext