import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import NavbarBanner from "./Components/Navbar/NavbarBanner"
import NumberCounter from "./Components/NumberCounter/NumberCounter"

function App() {
  

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
    </main>
  )
}

export default App
