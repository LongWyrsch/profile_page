// Next.js
import { useRouter } from 'next/router'
import Link from 'next/link'
import { GetStaticProps } from 'next'


// React
import { useContext, useTransition } from 'react'
import { ColorModeContext } from './_app'

// Components
import Head from 'next/head'
import Image from 'next/image'

// Styles
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Mui
import { Button, IconButton, useTheme } from '@mui/material'
// import styles from '@/styles/Home.module.css'

// Libs
import { Icon } from '@iconify/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
	const theme = useTheme()

	const colorMode = useContext(ColorModeContext)

	const { locale, locales, push } = useRouter()

	const { t } = useTranslation('common')

	console.log('locale: ', locale)
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
					{theme.palette.mode === 'dark' ? <Icon icon="ion:moon" style={{ width: '30', height: '30' }} /> : <Icon icon="heroicons-solid:sun" style={{ width: '30', height: '30' }} />}
				</IconButton>
				
				
				<div>{locale}</div>
				{t('hi')}
				{locales?.map((l) => (
					<div key={l}><Link href={'/'} locale={l}>{l}</Link></div>
				))}
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
	
	locale = locale || 'en'

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			// Will be passed to the page component as props
		},
	}
}
