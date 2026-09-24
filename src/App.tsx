import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Forside } from './pages/Forside'
import { Plakater } from './pages/Plakater'
import { Plakat } from './pages/Plakat'
import { Kurv } from './pages/Kurv'

export const App = () => {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/plakater" element={<Plakater />} />
          <Route path="/plakater/:genreId" element={<Plakater />} />
          <Route path="/plakat/:posterId" element={<Plakat />} />
          <Route path="/kurv" element={<Kurv />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
