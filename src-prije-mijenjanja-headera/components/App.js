import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Header'
import Home from './Home'
import Travels from './Travels'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <SApp>
          <GlobalStyle />
          <Route exact path='/' component={ Home } />
        </SApp>
      </BrowserRouter>
    )
  }
}
export default App

const SApp = styled.div`
  height: 100%;
`


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Serif+Pro');
  html, body, #root {
    height: 100%;
  }
  html {
    font-size: 62.5%;

    @media screen and (max-width: 1500px) {
      font-size: 56.25%;
    }
    @media screen and (max-width: 890px) {
      font-size: 50%;
    }
    @media screen and (max-width: 500px) {
      font-size: 40%;
    }
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    box-sizing: border-box;
    font-family: 'Roboto', 'Source Serif Pro','Source Code Pro', monospace;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: .2rem;
    background: #2B2B2B;
    color: white;
  }
`

// @media all and (max-width: 1500px) {
//   html {
//     font-size: 56.25%;
//   }
// }
