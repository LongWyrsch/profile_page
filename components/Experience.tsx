import React, { useEffect, useReducer, createContext, Dispatch } from 'react'
import Title from './Title'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useTranslation } from 'next-i18next'
import styles from 'styles/Experience.module.css'
import { useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { height } from '@mui/system'

import ExperienceDetails, { ExperienceDetailsProps } from './ExperienceDetails'

import { useParallax } from 'react-scroll-parallax'
import { useInView } from 'react-intersection-observer'

type state = {
	app: boolean,
	codecademy: boolean,
	nichias: boolean,
	cadida: boolean,
	kokusai: boolean,
	isa: boolean,
	oguhachiman: boolean,
	dessau: boolean,
	mcgill: boolean,
	amt: boolean,
}

const initialState: state = {
	app: false,
	codecademy: false,
	nichias: false,
	cadida: false,
	kokusai: false,
	isa: false,
	oguhachiman: false,
	dessau: false,
	mcgill: false,
	amt: false,
}

export type experience = 'mygrocerylists.netlify.app' | 'Codecademy' | 'Nichias' | 'Cadida Software' | 'Assumption Kokusai High School' | 'ISA' | 'Oguhachiman Junior High School' | 'Dessau (now Stantec)' | 'McGill University' | 'AMT (now EXO)'

type dispObject = { experience: experience; isHovered: boolean }

const reducer = (state: state, action: dispObject) => {
	switch (action.experience) {
		case 'mygrocerylists.netlify.app':
			return {...state, app: action.isHovered}
		case 'Codecademy':
			return {...state, codecademy: action.isHovered}
		case 'Nichias':
			return {...state, nichias: action.isHovered}
		case 'Cadida Software':
			return {...state, cadida: action.isHovered}
		case 'Assumption Kokusai High School':
			return {...state, kokusai: action.isHovered}
		case 'ISA':
			return {...state, isa: action.isHovered}
		case 'Oguhachiman Junior High School':
			return {...state, oguhachiman: action.isHovered}
		case 'Dessau (now Stantec)':
			return {...state, dessau: action.isHovered}
		case 'McGill University':
			return {...state, mcgill: action.isHovered}
		case 'AMT (now EXO)':
			return {...state, amt: action.isHovered}
		default:
			return state;
	}
}

export const HoverContext = createContext<Dispatch<any>>(() => null)

const Experience = () => {
	const { t } = useTranslation()
	const theme = useTheme()
	const { locale } = useRouter()

	const years = Array.from({ length: 17 }, (_, i) => 2023 - i)

	const experiences = locale === 'en' ? experiencesEN : locale === 'de' ? experiencesDE : experiencesFR

	const { ref: ref1 } = useParallax<HTMLDivElement>({ startScroll: 1146, endScroll: 1250, shouldAlwaysCompleteAnimation: true, scaleX: [0, 1], translateX: [-50, 0] })
	const { ref: ref2 } = useParallax<HTMLDivElement>({ startScroll: 1246, endScroll: 1420, shouldAlwaysCompleteAnimation: true, scaleX: [0, 1], translateX: [-50, 0] })
	const { ref: ref3 } = useParallax<HTMLDivElement>({ startScroll: 1445, endScroll: 1640, shouldAlwaysCompleteAnimation: true, scaleX: [0, 1], translateX: [-50, 0] })
	const { ref: ref4 } = useParallax<HTMLDivElement>({ startScroll: 1729, endScroll: 1877, shouldAlwaysCompleteAnimation: true, scaleX: [0, 1], translateX: [-50, 0] })
	const { ref: ref5 } = useParallax<HTMLDivElement>({ startScroll: 1871, endScroll: 2220, shouldAlwaysCompleteAnimation: true, scaleX: [0, 1], translateX: [-50, 0] })
	const { ref: ref6 } = useParallax<HTMLDivElement>({ startScroll: 2080, endScroll: 2300, shouldAlwaysCompleteAnimation: true, scaleX: [0, 1], translateX: [-50, 0] })
	const { ref: ref7 } = useParallax<HTMLDivElement>({ startScroll: 2248, endScroll: 2490, shouldAlwaysCompleteAnimation: true, scaleX: [0, 1], translateX: [-50, 0] })
	const { ref: ref8 } = useParallax<HTMLDivElement>({ startScroll: 2521, endScroll: 2720, shouldAlwaysCompleteAnimation: true, scaleX: [0, 1], translateX: [-50, 0] })
	const { ref: ref9 } = useParallax<HTMLDivElement>({ startScroll: 2778, endScroll: 2940, shouldAlwaysCompleteAnimation: true, scaleX: [0, 1], translateX: [-50, 0] })
	const { ref: ref10 } = useParallax<HTMLDivElement>({ startScroll: 2955, endScroll: 3153, shouldAlwaysCompleteAnimation: true, scaleX: [0, 1], translateX: [-50, 0] })

	const { ref: cadidaRef, inView: cadidaIsVisible } = useInView({ threshold: 1, rootMargin: '0px 0px -100px 0px', triggerOnce: true }) //, triggerOnce: true

	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div className={styles.experienceWrapper}>
			<Title title={t('experience')}></Title>
			<div className={styles.timelineContainer}>
				<div className={styles.timeline}>
					{years.map((year) => (
						<div key={year} className={styles.year} style={{ backgroundColor: theme.materialDesign.surfaceVariant }}>
							{year}
						</div>
					))}
				</div>
				<div className={styles.spans1}>
					<div style={{ backgroundColor: state.app ? theme.materialDesign.tones.primary[70] : theme.materialDesign.surfaceTint }} className={styles.spanGrocery}></div>
					<div style={{ backgroundColor: state.codecademy ? theme.materialDesign.tones.primary[70] : theme.materialDesign.surfaceTint }} className={styles.spanCodecademy}></div>
					<div style={{ backgroundColor: state.nichias ? theme.materialDesign.tones.primary[70] : theme.materialDesign.surfaceTint }} className={styles.spanNichias}></div>
					<div style={{ backgroundColor: state.cadida ? theme.materialDesign.tones.primary[70] : theme.materialDesign.surfaceTint }} className={styles.spanCadida}></div>
					<div className={styles.moveGermany} style={{ color: theme.materialDesign.surfaceTint }}>
						<Icon icon="material-symbols:location-on-outline" width={35} color={theme.materialDesign.surfaceTint} />
						{t('moveGermany')}
					</div>
					<div style={{ backgroundColor: state.isa ? theme.materialDesign.tones.primary[70] : theme.materialDesign.surfaceTint }} className={styles.spanISA}></div>
					<div className={styles.moveJapan} style={{ color: theme.materialDesign.surfaceTint }}>
						<Icon icon="material-symbols:location-on-outline" width={35} color={theme.materialDesign.surfaceTint} />
						{t('moveJapan')}
					</div>
					<div style={{ backgroundColor: state.dessau ? theme.materialDesign.tones.primary[70] : theme.materialDesign.surfaceTint }} className={styles.spanDessau}></div>
					<div style={{ backgroundColor: state.mcgill ? theme.materialDesign.tones.primary[70] : theme.materialDesign.surfaceTint }} className={styles.spanMcgill}></div>
				</div>
				<div className={styles.spans2}>
					<div style={{ backgroundColor: state.kokusai ? theme.materialDesign.tones.primary[70] : theme.materialDesign.surfaceTint }} className={styles.spanKokusai}></div>
					<div style={{ backgroundColor: state.oguhachiman ? theme.materialDesign.tones.primary[70] : theme.materialDesign.surfaceTint }} className={styles.spanOguhachiman}></div>
					<div style={{ backgroundColor: state.amt ? theme.materialDesign.tones.primary[70] : theme.materialDesign.surfaceTint }} className={styles.spanAmt}></div>
				</div>
				<div className={styles.connectors}></div>
				<div className={styles.experiences}>
					{experiences.map((exp, i) => (
						<HoverContext.Provider value={dispatch} key={i}>
							<ExperienceDetails
								title={exp.title}
								employer={exp.employer}
								employerLink={exp.employerLink}
								dates={exp.dates}
								tasks={exp.tasks}
								height={exp.height}
								eduIcon={exp.eduIcon}
							/>
						</HoverContext.Provider>
					))}
				</div>
				<div ref={ref1} style={{ border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '599px', top: '130px' }}></div>
				<div ref={ref2} style={{ border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '590px', top: '230px' }}></div>
				<div ref={ref3} style={{ border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '599px', top: '420px' }}></div>
				<div ref={ref4} style={{ border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '599px', top: '700px' }}></div>
				<div ref={ref5} style={{ border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '138px', right: '599px', top: '850px' }}></div>
				<div ref={ref6} style={{ border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '599px', top: '1050px' }}></div>
				<div ref={ref7} style={{ border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '138px', right: '599px', top: '1230px' }}></div>
				<div ref={ref8} style={{ border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '599px', top: '1500px' }}></div>
				<div ref={ref9} style={{ border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '108px', right: '590px', top: '1750px' }}></div>
				<div ref={ref10} style={{ border: `1px solid ${theme.materialDesign.onBackground}`, position: 'absolute', left: '138px', right: '599px', top: '1930px' }}></div>
				<div ref={cadidaRef} className={styles.highlight} style={{ backgroundColor: theme.materialDesign.secondaryContainer, opacity: cadidaIsVisible ? 1 : 0, transition: '3000ms' }}></div>
			</div>
		</div>
	)
}

