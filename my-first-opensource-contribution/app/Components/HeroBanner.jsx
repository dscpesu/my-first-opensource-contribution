import React from 'react'
import Image from 'next/image'

const HeroBanner = ({  }) => {
    return (
        <div className="relative w-full h-[60vh] object-cover flex flex-col items-center justify-center gap-2    bg-[url('/hero-vector.png')]  ">
            <Image src={'/gdsc_logo.png'} alt='gdsc-logo-title' height={100} width={100} />
            <h1 className=" text-2xl md:text-3xl text-gray-500 text-center">Google Developer Student Clubs</h1>
            <p className="text-sm md:text-xl text-center text-gray-500 ">Make Your First Open Source Contribution!</p>
        </div>
    )
}

export default HeroBanner