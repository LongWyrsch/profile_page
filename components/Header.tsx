import React, { Ref } from 'react'
import headshot from 'public/headshot2_compressed.jpeg'
import styles from 'styles/Header.module.css'
import Image from 'next/image'
import { Button, IconButton, Tooltip, useTheme } from '@mui/material'
import { useTranslation } from 'next-i18next'
import DownloadIcon from '@mui/icons-material/Download'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'


const Header = () => {
	const theme = useTheme()
	const { t } = useTranslation('common')
	const {locale} = useRouter()

	const { ref: highlightRef, inView: highlightIsVisible } = useInView({delay: 2000})


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

	let cvLink = locale==='en'
		? 'https://drive.google.com/file/d/161NYxC0P6AcEPlg3b4yERLg_m57_rZgU/view?usp=share_link' 
		: locale==='de'
			? 'https://drive.google.com/file/d/1x6OD16jAhkpSx3qBKacA6J_K5u1Pu1XC/view?usp=share_link' 
			: 'https://drive.google.com/file/d/1c-A4KKcINsGfRB7t5u0ZWUuh6dTqXwbm/view?usp=share_link'

	return (
		<div className={styles.headerContainer}>
			<div className={styles.headshotContainer}>
				<Image src={headshot} alt="headshot" className={styles.headshot} />
				{/* <div className={styles.shadow} style={{ backgroundColor: theme.tones.neutral[50] }}></div> */}
			</div>
			<div className={styles.rightSide}>
				<div className={styles.name} style={{fontSize: locale==='en'? '4rem': '3rem'}}>{t('hi')} <b>{t('long')}</b></div>
                <div className={`${styles.highlight} ${highlightIsVisible&& styles.visible}`} style={nameHighlightPosition} ref={highlightRef}></div>
				<div className={styles.buttons}>
					<div className={styles.leftButtons}>
						<div className={styles.developer}>{t('dev')}</div>
						<a href={cvLink} rel="noopener noreferrer" target="_blank">
							<Button variant="contained" startIcon={<DownloadIcon />} endIcon={<Icon icon="vscode-icons:file-type-pdf2" />} className={styles.pdf} color="secondary" sx={{borderRadius: '20px', textTransform: 'none', width: 'fit-content'}}>
								{t('resume')}
							</Button>
						</a>
					</div>
					<div className={styles.rightButtons}>
						<a href="https://github.com/LongWyrsch" rel="noopener noreferrer" target="_blank">
							<IconButton sx={{height: '50px', width: '50px', padding: '0'}}>
								<Icon icon="mdi:github" className={styles.icon1} style={{ color: theme.materialDesign.onBackground }} />
							</IconButton>
						</a>
						<a href="https://de.linkedin.com/in/long-wyrsch-9141a156?original_referer=" rel="noopener noreferrer" target="_blank">
							<IconButton sx={{height: '50px', width: '50px', padding: '0'}}>
								<Icon icon="mdi:linkedin" className={styles.icon2} />
							</IconButton>
						</a>
						<Tooltip title={<div style={{textAlign:'center'}}>long.nqw@gmail.com<br/>{t('copy')}</div>} arrow >
							<IconButton onClick={copyText} sx={{height: '50px', width: '50px', padding: '0'}}>
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
