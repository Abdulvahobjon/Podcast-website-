import React from 'react'
import HeroBg from '../assets/hero_section_img.png'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
    <div className="max-w-[1024px] w-[90%] mx-auto flex  items-center justify-center flex-col-reverse md:flex-row gap-10">
      <div className="flex-1  text-center md:text-left">
        <h1 className="text-4xl md:text-[60px] font-bold text-primary leading-tight uppercase">NQE Podkast</h1>
        <p className="text-sm md:text-lg">Nozik Qalb Egalari podkasti qaytdi😁 . Yana bir ajoyib podcast. Maza qilib ko'ring.  Ketkizgan vaqtimga achinmaydigan darajada. </p>
        <a href="#listened" className="btn-primary">Ko'rishni boshlang</a>
      </div>
      <div className="flex-1 ">
        <div className="w-full h-[50vh] md:h-screen overflow-hidden relative">
          <img className="w-full h-full md:h-[150vh] object-contain md:absolute md:top-[-25%]"
            src={HeroBg} alt=""/>
        </div>
      </div>
    </div>
  </section>
  )
}
