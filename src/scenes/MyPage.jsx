import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { qrresultSelector } from '../slices/slice'
import { useDispatch, useSelector } from 'react-redux'

const MyPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

  return (
    <div style={{height : '100vh'}}>
      <Button onClick={() => {navigate('../qr')}}>mark attendance</Button>
    </div>
  )
}

export default MyPage
