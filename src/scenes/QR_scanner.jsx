import React from 'react'
import QR_scannerC from '../components/QR_scannerC'
import { Box, Icon, fabClasses, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { qrresultSelector } from '../slices/slice'

const QR_scanner = () => {
  const isTablet = useMediaQuery('(min-width: 500px )')
  const widthIs = isTablet? '10px':'10px'
  const marginTop = isTablet? '7%': '20%'
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const resultSelector = useSelector(qrresultSelector)

  

  return (
    <div style={{ 
      backgroundColor: '#242424 ',
      // width: '100px',
      // height: '50px',
      display: 'flex',
      justifyItems: 'center',
      height: '100vh'}}>
        {/* {
          resultSelector ?   null :<QR_scannerC style={{widthIs}}/>
        } */}
        <QR_scannerC style={{widthIs}}/>

        {/* {
          resultSelector ? <span style={{ color: 'green'}}>result is :{resultSelector}</span> : null
        } */}
      
    </div>
  )
}

export default QR_scanner
