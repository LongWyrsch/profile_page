import * as React from 'react'
import { useRouter } from 'next/router'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import TranslateIcon from '@mui/icons-material/Translate'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTheme } from '@mui/material'


const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 100,
		color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
		boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
			},
		},
	},
}))

export default function LanguagePicker() {
	const theme = useTheme()

    const { locale, locales, push } = useRouter()
    let currentLanguage = locale==='en'? 'English': locale==='de'? 'Deutsch': 'Français'

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = (l?: string) => {
		setAnchorEl(null)
        push('/', undefined, {locale: l})
	}


	return (
		<div>
			<Button
				id="customized-button"
				aria-controls={open ? 'customized-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				variant="outlined"
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
                startIcon={<TranslateIcon />}
                style={{backgroundColor: theme.materialDesign.background}}
			>
				{currentLanguage}
			</Button>
			<StyledMenu
				id="customized-menu"
				MenuListProps={{
					'aria-labelledby': 'customized-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={()=>handleClose()}
			>
				<MenuItem onClick={()=>handleClose('de')} disableRipple>
					Deutsch
				</MenuItem>
				<MenuItem onClick={()=>handleClose('en')} disableRipple>
					English
				</MenuItem>
				<MenuItem onClick={()=>handleClose('fr')} disableRipple>
					Français
				</MenuItem>
			</StyledMenu>
		</div>
	)
}
