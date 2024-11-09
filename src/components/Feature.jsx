import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Importing React icons
import Qr from '../assets/images/Qr.png';
import Entry from '../assets/images/Entry.png';
import Web from '../assets/images/Web.png';
import Business from '../assets/images/Business.png';
import Discount from '../assets/images/Discount.png';
import Product from '../assets/images/Product.png';
import User from '../assets/images/User.png';
import Order from '../assets/images/Order.png';

function Feature() {
    const [openDescription, setOpenDescription] = useState({});

    const toggleDescription = (index) => {
        setOpenDescription((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section id='fitur' className='p-6 md:p-20 my-6 md:my-44'>
            <div className='grid grid-cols-1'>
                <div className='space-y-6 md:space-y-12'>
                    <div className=''>
                        <h1 className='text-3xl md:text-6xl text-black font-extrabold text-center'>
                            Fitur Utama Beil POS
                        </h1>
                    </div>
                    <div className='bg-red-800 opacity-90 hover:opacity-100 transition-all delay-100 rounded-md p-3 md:p-8 shadow-xl duration-500'>
                        <h1 className='text-xs md:text-xl text-white text-center font-light'>
                            Temukan berbagai solusi inovatif yang dirancang untuk memudahkan operasional bisnis Anda,
                            meningkatkan efisiensi, dan memberikan pengalaman terbaik bagi pelanggan melalui sistem POS yang lengkap dan terintegrasi.
                        </h1>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {[
                            {
                                img: Qr,
                                title: 'Kemudahan Transaksi QR Code per Meja',
                                description: 'Beil POS memudahkan pelanggan untuk melakukan transaksi dengan QR Code per meja, yang memungkinkan mereka melakukan pemesanan dan pembayaran langsung melalui ponsel mereka tanpa perlu beranjak dari tempat duduk.',
                            },
                            {
                                img: Entry,
                                title: 'Sistem Pantau Antrian & Lihat Status Pesanan',
                                description: 'Dengan Beil POS, Anda dapat memantau status pesanan secara real-time, melihat antrian pesanan, dan mempercepat proses penyajian untuk meningkatkan efisiensi dan kepuasan pelanggan.',
                            },
                            {
                                img: Web,
                                title: 'Website Profil Perusahaan',
                                description: 'Beil POS menyertakan fitur website profil perusahaan yang terintegrasi, memungkinkan pelanggan untuk mengetahui lebih dalam tentang bisnis Anda dan informasi terkini tentang layanan yang ditawarkan.',
                            },
                            {
                                img: Business,
                                title: 'Analisis & Laporan Bisnis Terperinci',
                                description: 'Dengan fitur laporan dan analisis bisnis dari Beil POS, Anda bisa melihat kinerja bisnis secara mendetail dan menggunakan data untuk membuat keputusan yang tepat guna meningkatkan profitabilitas dan efisiensi operasional.',
                            },
                            {
                                img: Discount,
                                title: 'Discount Management',
                                description: 'Beil POS memungkinkan pengelolaan diskon yang fleksibel dan efisien, yang dapat disesuaikan untuk berbagai produk dan pelanggan, membantu meningkatkan daya tarik dan penjualan produk.',
                            },
                            {
                                img: Product,
                                title: 'Product Management',
                                description: 'Beil POS menyediakan solusi lengkap untuk manajemen produk, memungkinkan Anda untuk mengelola inventaris dengan mudah, melacak penjualan, dan memperbarui informasi produk secara efisien.',
                            },
                            {
                                img: User,
                                title: 'User Management',
                                description: 'Fitur manajemen pengguna Beil POS memudahkan pengelolaan akses pengguna, dengan pengaturan hak akses yang dapat disesuaikan untuk staf, manajer, dan administrator guna memastikan kontrol yang efisien.',
                            },
                            {
                                img: Order,
                                title: 'Order Management',
                                description: 'Beil POS membantu Anda dalam mengelola pesanan dengan mudah, memantau status pesanan, dan memastikan proses pemesanan berjalan lancar untuk meningkatkan pengalaman pelanggan.',
                            },
                        ].map((feature, index) => (
                            <div key={index} className='p-3 md:p-6 bg-white rounded-md hover:scale-105 delay-100 transition-all duration-500'>
                                <div className='space-y-2 md:space-y-4'>
                                    <div className='md:w-20 w-8 h-8 md:h-20 mx-auto'>
                                        <img className='w-full h-full' src={feature.img} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-xs md:text-2xl text-center'>{feature.title}</h1>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <button
                                            onClick={() => toggleDescription(index)}
                                            className='flex flex-col justify-center items-center text-4xl md:text-6xl font-medium text-red-800'>
                                            {openDescription[index] ? (
                                                <FiChevronUp className='' />
                                            ) : (
                                                <FiChevronDown className='' />
                                            )}
                                            {openDescription[index]}
                                        </button>
                                    </div>
                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden max-h-0 ${openDescription[index] ? 'max-h-[200px]' : ''}`}>
                                        <p className='font-light text-xs md:text-lg text-black text-center'>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature;
