import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Button, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
// import styles from '@/styles/Home.module.css'

import { Icon } from '@iconify/react'

import { ColorModeContext } from './_app'
import { display } from '@mui/system'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const theme = useTheme()

	const colorMode = useContext(ColorModeContext)

  console.log(theme.palette.mode)
  return (
		<>
			<Head>
				<title>Long Wyrsch</title>
				<meta name="description" content="Long Wyrsch" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<main>
				<IconButton onClick={colorMode.toggleColorMode} color="secondary">
					{theme.palette.mode === 'dark' ? (
						<Icon icon="ion:moon" style={{ width: '30', height: '30' }} />
					) : (
						<Icon icon="heroicons-solid:sun" style={{ width: '30', height: '30' }} />
					)}
				</IconButton>
				My profile page
			</main>
		</>
	)
}
