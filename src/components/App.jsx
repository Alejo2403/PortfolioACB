import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { MobileProvider, useMobile } from '../context/MobileContext.jsx'

import { BarMenu } from './BarMenu.jsx'
import AboutMe from './AboutMe.jsx'
import Projects from './Projects.jsx'

import '../styles/index.css'

function App() {

  return (
    <>
      <MobileProvider>
        <Router>        
          <div className={'app-container'}>
            <BarMenu />
            <div className={'content-container'}>
              <Routes>
                <Route path='/' element={<AboutMe/>}/>
                <Route path='/projects' element={<Projects/>}/>
              </Routes>
            </div>
          </div>
        </Router>
      </MobileProvider>
    </>
  )
}

export default App
