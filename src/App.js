import React from 'react'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import Home from './scenes/Home';
// import QR_scanner from './scenes/QR_scanner';
import MyPage from './scenes/MyPage';
// import Result from './scenes/Result';

const App = () => {
  return (
    <div className='app' style={{backgroundColor: '#242424 '}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/qr' element={<QR_scanner/>}/> */}
          {/* <Route path='/result' element={<Result/>}/> */}
          <Route path='/mypage' element={<MyPage/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
