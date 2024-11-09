import Logo from '../assets/images/Logo.svg'
import { SiGmail } from "react-icons/si";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="h-fit w-full bg-white mx-auto rounded-t-xl">
        <div className="">
            <div className=" grid grid-cols-3 p-3 xl:p-6 space-y-4 md:space-y-0">
                <div className="my-auto col-span-3 xl:col-span-1">
                    <a href="/">
                        <img className='w-1/3 h-1/3 md:w-2/3 md:h-2/3' src={Logo} alt="" />
                    </a>
                </div>
                <div className='space-y-4 mx-auto'>
                    <div>
                        <h1 className='font-semibold text-black text-center text-sm md:text-xl'>Our Address</h1>
                    </div>
                    <div className='text-center'>
                        <h1 className='block text-black text-sm md:text-xl'>Jl. Satrio Wibowo III No.73, Tlogosari Kulon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50196</h1>
                    </div>
                </div>
                <div className='space-y-4 mx-auto col-span-2 md:col-span-1'>
                    <div>
                        <h1 className='font-semibold text-black text-center text-sm md:text-xl'>Quick Link</h1>
                    </div>
                    <div className='space-y-2 text-left'>
                        <a className='block text-black text-sm md:text-xl' href="#tentang">Tentang</a>
                        <a className='block text-black text-sm md:text-xl' href="#fitur">Fitur</a>
                        <a className='block text-black text-sm md:text-xl' href="#harga">Harga</a>
                        <a className='block text-black text-sm md:text-xl' href="#hubungi">Hubungi Kami</a>
                    </div>
                </div>
            </div>
            <div>
            <h1 class="font-light text-sm md:text-2xl text-black text-center">
                © 2024 BEIL. ALL RIGHTS RESERVED
            </h1>
        </div>
        </div>
    </footer>  
      );
};

export default Footer;
