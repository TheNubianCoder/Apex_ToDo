import { React, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/sidebar/sidebar.component'

class App extends Component{
  render(){
  return (
    <>
      <div>
        <SideBar />
      </div>
    </>
  )
}
}

export default App
