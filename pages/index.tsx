// Next.js
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

// React
import { useContext } from 'react'
import { ColorModeContext } from './_app'

// Components
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// Styles
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import styles from 'styles/index.module.css'

// Mui
import { Button, IconButton, useTheme } from '@mui/material'

// Libs
import { Icon } from '@iconify/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// other
import bannerImage from 'public/james-harrison-vpOeXr5wmR4-unsplash.jpg'
import LanguagePicker from '@/components/languagePicker'

export default function Home() {
	const theme = useTheme()

	const colorMode = useContext(ColorModeContext)

	const { locale, locales, push } = useRouter()

	const { t } = useTranslation('common')

	return (
		<>
			<Head>
				<title>Long Wyrsch</title>
				<meta name="description" content="Long Wyrsch" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<main>
				<div className={styles.bannerContainer}>
					<Image alt="laptop" src={bannerImage} className={styles.bannerImage}></Image>
					<span>
						{t('credit1')}{' '}
						<a href="https://unsplash.com/es/@jstrippa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James Harrison</a>{' '}{t('credit2')}{' '}
						<a href="https://unsplash.com/photos/vpOeXr5wmR4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
					</span>
				</div>
				<div className={styles.languageTheme}>
					<IconButton onClick={colorMode.toggleColorMode} color="secondary" className={styles.themeToggle}>
						{theme.palette.mode === 'dark' 
						? <Icon icon="ion:moon" style={{ width: '30', height: '30' }} /> 
						: <Icon icon="heroicons-solid:sun" style={{ width: '30', height: '30' }} />}
					</IconButton>
					<LanguagePicker/>
				</div>
				{/* <div className={styles.languagePicker}>
				</div> */}

				<Button>{t('')}</Button>
				<div>{locale}</div>
				{t('hi')}
				{locales?.map((l) => (
					<div key={l}>
						<Link href={'/'} locale={l}>
							{l}
						</Link>
					</div>
				))}
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	locale = locale || 'en'

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			// Will be passed to the page component as props
		},
	}
}









