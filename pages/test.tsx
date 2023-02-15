import React from 'react'

import styles from './test.module.css'

import { Box, Button } from '@mui/material'
import {useTheme} from '@mui/material'

import { ColorModeContext } from './_app'

const Test = () => {
	const theme = useTheme()

	const colorMode = React.useContext(ColorModeContext)


	return (
		<div>
			<Button onClick={colorMode.toggleColorMode} variant="contained" color='secondary' style={{borderRadius: '30px'}}>Contained</Button>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
                    height: '400',
					alignItems: 'center',
					justifyContent: 'center',
					bgcolor: 'primary.main',
					borderRadius: 1,
					p: 3,
				}}
			></Box>
		</div>
	)
}

export default Test
