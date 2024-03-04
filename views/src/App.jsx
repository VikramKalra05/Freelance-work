import Navbar2 from './Components/Navbar/Navbar2'
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from './routes/AllRoutes'
import LoginRoutes from './routes/LoginRoutes'
import Footer from './Components/Footer/Footer'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'



function App() {
  const lenis = useLenis(({ scroll }) => {
  })

  return (
    <ReactLenis root>
      <Navbar2 />
      <AllRoutes />
      <LoginRoutes />
      <Footer />
    </ReactLenis>
  )
}

export default App
