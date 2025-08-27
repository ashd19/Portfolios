
import { words } from '../constants'
import bg from '../assets/public/images/bg.png' 
const Hero = () => {
  return (
    <>
     <section id="hero" className="relative overflow-hidden">
      <div className='absolute top-0 left-0 z-10'>

        <img src={bg} alt="hero-bg" />
      </div>    
      
       <div className="hero-layoout">
       {/* left hero content : here the text will come */}

    <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
  <div className='flex flex-col gap-7'>
   
   <div className="hero-text">
     <h1>Shaping
       <span className="slide">  {/* animation in index.css file , also wrapper */}
      <span className="wrapper">
      {words.map((word)=>(
        <span  key={word.text}
        className='flex items-center md:gap-3 gap-1 pb-2'>
           <img src={word.imgPath} alt={word.text} 
           className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 '
           />
      <span>{word.text}</span>
        </span>
      )
      
    )
      }
      </span>

       </span>
     </h1>
     <h1>Into Real Projects</h1>
     <h1>That Deliver Results</h1>

   </div>

  </div>
  
    </header>
 
{/* right hero content  : here the 3d-model will come */}
   
       </div>
    

    </section>
    
    </>
  )
}
export default Hero