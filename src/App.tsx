import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
