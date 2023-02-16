import React from 'react'
import Title from './Title'
import { useTranslation } from 'next-i18next'
import { LinearProgress } from '@mui/material'

const Languages = () => {
	const { t } = useTranslation()

	return (
		<div>
			<Title title="Languages"></Title>
			<ul style={{ listStyleType: 'none', margin: '10px 0', padding: 0 }}>
				<li style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
					{t('english')} <LinearProgress value={100} variant='determinate' style={{width: '55%', height: '8px'}}/>
				</li>
				<li style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
					{t('french')}<LinearProgress value={100} variant='determinate' style={{width: '55%', height: '8px'}}/>
				</li>
				<li style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
					{t('german')}<LinearProgress value={75} variant='determinate' style={{width: '55%', height: '8px'}}/>
				</li>
			</ul>
		</div>
	)
}

export default Languages
