import './App.css'
import Img from '../assets/images/Hero.png'

const Hero = () => {

    return (
        <section id="home" className='p-6 md:p-20'>
            <div className="grid grid-cols-1 h-screen md:grid-cols-2">
                <div className="my-0 md:my-auto space-y-8 order-2 md:order-1">
                    <div className=''>
                        <h1 className="text-3xl md:text-6xl text-black font-extrabold">Dari Meja ke Kasir, Beil POS Solusi Cerdas Anda!</h1>
                    </div>
                    <div className='p-2 md:p-4 bg-purple-950 w-fit rounded-md hover:scale-105 delay-100 transition-all'>
                        <h1 className='text-xl md:text-5xl font-extrabold text-white px-5 md:px-10'>Join Us!</h1>
                    </div>
                </div>
                <div className='my-auto flex flex-col justify-end items-end md:order-2 order-1'>
                    <img className='hover:scale-105 delay-100 transition-all' src={Img} alt="Hero" />
                </div>
            </div>
        </section>
    )
}

export default Hero