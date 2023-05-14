import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from './App'
import BootStrapTest from './bootStarpTest'

const RedBigButton = styled(Button)`
  margin: 20px auto;
  width: 445px;
  background-color: pink;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <RedBigButton as='a' href='https://github.com'>Send report</RedBigButton>
    <BootStrapTest />
  </React.StrictMode>
)