export default Experience

const experiencesDE: ExperienceDetailsProps[] = [
	{
		title: 'Erstes Full-Stack-Portfolio-Projekt',
		employer: 'mygrocerylists.netlify.app',
		employerLink: 'https://mygrocerylists.netlify.app',
		height: 0,
		eduIcon: false,
	},
	{
		title: 'Full-Stack Engineering Kurs',
		employer: 'Codecademy',
		employerLink: 'https://join.codecademy.com/learn/paths/full-stack-engineer-career-path/',
		dates: '(4.2022 - 11.2022)',
		height: 200,
		eduIcon: true,
	},
	{
		title: 'Entwicklungsingenieur',
		employer: 'Nichias',
		employerLink: 'https://www.nichiascorp.com/nichias-E/',
		dates: '(4.2019 - 3.2022)',
		tasks: [
			'Konstruktion von Kfz-Sekundärdichtungen mit Creo',
			'Beteiligt am Ausschreibungsprozess',
			'Meetings mit Kunden über Design-Iterationen'
		],
		height: 350,
		eduIcon: false,
	},
	{
		title: 'Praktikant Softwareentwickler',
		employer: 'Cadida Software',
		employerLink: 'https://www.cadida.de/',
		dates: '(11.2018 - 2.2019)',
		tasks: ['C#, XML', 'IOS App-Entwicklung für das iPad'],
		height: 590,
		eduIcon: false,
	},
	{
		title: 'Naturwissenschafts-Lehrer',
		employer: 'Assumption Kokusai High School',
		employerLink: 'https://www.assumption.ed.jp/jsh/',
		dates: '(3.2017-3.2018)',
		tasks: [
			'Naturwissenschaften, Biologie, Chemie und Englisch',
			'Koordination mit japanischen Wissenschafts-/Englischlehrern'
		],
		height: 750,
		eduIcon: false,
	},
	{
		title: 'Lehrer für Naturwissenschaften/Englisch Camp',
		employer: 'ISA',
		employerLink: 'https://www.isa.co.jp/',
		dates: '(6.2015-8.2018)',
		tasks: [
			'Freiberuflich',
			'Jede Woche verschiedene Schulen in ganz Japan',
			'3-5 Tage Intensivprogramme',
			'High school, Gruppen von 10-50 Schülern'
		],
		height: 940,
		eduIcon: false,
	},
	{
		title: 'Englisch-Lehrassistent',
		employer: 'Oguhachiman Junior High School',
		employerLink: 'https://www.aen.arakawa.tokyo.jp/OGUHACHIMAN-J/',
		dates: '(4.2015-3.2016)',
		tasks: [
			'22 Unterrichtsstunden/Woche',
			'470 Schüler, 1 Gruppe mit besonderen Bedürfnissen'
		],
		height: 1200,
		eduIcon: false,
	},
	{
		title: 'Junior-Ingenieur',
		employer: 'Dessau (jetzt Stantec)',
		employerLink: 'https://www.stantec.com/en',
		dates: '(9.2012-10.2014)',
		tasks: [
			'Planung von Strom- und Telekommunikationsnetzen',
			'Entwurf von Versorgungsmasten und Schächten',
			'Blaupausen-Zeichnungen auf AutoCAD'
		],
		height: 1430,
		eduIcon: false,
	},
	{
		title: 'Bachelor in Bauingenieurwesen',
		employer: 'McGill University',
		employerLink: 'https://www.mcgill.ca/',
		dates: '(9.2007 - 4.2012)',
		height: 1700,
		eduIcon: true,
	},
	{
		title: 'Praktikant-Infrastruktur',
		employer: 'AMT (jetzt EXO)',
		employerLink: 'https://exo.quebec/en',
		dates: '(5.2010-4.2011)',
		tasks: [
			'Blaupausenzeichnungen auf AutoCAD',
			'Programmierte Dateneingabe',
			'Vermessung',
			'Technische Spezifikationen',
			'Evaluierung des Energieverbrauchs'
		],
		height: 1900,
		eduIcon: false,
	},
]


