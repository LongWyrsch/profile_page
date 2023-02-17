import React from 'react'
import { useTheme } from '@mui/material'


type TitleProps = {
    title: string
}

const Title = ({title}: TitleProps) => {
    const theme = useTheme()
  return (
    <div style={{position: 'relative', width: 'fit-content', paddingLeft: '3px', paddingRight: '20px'}}>
        <div style={{fontSize: '4rem', fontWeight: 'bold', zIndex: 2, position: 'relative' }}>{title}</div>
        <div style={{
            backgroundColor: theme.materialDesign.tones.primary[70], 
            position: 'absolute', 
            top: 31, left: 0,              
            height: '38%', width: '100%'
        }}></div>
    </div>
  )
}

export default Title