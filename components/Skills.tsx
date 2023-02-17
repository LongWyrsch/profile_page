import React from 'react'
import Title from './Title'
import { Icon } from '@iconify/react'
import { useTranslation } from 'next-i18next'
import styles from 'styles/Skills.module.css'
import { useTheme } from '@mui/material'


const Skills = () => {
	const { t } = useTranslation()
	const theme = useTheme()
	return (
		<div className={styles.skillsContainer}>
			<Title title={t('skills')}></Title>
			<div className={styles.topRow}>
				<div><Icon icon='logos:visual-studio-code' className={styles.tech}/>VSCode</div>
				<div><Icon icon='vscode-icons:file-type-git' className={styles.tech}/>GIT</div>
				<div><Icon icon='logos:figma' className={styles.tech}/>Figma</div>
				<div><Icon icon='vscode-icons:file-type-html' className={styles.tech}/>HTML</div>
				<div><Icon icon='vscode-icons:file-type-css' className={styles.tech}/>CSS</div>
				<div><Icon icon='logos:postgresql' className={styles.tech}/>PostgreSQL</div>
				<div><Icon icon='simple-icons:openapiinitiative' className={styles.tech}/>OpenAPI</div>
				<div><Icon icon='vscode-icons:file-type-vba' className={styles.tech}/>VBA</div>
				<div><Icon icon='vscode-icons:file-type-csharp2' className={styles.tech}/>C#</div>
				<div><Icon icon='vscode-icons:file-type-pine' className={styles.tech}/>Pine Script</div>
			</div>
			<div className={styles.bottomRow}>
				<div className={styles.svgContainer}>
					<Icon icon ='logos:javascript' className={styles.tech}/>
					JavaScript
					<svg width="1438" height="116" preserveAspectRatio='none' viewBox="0 0 1438 116" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg1}>
						<path fill={theme.materialDesign.surfaceVariant} d="M81.9943 116H0L25.2127 15.1497C27.4385 6.24631 35.4381 0.000364537 44.6155 0.000362151L1437.5 0V3.28302L142.006 3.28338C132.879 3.28338 124.91 9.46153 122.636 18.3001L101.364 100.984C99.0895 109.822 91.1207 116 81.9943 116Z"/>
					</svg>

				</div>
				<div><Icon icon='vscode-icons:file-type-typescript-official' className={styles.tech}/>TypeScript</div>
				<div><Icon icon='logos:redux' className={styles.tech}/>Redux</div>
				<div><Icon icon='vscode-icons:file-type-reactjs' className={styles.tech}/>React</div>
				<div><Icon icon='vscode-icons:file-type-jest-snapshot' className={styles.tech}/>Jest</div>
				<div><Icon icon='logos:nextjs-icon' className={styles.tech}/>Next</div>
				<div className={styles.svgContainer}>
					<Icon icon='vscode-icons:file-type-node' className={styles.tech}/>
					Node
					<svg width="1300" height="105" preserveAspectRatio='none' viewBox="0 0 1438 116" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg2}>
						<path fill={theme.materialDesign.surfaceVariant} d="M81.9943 116H0L25.2127 15.1497C27.4385 6.24631 35.4381 0.000364537 44.6155 0.000362151L1437.5 0V3.28302L142.006 3.28338C132.879 3.28338 124.91 9.46153 122.636 18.3001L101.364 100.984C99.0895 109.822 91.1207 116 81.9943 116Z"/>
					</svg>
				</div>
				<div><Icon icon='skill-icons:expressjs-dark' className={styles.tech}/>Express</div>
				<div><Icon icon='logos:passport' style={{backgroundColor: theme.materialDesign.tones.neutral[90], borderRadius: '10px', padding: '5px'}} className={styles.tech}/>Passport</div>
			</div>
		</div>
	)
}

export default Skills