const experiencesFR: ExperienceDetailsProps[] = [
	{
		title: 'Premier projet portfolio full-stack',
		employer: 'mygrocerylists.netlify.app',
		employerLink: 'https://mygrocerylists.netlify.app',
		height: 0,
		eduIcon: false,
	},
	{
		title: 'Cours d\'ingénierie Full-Stack',
		employer: 'Codecademy',
		employerLink: 'https://join.codecademy.com/learn/paths/full-stack-engineer-career-path/',
		dates: '(4.2022 - 11.2022)',
		height: 200,
		eduIcon: true,
	},
	{
		title: 'Ingénieur en conception automobile',
		employer: 'Nichias',
		employerLink: 'https://www.nichiascorp.com/nichias-E/',
		dates: '(4.2019 - 3.2022)',
		tasks: ['Conception de joints secondaires automobiles avec Creo', 'Impliquation dans le processus d\'appel d\'offres', 'Rencontres avec le client sur les itérations de conception'],
		height: 350,
		eduIcon: false,
	},
	{
		title: 'Stagiaire Développeur Logiciel',
		employer: 'Cadida Software',
		employerLink: 'https://www.cadida.de/',
		dates: '(11.2018 - 2.2019)',
		tasks: ['C#, XML', 'Développement d\'applications IOS avec Xamarin'],
		height: 590,
		eduIcon: false,
	},
	{
		title: 'Professeur de Chimie & Biologie',
		employer: 'Assumption Kokusai High School',
		employerLink: 'https://www.assumption.ed.jp/jsh/',
		dates: '(3.2017-3.2018)',
		tasks: ['Science, biologie, chimie et anglais', 'Coordination avec les professeurs japonais de science/anglais'],
		height: 750,
		eduIcon: false,
	},
	{
		title: 'Professeur de camps de science et d\'anglais',
		employer: 'ISA',
		employerLink: 'https://www.isa.co.jp/',
		dates: '(6.2015-8.2018)',
		tasks: [
			'Free-lance',
			"Différentes écoles chaque semaine à travers le Japon",
			'Programmes intensifs de 3 à 5 jours',
			'Lycée, groupes de 10 à 50 élèves',
			'Former et coordonner les étudiants universitaires internationaux venant au Japon pour enseigner'
		],
		height: 940,
		eduIcon: false,
	},
	{
		title: 'Professeur adjoint d\'anglais',
		employer: 'Oguhachiman Junior High School',
		employerLink: 'https://www.aen.arakawa.tokyo.jp/OGUHACHIMAN-J/',
		dates: '(4.2015-3.2016)',
		tasks: ['22 leçons/semaine', '470 élèves, y compris groupe à besoins spéciaux'],
		height: 1200,
		eduIcon: false,
	},
	{
		title: 'Engénieur Junior',
		employer: 'Dessau (maintenant Stantec)',
		employerLink: 'https://www.stantec.com/en',
		dates: '(9.2012-10.2014)',
		tasks: ['Conception de réseaux électriques et télécoms', 'Conception de poteaux électriques et de regards', 'Dessins de plans sur AutoCAD'],
		height: 1430,
		eduIcon: false,
	},
	{
		title: 'Baccalauréat en génie civil',
		employer: 'Université McGill',
		employerLink: 'https://www.mcgill.ca/',
		dates: '(9.2007 - 4.2012)',
		height: 1700,
		eduIcon: true,
	},
	{
		title: 'Stagiaire en Infrastructure',
		employer: 'AMT (maintenant EXO)',
		employerLink: 'https://exo.quebec/en',
		dates: '(5.2010-4.2011)',
		tasks: ['Dessins de plan sur AutoCAD', 'Automatisation de saisie de données', 'Arpentage', 'Spécifications techniques', 'Évaluation de la consommation Énergétique'],
		height: 1900,
		eduIcon: false,
	},
]

