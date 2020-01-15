import React from 'react'
const PersonalContext = React.createContext({
    notes: [],
    isLogged: null,
    loggingIn: () => {},
    logginOut: () => {},
    addNote: () => {},
    deleteNote: () => {},
})

export default PersonalContext