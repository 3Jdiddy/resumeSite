import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <div className= "flex">
      <div className="fixed bg-white w-1/3 h-screen flex flex-col text-center justify-start gap-56">
        <div>
          <h1 className='top-15 text-2xl'>Ethan A . W. Jones</h1>
        </div>
        <div> 
          <h1>slideshow here</h1>
        </div>
      </div>

      <div className= "fixed bg-[#5886a3] left-1/3 w-2/3 h-screen flex flex-col justify-start gap-56 text-white">
        <div className='flex flex-row justify-evenly text-lg'>
          <i>about me</i>
          <i>projects</i>
          <i>contact</i>
        </div>

        <div className="text-3xl text-center">
          <h1>Hire Me Please.</h1>
          <h1>I love Computers.</h1>
        </div>
      </div>
     </div>
  );
}
