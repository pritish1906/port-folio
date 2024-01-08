"use client"
import React from 'react'
const HeroSection = () => {
    return (
        <div className='mx-auto max-w-3xl my-5'>
            <div className='flex gap-x-9'>
                <div className='flex flex-col '>
                    <div className='text-4xl font-medium'>Pritish Sharma</div>
                    <div className='text-xl mb-5'>Software Developer</div>
                    <div>Welcome to my slice of the internet! I am a pre-final year student in Computer Science Engineering at the Indian Institute of Technology, Varanasi.
                        In my free time, I listen to music, rant about TypeScript, build stuff and experiment with new technologies.</div>
                </div>
                <div>
                    <img className='rounded-full'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPwA_sMcqld0uQlPowa5UujGO7jBz8ONrynTXlGsAjqH2PSA9BRmh-Jx-NyO-bkizysE&usqp=CAU"
                        width={650}
                        height={650}
                        alt='My Photo'
                        onError={event => { console.log(event) }}

                    />
                </div>
            </div>
            <div className='flex flex-col mt-9'>
                <div className='text-4xl font-medium mb-5'>Tech Stack</div>
                <div>I love exploring new libraries, programing languages and frameworks. For the better part of the last year, I have divided head first, into soo-many new frameworks and technologies that it is hard to keep track of! Here is a small overview of them!</div>
                <div className='flex p-5 gap-x-10'>
                    

                </div>
            </div>

        </div>
    )
}

export default HeroSection