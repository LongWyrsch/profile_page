import React from 'react'
import headshot from 'public/headshot.jpeg'
import styles from 'styles/Header.module.css'
import Image from 'next/image'
import { Button, IconButton, Tooltip, useTheme } from '@mui/material'
import { useTranslation } from 'next-i18next'
import DownloadIcon from '@mui/icons-material/Download'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'

const Header = () => {
	const theme = useTheme()
	const { t } = useTranslation('common')
	const {locale} = useRouter()

	const copyText = () => {
		navigator.clipboard.writeText('long.nqw@gmail.com')
	}

	let nameHighlightPosition = {
		left: locale==='en'? '195px' : locale==='de'? '290px' : '295px',
		top: locale==='en'? '45px' : locale==='de'? '60px' : '60px',
		height: locale==='en'? '38px' : locale==='de'? '25px' : '25px',
		width: locale==='en'? '440px' : locale==='de'? '330px' : '330px'
	} 

	const tooltipText = `long.nqw@gmail.com
	Click to copy!`

	return (
		<div className={styles.headerContainer}>
			<div className={styles.headshotContainer}>
				<Image src={headshot} alt="headshot" className={styles.headshot} />
				<div className={styles.shadow} style={{ backgroundColor: theme.tones.neutral[50] }}></div>
			</div>
			<div className={styles.rightSide}>
				<div className={styles.name} style={{fontSize: locale==='en'? '4rem': '3rem'}}>{t('hi')} <b>{t('long')}</b>.</div>
                <div className={styles.highlight} style={nameHighlightPosition}></div>
				<div className={styles.buttons}>
					<div className={styles.leftButtons}>
						<div className={styles.developer}>{t('dev')}</div>
						<a href="https://drive.google.com/file/d/1yS-VyxTiM-EdUtm751Gmc44D2l1WrepK/view?usp=share_link" rel="noopener noreferrer" target="_blank">
							<Button variant="contained" startIcon={<DownloadIcon />} endIcon={<Icon icon="vscode-icons:file-type-pdf2" />} className={styles.pdf} color="secondary">
								{t('resume')}
							</Button>
						</a>
					</div>
					<div className={styles.rightButtons}>
						<a href="https://github.com/LongWyrsch" rel="noopener noreferrer" target="_blank">
							<IconButton className={styles.iconButton}>
								<Icon icon="mdi:github" className={styles.icon1} style={{ color: theme.materialDesign.onBackground }} />
							</IconButton>
						</a>
						<a href="https://de.linkedin.com/in/long-wyrsch-9141a156?original_referer=" rel="noopener noreferrer" target="_blank">
							<IconButton className={styles.iconButton}>
								<Icon icon="mdi:linkedin" className={styles.icon2} />
							</IconButton>
						</a>
						<Tooltip title={<div style={{textAlign:'center'}}>long.nqw@gmail.com<br/>{t('copy')}</div>} arrow >
							<IconButton className={styles.iconButton} onClick={copyText}>
								<Icon icon="logos:google-gmail" className={styles.icon3}  />
							</IconButton>
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
