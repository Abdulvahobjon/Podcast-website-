import React from 'react'

export default function Counter() {
    return (
        <section className="flex items-center justify-center  py-[100px] ">
            <div className="max-w-[800px] w-[90%] mx-auto">
                <div className="flex justify-between md:flex-row flex-col md:gap-5 gap-10">
                    <div className="text-center">
                        <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">10+</h1>
                        <p className="text-xl">epizodlar</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">12+</h1>
                        <p className="text-xl">soat suhbat</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">5+</h1>
                        <p className="text-xl">guests</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
