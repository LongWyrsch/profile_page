// import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// React
import { createContext, useMemo, useState } from 'react'

// MUI
import { CssBaseline, PaletteMode } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// libs
import { appWithTranslation } from 'next-i18next'
import { ParallaxProvider } from 'react-scroll-parallax'

// other
import { getDesignTokens } from '../styles/theme'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

function App({ Component, pageProps }: AppProps) {
	// The theme state. Whenever its value changes, "const theme" is updated with corresponding values.
	const [mode, setMode] = useState<PaletteMode>('light')

	// The object which useContext will receive. I contains the function to toggle the theme.
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
		}),
		[]
	)

	// Your customized theme, passed by the ThemeProvider.
	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline>
					<ParallaxProvider>
						<Component {...pageProps} />
					</ParallaxProvider>
				</CssBaseline>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default appWithTranslation(App)
