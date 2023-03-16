import React from 'react'
import HostImgOne from '../assets/host-1.png'
import HostImgTwo from '../assets/host-2.png'

export default function Host() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-orange-100 py-[100px] text-gray-700">
      <div className="max-w-[1024px] w-[90%] mx-auto">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-primary text-4xl font-bold">Mezbonlar</h1>
          <p className="text-sm md:text-base text-gray-700 mt-3">Azam Qahramoniy va Kunduziy   <br /> podkastlari. </p>
        </div>
        <div className="flex gap-5 mt-11 md:flex-row flex-col ">
          <div className="bg-orange-200 p-5 rounded-xl flex-1">
            <img src="https://pbs.twimg.com/profile_images/1554388627089678337/9g_CBk5C_400x400.jpg" alt="host-1" className="rounded-lg object-cover w-full" />
            <h2 className="text-gray-700 text-xl font-medium mt-3">Teacher Azam</h2>
            <p className="text-sm md:text-base mt-2">
            Teacher Azam hammasini tushuntirib beradi!. O'zimizning chat guruhimiz bor, ba'zi-ba'zida men ham yozib turaman
            </p>
          </div>
          <div className="bg-slate-200 p-5 rounded-xl flex-1">
            <img src="https://yt3.googleusercontent.com/ytc/AL5GRJVNZu_Qo2yqgdEyJRcoevkD7Ghj8XiV_gSJL4JV=s176-c-k-c0x00ffffff-no-rj" alt="host-1" className="rounded-lg object-cover w-full" />
            <h2 className="text-gray-700 text-xl font-medium mt-3">Kunduziy</h2>
            <p className="text-sm md:text-base mt-2">
             Kunduziy hammasini tushuntirib beradi!. O'zimizning chat guruhimiz bor, ba'zi-ba'zida men ham yozib turaman
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
