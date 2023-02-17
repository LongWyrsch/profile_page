import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useTranslation } from 'next-i18next'
import styles from 'styles/Experience.module.css'
import { useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { height } from '@mui/system'

import ExperienceDetails, { ExperienceDetailsProps } from './ExperienceDetails'

const Experience = () => {
	const { t } = useTranslation()
	const theme = useTheme()
	const { locale } = useRouter()

	const years = Array.from({ length: 17 }, (_, i) => 2023 - i)
	const detailHeight = [0, 0, 0, 0, 0, 0, 0]

	const experiences = locale === 'en' ? experiencesEN : locale === 'de' ? experiencesDE : experiencesFR

	return (
		<div className={styles.experienceWrapper}>
			<Title title="Experience"></Title>
			<div className={styles.timelineContainer}>
				<div className={styles.timeline}>
					{years.map((year) => (
						<div key={year} className={styles.year} style={{ backgroundColor: theme.materialDesign.surfaceVariant }}>
							{year}
						</div>
					))}
				</div>
				<div className={styles.spans1}>
					<div style={{ backgroundColor: theme.materialDesign.surfaceTint }} className={styles.spanGrocery}></div>
					<div style={{ backgroundColor: theme.materialDesign.surfaceTint }} className={styles.spanCodecademy}></div>
					<div style={{ backgroundColor: theme.materialDesign.surfaceTint }} className={styles.spanNichias}></div>
					<div style={{ backgroundColor: theme.materialDesign.surfaceTint }} className={styles.spanCadida}></div>
					<div className={styles.moveGermany}  style={{color: theme.materialDesign.surfaceTint}}>
						<Icon icon='material-symbols:location-on-outline' width={35} color={theme.materialDesign.surfaceTint}/>
						{t('moveGermany')}
					</div>
					<div style={{ backgroundColor: theme.materialDesign.surfaceTint }} className={styles.spanISA}></div>
					<div className={styles.moveJapan} style={{color: theme.materialDesign.surfaceTint}}>
						<Icon icon='material-symbols:location-on-outline' width={35} color={theme.materialDesign.surfaceTint}/>
						{t('moveJapan')}
					</div>
					<div style={{ backgroundColor: theme.materialDesign.surfaceTint }} className={styles.spanDessau}></div>
					<div style={{ backgroundColor: theme.materialDesign.surfaceTint }} className={styles.spanMcgill}></div>
				</div>
				<div className={styles.spans2}>
					<div style={{ backgroundColor: theme.materialDesign.surfaceTint }} className={styles.spanKokusai}></div>
					<div style={{ backgroundColor: theme.materialDesign.surfaceTint }} className={styles.spanOguhachiman}></div>
					<div style={{ backgroundColor: theme.materialDesign.surfaceTint }} className={styles.spanAmt}></div>
				</div>
				<div className={styles.connectors}>

				</div>
				<div className={styles.experiences}>
					{experiences.map((exp, i) => (
						<ExperienceDetails key={i} title={exp.title} employer={exp.employer} employerLink={exp.employerLink} dates={exp.dates} tasks={exp.tasks} height={exp.height} eduIcon={exp.eduIcon}/>
					))}
				</div>
				<div style={{border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '599px', top: '130px'}}></div>
				<div style={{border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '590px', top: '230px'}}></div>
				<div style={{border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '599px', top: '420px'}}></div>
				<div style={{border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '599px', top: '700px'}}></div>
				<div style={{border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '138px', right: '599px', top: '850px'}}></div>
				<div style={{border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '599px', top: '1050px'}}></div>
				<div style={{border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '138px', right: '599px', top: '1230px'}}></div>
				<div style={{border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '599px', top: '1500px'}}></div>
				<div style={{border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '590px', top: '1750px'}}></div>
				<div style={{border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '138px', right: '599px', top: '1930px'}}></div>
				<div className={styles.highlight} style={{backgroundColor: theme.materialDesign.secondaryContainer}}></div>
			</div>
		</div>
	)
}


export default Experience

const experiencesDE: ExperienceDetailsProps[] = []
const experiencesFR: ExperienceDetailsProps[] = []

const experiencesEN: ExperienceDetailsProps[] = [
	{
		title: '1st full-stack portfolio project',
		employer: 'mygrocerylists.netlify.app',
		employerLink: 'https://mygrocerylists.netlify.app',
		height: 0,
		eduIcon: false,
	},
	{
		title: 'Full-Stack Engineering course',
		employer: 'Codecademy',
		employerLink: 'https://join.codecademy.com/learn/paths/full-stack-engineer-career-path/',
		dates: '(4.2022 - 11.2022)',
		height: 200,
		eduIcon: true,
	},
	{
		title: 'Automotive design engineer',
		employer: 'Nichias',
		employerLink: 'https://www.nichiascorp.com/nichias-E/',
		dates: '(4.2019 - 3.2022)',
		tasks: ['Design of automotive secondary gaskets with Creo', 'Involved in bidding process', 'Meetings with customer over design iterations'],
		height: 350,
		eduIcon: false
	},
	{
		title: 'Software developer intern',
		employer: 'Cadida Software',
		employerLink: 'https://www.cadida.de/',
		dates: '(11.2018 - 2.2019)',
		tasks: ['C#, XML', 'IOS app development using Xamarin'],
		height: 590,
		eduIcon: false
	},
	{
		title: 'Chemistry & biology teacher',
		employer: 'Assumption Kokusai High School',
		employerLink: 'https://www.assumption.ed.jp/jsh/',
		dates: '(3.2017-3.2018)',
		tasks: ['Science, biology, chemistry, and English', 'Coordinating with Japanese science/English teachers'],
		height: 750,
		eduIcon: false
	},
	{
		title: 'Science/English camp teacher',
		employer: 'ISA',
		employerLink: 'https://www.isa.co.jp/',
		dates: '(6.2015-8.2018)',
		tasks: [
			'Freelance',
			'Different schools every week across Japan',
			'3-5 days intensive programs',
			'High school, groups of 10-50 students',
			'Training and coordinating international university students coming to Japan to teach',
		],
		height: 940,
		eduIcon: false
	},
	{
		title: 'English teaching assistant',
		employer: 'Oguhachiman Junior High School',
		employerLink: 'https://www.aen.arakawa.tokyo.jp/OGUHACHIMAN-J/',
		dates: '(4.2015-3.2016)',
		tasks: ['22 lessons / week', '470 students, including special needs group'],
		height: 1200,
		eduIcon: false
	},
	{
		title: 'Jr Engineer',
		employer: 'Dessau (now Stantec)',
		employerLink: 'https://www.stantec.com/en',
		dates: '(9.2012-10.2014)',
		tasks: ['Electric and telecom networks design', 'Design of utility poles and manholes', 'Blueprints drawings on AutoCAD'],
		height: 1430,
		eduIcon: false
	},
	{
		title: 'Bachelor of Civil Engineer',
		employer: 'McGill University',
		employerLink: 'https://www.mcgill.ca/',
		dates: '(9.2007 - 4.2012)',
		height: 1700,
		eduIcon: true
	},
	{
		title: 'Intern-Infrastructure',
		employer: 'AMT (now EXO)',
		employerLink: 'https://exo.quebec/en',
		dates: '(5.2010-4.2011)',
		tasks: ['Blueprint drawings on AutoCAD', 'Programmed data entry', 'Surveying', 'Technical specifications', 'Evaluated the energy consumption'],
		height: 1900,
		eduIcon: false
	}
]
