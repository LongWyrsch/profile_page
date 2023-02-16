import React from 'react'
import Title from './Title'
import { Icon } from '@iconify/react'
import { useTranslation } from 'next-i18next'

const Experience = () => {
	const { t } = useTranslation()

	return (
		<div>
			<Title title="Experience"></Title>

		</div>
	)
}

export default Experience
