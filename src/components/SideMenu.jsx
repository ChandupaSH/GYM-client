import { Box, Icon, fabClasses, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sideMenuArrowHover, sideMenuArrowHoverSelector, sideMenuSelector } from '../slices/slice';
import { useNavigate } from 'react-router-dom';


const SideMenu = () => {
    const navigate = useNavigate();
    const isTablet = useMediaQuery('(min-width: 600px )')
    const widthIs = isTablet? '50%':'100%'
    const leftIs = isTablet? '-50%':'-100%'
    const isClose = useSelector(sideMenuSelector)
    const dispatch = useDispatch()
    const close = isClose? 'translateX(0)' : 'translateX(100%)'
    const liStyle = {
        fontSize: 'x-large',
        padding: '10% 0 10px 20px',
        color: 'white',
        cursor: 'pointer'
    }

    
    
  return (
    <div style={{zIndex: '10000',
    position: 'absolute',
    left: leftIs,
    transform:close, 
    transition: '0.2s',
    width: widthIs,
    backgroundColor: '#242424 ',
    opacity: '0.95'
    }}>
        <Box sx={{
            height: '90vh',
            border: 'solid 1px black'
        }} >
            <ul style={{
                listStyle: 'none',
                height: '100%'
            }}>
                <li onClick={() => {navigate('/mypage')}} style={liStyle}>My Account</li>
                <li onClick={() => {}} style={liStyle}>Suppliments</li>
                <li onClick={() => {}} style={liStyle}>Workouts</li>
                <li onClick={() => {}} style={liStyle}>Trainers</li>
                <li onClick={() => {}} style={liStyle}>Contact us</li>
            </ul>
        </Box>
        
    </div>
  )
}

export default SideMenu




