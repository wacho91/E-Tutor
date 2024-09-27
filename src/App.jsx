import Banner from "./Components/Banner/Banner"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import NavbarBanner from "./Components/Navbar/NavbarBanner"
import NumberCounter from "./Components/NumberCounter/NumberCounter"
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs"

function App() {
  

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner />
    </main>
  )
}

export default App
