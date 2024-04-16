import { Route, Routes } from 'react-router'

import Header from './components/UI/Header/Header'
import Leads from './pages/Leads/Leads'
import Footer from './components/UI/Footer/Footer'
import HomePage from './pages/Home/HomePage'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <Header />
      <main><Routes>
        <Route element={<HomePage />}  path="/" />
        <Route element={<HomePage />} path="/home" />
        <Route element={<Leads />} path="/leads" />
        <Route element={<NotFound />} path="*" />
      </Routes></main>
      
      <Footer />
    </>
  )
}

export default App
