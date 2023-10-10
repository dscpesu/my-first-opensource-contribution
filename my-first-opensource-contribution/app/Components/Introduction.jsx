import React from 'react'

const Introduction = ({ name,
    role,
    semester }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-y-2'>
            { name!=null && <p className="text-3xl md:text-5xl text-center">✨ Hello There, I am {name}! </p>}
            { role!=null && <p className="text-2xl md:text-3xl text-center">I am a {role}🚀 </p>}
            { semester!=null && <p className="text-xl md:text-2xl text-center">I am currently in my {semester} semester!</p>}
        </div>
    )
}

export default Introduction