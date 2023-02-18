import React from 'react'
import Title from './Title'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import grocerylists from 'public/grocerylists.png'
import { Icon } from '@iconify/react'
import { Button, useTheme } from '@mui/material'
import styles from 'styles/Portfolio.module.css'

const Portfolio = () => {

    const theme = useTheme()
    const { t } = useTranslation()

	return (
		<div style={{margin: '50px 0', padding: '40px 0'}}>
			<Title title={t('portfolio')}></Title>
			<div style={{ display: 'flex', gap: '80px' }}>
				<div style={{ marginTop: '40px', textAlign: 'center', whiteSpace: 'pre', fontSize: '1.5rem', margin: '0 auto' }}>
					<b>{t('look')} </b>
					<a href="https://mygrocerylists.netlify.app"  rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}}><Button variant='contained' style={{borderRadius: '20px'}}>{t('app')}</Button></a>
                
                    <div className={styles.wrapper} style={{position: 'relative', marginTop: '20px'}}>
						<a className={styles.topCard} href="https://mygrocerylists.netlify.app"  rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none'}}><Image alt="app screenshot" src={grocerylists} width={400} style={{position: 'relative', zIndex: 2}}/></a>
                        <div className={styles.shadow} style={{width: '400px', height: '219px', backgroundColor: theme.tones.neutral[50]}}></div>
                    </div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
