import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'
function App() {
  
  return (
    <>
      <NavBar></NavBar>
      <main className='main_container'>
        <ContactHeader></ContactHeader>
        <ContactForm></ContactForm>
      </main>
    </>
  )
}

export default App
