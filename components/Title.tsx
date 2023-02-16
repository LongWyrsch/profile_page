import React from 'react'
import { useTheme } from '@mui/material'


type TitleProps = {
    title: string
}

const Title = ({title}: TitleProps) => {
    const theme = useTheme()
  return (
    <div style={{position: 'relative', width: 'fit-content', paddingLeft: '3px', paddingRight: '20px'}}>
        <div style={{fontSize: '3rem', fontWeight: 'bold'}}>{title}</div>
        <div style={{
            backgroundColor: theme.materialDesign.tones.primary[70], 
            position: 'absolute', 
            top: 31, left: 0, 
            zIndex: -1, 
            height: '38%', width: '100%'
        }}></div>
    </div>
  )
}

export default Title