import React from 'react'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'
import SlideShow from '../components/SlideShow';

const Home = () => {
  return (
    <div style={{ height: '100vh'}}>
      <Navbar></Navbar>
      <SideMenu style={{zIndex: '1023000'}} ></SideMenu>

      <div style={{width: '100%' }}>
          <SlideShow></SlideShow>
        </div>

        <label>changed</label>
    </div>
  )
}

export default Home