const experiencesEN: ExperienceDetailsProps[] = [
	{
		title: 'First full-stack portfolio project',
		employer: 'mygrocerylists.netlify.app',
		employerLink: 'https://mygrocerylists.netlify.app',
		height: 0,
		eduIcon: false,
	},
	{
		title: 'Full-Stack Engineering Course',
		employer: 'Codecademy',
		employerLink: 'https://join.codecademy.com/learn/paths/full-stack-engineer-career-path/',
		dates: '(4.2022 - 11.2022)',
		height: 200,
		eduIcon: true,
	},
	{
		title: 'Automotive Design Engineer',
		employer: 'Nichias',
		employerLink: 'https://www.nichiascorp.com/nichias-E/',
		dates: '(4.2019 - 3.2022)',
		tasks: ['Design of automotive secondary gaskets with Creo', 'Involved in bidding process', 'Meetings with customer over design iterations'],
		height: 350,
		eduIcon: false,
	},
	{
		title: 'Software Developer Intern',
		employer: 'Cadida Software',
		employerLink: 'https://www.cadida.de/',
		dates: '(11.2018 - 2.2019)',
		tasks: ['C#, XML', 'IOS app development using Xamarin'],
		height: 590,
		eduIcon: false,
	},
	{
		title: 'Chemistry & Biology Teacher',
		employer: 'Assumption Kokusai High School',
		employerLink: 'https://www.assumption.ed.jp/jsh/',
		dates: '(3.2017-3.2018)',
		tasks: ['Science, biology, chemistry, and English', 'Coordinating with Japanese science/English teachers'],
		height: 750,
		eduIcon: false,
	},
	{
		title: 'Science/English Camp Teacher',
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
		eduIcon: false,
	},
	{
		title: 'English Teaching Assistant',
		employer: 'Oguhachiman Junior High School',
		employerLink: 'https://www.aen.arakawa.tokyo.jp/OGUHACHIMAN-J/',
		dates: '(4.2015-3.2016)',
		tasks: ['22 lessons / week', '470 students, including special needs group'],
		height: 1200,
		eduIcon: false,
	},
	{
		title: 'Jr Engineer',
		employer: 'Dessau (now Stantec)',
		employerLink: 'https://www.stantec.com/en',
		dates: '(9.2012-10.2014)',
		tasks: ['Electric and telecom networks design', 'Design of utility poles and manholes', 'Blueprints drawings on AutoCAD'],
		height: 1430,
		eduIcon: false,
	},
	{
		title: 'Bachelor of Civil Engineer',
		employer: 'McGill University',
		employerLink: 'https://www.mcgill.ca/',
		dates: '(9.2007 - 4.2012)',
		height: 1700,
		eduIcon: true,
	},
	{
		title: 'Intern-Infrastructure',
		employer: 'AMT (now EXO)',
		employerLink: 'https://exo.quebec/en',
		dates: '(5.2010-4.2011)',
		tasks: ['Blueprint drawings on AutoCAD', 'Programmed data entry', 'Surveying', 'Technical specifications', 'Evaluated the energy consumption'],
		height: 1900,
		eduIcon: false,
	},
]


