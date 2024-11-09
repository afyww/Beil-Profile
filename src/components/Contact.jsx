import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappURL = `https://wa.me/087733839260?text=${encodeURIComponent(`Halo, nama saya ${name}. ${message}`)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="hubungi" className="p-6 md:p-20 my-6 md:my-20">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4'>
        <div className='space-y-3 md:space-y-6 md:my-auto'>
          <h1 className="text-3xl md:text-6xl font-bold text-black text-center md:text-left">"Solusi Bisnis Anda!"</h1>
          <h1 className="text-xs md:text-xl text-black font-light">
            Dengan Beil POS, Anda bisa mengelola penjualan, stok, dan laporan keuangan secara lebih efisien dan terintegrasi. Segera bergabung dan nikmati kemudahan dalam setiap transaksi!
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4 mx-auto">
            <input
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-md border-gray-300 text-xs md:text-xl"
              required
            />
            <textarea
              placeholder="Pesan Anda"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 rounded-md border-gray-300 text-xs md:text-xl h-44 md:h-80"
              required
            />
            <button
              type="submit"
              className="w-full p-4 rounded-md bg-green-400 hover:bg-green-500 duration-500 transition-all delay-100"
            >
              <h1 className='text-center text-xs md:text-xl font-semibold text-white hover:font-bold'>
                Konsultasi Gratis
              </h1>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
