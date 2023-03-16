import React from 'react'

export default function Card() {
    return (
        <div className="bg-orange-200 p-5 rounded-xl flex-1">
            <img src="./images/host-1.png" alt="host-1" className="rounded-lg object-cover w-full" />
            <h2 className="text-gray-700 text-xl font-medium mt-3">Kamal Azad</h2>
            <p className="text-sm md:text-base mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem saepe omnis numquam quasi
            </p>
        </div>
    )
}
