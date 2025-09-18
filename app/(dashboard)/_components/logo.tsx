import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return  <Image height={60} width={60} src={'/img/logo.jpg'} alt={'Logo'} className=' rounded-full object-cover h-14 w-14'/>
   
  
}

export default Logo
