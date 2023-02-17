import React, { forwardRef } from 'react'
import { useTheme } from '@mui/material'
import styles from 'styles/Title.module.css'
import { useInView } from 'react-intersection-observer'

type TitleProps = {
	title: string
}

const Title = forwardRef<HTMLDivElement, TitleProps>(({ title }, ref) => {
	const theme = useTheme()
	const { ref: highlightRef, inView: highlightIsVisible } = useInView({ delay: 500, triggerOnce: true })

	return (
		<div style={{ position: 'relative', width: 'fit-content', paddingLeft: '3px', paddingRight: '20px' }}>
			<div style={{ fontSize: '3.5rem', fontWeight: 'bold', zIndex: 2, position: 'relative' }}>{title}</div>
			<div
				style={{
					backgroundImage: `linear-gradient(to right, transparent 50%, ${theme.materialDesign.tones.primary[70]} 50%)`,
				}}
				className={`${styles.highlight} ${highlightIsVisible && styles.visible}`}
				ref={highlightRef}
			></div>
		</div>
	)
})

Title.displayName = 'Title'

export default Title
