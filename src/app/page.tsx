import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import TopBar from './TopBar'
import me1 from 'public/me_but_dead.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <div className= "flex">
      <div className="fixed bg-slate-200 w-1/3 h-screen flex flex-col text-center justify-start gap-56 items-center">
        <div>
          <h1 className="relative top-18 text-[3vw] text-[#5886a3] font-['Labrada',serif]">Ethan A. W. Jones</h1>
        </div>
        <img className='relative top-[-7vw] overflow-hidden shadow-xl' src='me_but_dead.jpg' style={{width: '20vw'}}></img>
      </div>

      <div className= "fixed bg-[#5886a3] overflow-hidden left-1/3 w-2/3 h-screen flex flex-col justify-start gap-[5vw]">
        <TopBar/>
        <div className= "text-center font-['Labrada',serif] text-[4vw] ml-[15vw] mr-[5vw] text-black">
          <h1>My name is Ethan Jones. I am looking for a job as a Software Engineer. I am specifically interested in Machine Learning and Artificial Intelligence.</h1>
        </div>
      </div>
      
     </div>
  );
}
