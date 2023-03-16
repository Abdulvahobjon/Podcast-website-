import React from 'react'
import HostImgOne from '../assets/host-1.png'
import HostImgTwo from '../assets/host-2.png'

export default function Host() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-orange-100 py-[100px] text-gray-700">
      <div className="max-w-[1024px] w-[90%] mx-auto">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-primary text-4xl font-bold">The Hosts</h1>
          <p className="text-sm md:text-base text-gray-700 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae, illum
            beatae similique et cum</p>
        </div>
        <div className="flex gap-5 mt-11 md:flex-row flex-col ">
          <div className="bg-orange-200 p-5 rounded-xl flex-1">
            <img src={HostImgOne} alt="host-1" className="rounded-lg object-cover w-full" />
            <h2 className="text-gray-700 text-xl font-medium mt-3">Kamal Azad</h2>
            <p className="text-sm md:text-base mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe omnis numquam quasi
            </p>
          </div>
          <div className="bg-slate-200 p-5 rounded-xl flex-1">
            <img src={HostImgTwo} alt="host-1" className="rounded-lg object-cover w-full" />
            <h2 className="text-gray-700 text-xl font-medium mt-3">Hasan Rahid</h2>
            <p className="text-sm md:text-base mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe omnis numquam quasi
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
