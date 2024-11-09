import React from 'react'
import Img from '../assets/images/About.png'

function About() {
    return (
        <section id='tentang'>
            <div className='grid grid-cols-1 h-full md:h-screen'>
                <div className='my-auto'>
                <div className='p-6 md:p-20 relative overflow-hidden space-y-8 md:space-y-6 bg-red-800 shadow-xl'>
                    <div className='absolute inset-0 opacity-20 hover:opacity-10 delay-100 transition-all duration-500'>
                        <img src={Img} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h1 className='text-white text-3xl md:text-6xl font-bold text-center'>Tentang Beil POS</h1>
                    </div>
                    <div className='space-y-2 md:space-y-4'>
                        <h1 className='font-bold text-xl md:text-2xl text-white'>Beil POS</h1>
                        <h1 className='text-xs md:text-xl font-light text-white'>
                            adalah solusi Point of Sale (POS) yang dirancang khusus untuk mempermudah dan mengoptimalkan operasional bisnis Anda. Dengan teknologi canggih dan antarmuka yang mudah digunakan, Beil POS hadir untuk memberikan pengalaman terbaik bagi pemilik bisnis dan pelanggan. Kami memahami bahwa setiap bisnis memiliki tantangannya sendiri, oleh karena itu Beil POS memberikan fitur-fitur inovatif yang dapat disesuaikan dengan kebutuhan bisnis Anda.</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
                        <div className='p-3 md:p-6 bg-white rounded-md space-y-4 shadow-xl'>
                            <h1 className='font-bold text-xl md:text-2xl text-left md:text-center'>Misi Kami</h1>
                            <h1 className='text-xs md:text-xl text-black font-light'>
                                Misi Beil POS adalah untuk membantu bisnis di seluruh dunia mengelola transaksi, pelanggan, dan laporan keuangan dengan cara yang lebih efisien, lebih cepat, dan lebih aman. Kami percaya bahwa teknologi yang tepat dapat mengubah cara bisnis beroperasi, mengurangi beban administratif, dan memberikan pengalaman yang lebih baik bagi pelanggan.</h1>
                        </div>
                        <div className='p-3 md:p-6 bg-white rounded-md space-y-4 shadow-xl'>
                            <h1 className='font-bold text-xl md:text-2xl text-left md:text-center'>Visi Kami</h1>
                            <h1 className='text-xs md:text-xl text-black font-light'>
                                Menjadi platform POS terkemuka yang mendukung pertumbuhan bisnis melalui solusi cerdas yang inovatif, serta menyediakan alat yang memungkinkan pengelolaan operasional yang lebih efektif dan efisien.</h1>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default About
