import React from 'react'
import Link from 'next/link'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
const Navbar = () => {
  return (
    <div className='flex rounded-3xl mx-auto my-10 gap-x-5 bg-slate-800 px-6 py-2 font-medium border justify-center border-white max-w-xl'>
      <Link href='/'>Home</Link> 
      <Link href='/projects'>Projects</Link> 
      <Link href='blogs'>Blogs</Link> 
      <Link href='/achievements'>Achievements</Link> 
      <Link href='https://www.linkedin.com/in/waytopritish/'>LinkedIn</Link> 
      <Link href='https://github.com/pritish1906'>Github</Link>
      <LightModeOutlinedIcon/>
    </div>
  )
}

export default Navbar