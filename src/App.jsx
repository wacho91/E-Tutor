import Banner from "./Components/Banner/Banner"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import NavbarBanner from "./Components/Navbar/NavbarBanner"
import NumberCounter from "./Components/NumberCounter/NumberCounter"
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs"

import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";

const BannerDate = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link: "#",
}

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link: "#",
};

function App() {
  

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerDate} />
      <Banner {...BannerData2} reverse={true} />
    </main>
  )
}

export default App
