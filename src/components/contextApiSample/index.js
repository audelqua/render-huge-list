import React, { createContext, useContext } from 'react'

const theme = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}

const ThemeContext = createContext(theme.light)

const SampleOfContext = props => {
    return (
        <ThemeContext.Provider value={theme.dark}>
            <Tollbar />
        </ThemeContext.Provider>
    )
}
export default SampleOfContext

const Tollbar = props => {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <button style={{ background: theme.background, color: theme.foreground }}>
                hello there
            </button>
        </div>
    )
}