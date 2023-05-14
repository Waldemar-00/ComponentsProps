import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled from 'styled-components'
import { Button } from './App'
const RedBigButton = styled(Button)`
  margin: 20px auto;
  width: 445px;
  background-color: pink;
  text-align: center;
  cursor: pointer;
`
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    <RedBigButton as='a'>Send report</RedBigButton>
  </React.StrictMode>
)
