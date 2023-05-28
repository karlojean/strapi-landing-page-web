import React from 'react'
import { GlobalStyles } from '../src/styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'

const withTheme = (StoryFn) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StoryFn />
    </ThemeProvider>
  )
}

// export all decorators that should be globally applied in an array
export const globalDecorators = [withTheme]