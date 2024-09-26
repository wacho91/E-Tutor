import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import NavbarBanner from "./Components/Navbar/NavbarBanner"

function App() {
  

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
    </main>
  )
}

export default App
