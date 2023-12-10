import React, { useEffect, useState } from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { sideMenuChange, sideMenuSelector } from '../slices/slice';
import { useSelector, useDispatch } from 'react-redux';
import {  useMediaQuery } from '@mui/material'

const Navbar = () => {
  const isTablet = useMediaQuery('(min-width: 500px )')
  // const nbfontSize = isTablet ? '25px' : '20px'
  const isClose = useSelector(sideMenuSelector)
  const dispatch = useDispatch()
  console.log(isClose)
  
  return (
    <div style={{
      borderColor: 'black',
      display: 'flex',
      justifyContent: 'space-between',
      }}>
        <div style={{
          display: 'flex'}}>

          <div style={{display: 'flex', paddingLeft: '10px'}}>
            <IconButton style={{margin: 'auto auto auto 10px'}} onClick={() => {
              dispatch(sideMenuChange())}}>
              {isClose? <DensityMediumIcon style={{color:'white'}} />: <CloseIcon  style={{color:'white'}} />}
            </IconButton>
          </div>
          
          {/* <img src='/logo.png' style={{height: '100px'}} /> */}
          <div style={{display: 'flex'}}>
          <h2 style={{color: 'white', marginLeft: '10px', }}>Muscle</h2>
          <h2 style={{color: '#B97E00' , marginLeft: '5px'}}>Best</h2>
          </div>
          
        </div>

        
          <div style={{
            display: 'flex',
            justifyContent: 'center'}}>
              
              
              <IconButton style={{margin: 'auto 20px auto auto'}}>
                <Person2OutlinedIcon  style={{color:'white'}}></Person2OutlinedIcon>
              </IconButton>
              <IconButton style={{margin: 'auto 20px auto auto'}}>
                <ShoppingCartOutlinedIcon  style={{color:'white'}}></ShoppingCartOutlinedIcon>
              </IconButton>
          
        </div>

        
        
    </div>
  )
}

export default Navbar