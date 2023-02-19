// Next.js
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

// React
import { useContext } from 'react'
import { ColorModeContext } from './_app'

// Components
import Head from 'next/head'
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
import LanguagePicker from '@/components/LanguagePicker'
import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Languages from '@/components/Languages'
import Education from '@/components/Education'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

export default function Home() {
	const theme = useTheme()

	const colorMode = useContext(ColorModeContext)

	const { t } = useTranslation('common')

	return (
		<>
			<Head>
				<title>Long Wyrsch</title>
				<meta name="description" content="Long Wyrsch" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<div className={styles.smallScreen}>{t('smallScreen')}</div>
			<main className={styles.main}>
				<div className={styles.bannerContainer}>
					<Image alt="laptop" src={bannerImage} className={styles.bannerImage}></Image>
					<span>
						{t('credit1')} <a href="https://unsplash.com/es/@jstrippa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">James Harrison</a> {t('credit2')}{' '}
						<a href="https://unsplash.com/photos/vpOeXr5wmR4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
					</span>
				</div>
				<div className={styles.languageTheme}>
					<IconButton onClick={colorMode.toggleColorMode} color="secondary" className={styles.themeToggle} sx={{color: 'white', backgroundColor: '#535353'}}>
						{theme.palette.mode === 'dark' ? <Icon icon="ion:moon" style={{ width: '30', height: '30' }} /> : <Icon icon="heroicons-solid:sun" style={{ width: '30', height: '30' }} />}
					</IconButton>
					<LanguagePicker />
				</div>
				<div className={styles.resumeContainer}>
					<Header />
					<div className={styles.profileLanguagesEducation}>
						<Profile />
						<Languages />
						<Education />
					</div>
				</div>
				<div className={styles.portfolioBanner} style={{ background: theme.materialDesign.surfaceVariant }}>
					<div className={styles.resumeContainer}>
						<Portfolio />
					</div>
				</div>
				<div className={styles.resumeContainer}>
					<Skills />
					<Experience />
				</div>
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
