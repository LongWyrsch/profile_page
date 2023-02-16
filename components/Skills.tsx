import React from 'react'
import Title from './Title'
import { Icon } from '@iconify/react'
import { useTranslation } from 'next-i18next'

const Skills = () => {
	const { t } = useTranslation()

	return (
		<div>
			<Title title="Skills"></Title>
			
		</div>
	)
}

export default Skills
