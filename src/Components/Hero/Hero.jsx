
import HeroImg from "../../Assets/hero.png"

const Hero = () => {
  return (
    <div className="container grid gri d-cols-1 md:grid-cols-2 min-h-[650px] relative">
      {/*Brand Info*/}
      <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
        <div className="text-center md:text-left space-y-6">
            <p className="text-orange-600 uppercase font-semibold">100% Satistaction Guarantee</p>
            <h1>Find your Perfect Tutor</h1>
            <p>
                We help find perfect tutor for 1-on-1 lessons.
                It is completely free and private
            </p>
            {/*Button Section*/}
            <button>Get Started</button>
            <button>See how it works</button>
        </div>
      </div>
      {/*Hero Image*/}
      <div>
        <img src={HeroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero
