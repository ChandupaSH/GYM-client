import React, { useRef, useState, useEffect } from 'react';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import { Box, IconButton } from '@mui/material';
import {  useMediaQuery } from '@mui/material'

const SlideShow = () => {
    const isTablet = useMediaQuery('(min-width: 500px )')
    const arrowButtonpadding = isTablet? '3px' : '1px'
    
  const slideButtonStyle = {
    width: '1.2vh',
    height: '1.2vh',
    backgroundColor: 'black',
    margin: '5px',
    borderRadius: '1.2vh',
  }
  const slideButtonMarkedStyle = {
    width: '1.2vh',
    height: '1.2vh',
    backgroundColor: 'yellow',
    margin: '5px',
    borderRadius: '1.2vh',
  }
  const arrowButtonStyle = {
    color: 'black' , 
    backgroundColor: 'white',
    opacity: 0.4, 
    borderRadius: '15px',
    padding: arrowButtonpadding
  }
  const slideImagesArray = ['/imgSlide1.jpg', '/imgSlide2.jpg', '/imgSlide3.jpg', '/imgSlide5.jpg']

  const [slideImage, setSlideImage] = useState(slideImagesArray[0])
  const indexSlide = slideImagesArray.indexOf(slideImage)

  const slideLRButton = (lr) => {
    if (lr === 'right') {
      setSlideImage((prevSlideImage) => {
        const newIndex = (slideImagesArray.indexOf(prevSlideImage) + 1) % slideImagesArray.length
        return slideImagesArray[newIndex]
      })
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideImage((prevSlideImage) => {
        const newIndex = (slideImagesArray.indexOf(prevSlideImage) + 1) % slideImagesArray.length
        return slideImagesArray[newIndex]
      })
    }, 6000)

    return () => {
      clearInterval(intervalId)
    }
  }, [slideImagesArray])

  const slideButtonHandle = () => {}

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          zIndex: '100',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          top: '34%',
        }}
      >
        <IconButton onClick={() => slideLRButton('left')}>
          <ArrowBackIosNewTwoToneIcon style={arrowButtonStyle} />
        </IconButton>
        <IconButton onClick={() => slideLRButton('right')}>
          <ArrowForwardIosTwoToneIcon style={arrowButtonStyle} />
        </IconButton>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          position: 'absolute',
          zIndex: '100',
          top: '100%',
        }}
      >
        <Box style={indexSlide === 0 ? slideButtonMarkedStyle : slideButtonStyle}></Box>
        <Box style={indexSlide === 1 ? slideButtonMarkedStyle : slideButtonStyle}></Box>
        <Box style={indexSlide === 2 ? slideButtonMarkedStyle : slideButtonStyle}></Box>
        <Box style={indexSlide === 3 ? slideButtonMarkedStyle : slideButtonStyle}></Box>
      </div>

      <img style={{ width: '100%', position: 'relative' }} src='/slide1.jpg'/>
    </div>
  );
};

export default SlideShow;
