import Hero from './sections/Hero';
import bg from './assets/public/images/bg.png' 
const App = () => {
  return (
    <>
    <section id="hero" className="relative overflow-hidden">
      <div className='absolute top-0 left-0 z-10'>

        <img src={bg} alt="hero-bg" />
      </div>
       <div className="hero-layoout">
   {/* left hero content */}
    <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
  <div className='flex flex-col gap-7'></div>
  {/* 25 */}
    </header>

{/* right hero content */}

       </div>


    </section>
    </>
  )
}

export default App;