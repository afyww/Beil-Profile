import Img from '../assets/images/Pro.png'

function Price() {
  return (
    <section id='harga' className='my-6 md:my-20'>
      <div className='grid grid-cols-1'>
        <div className='my-auto'>
          <div className='p-6 md:p-20 relative overflow-hidden space-y-8 md:space-y-6 bg-red-800 shadow-xl'>
            <div className='absolute inset-0 opacity-20 hover:opacity-10 delay-100 transition-all duration-500'>
              <img src={Img} alt="Beil POS" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className='text-white text-3xl md:text-6xl font-bold text-center'>Harga Beil POS</h1>
            </div>
            <div className='space-y-2 md:space-y-4'>
              <h1 className='font-bold text-xl md:text-2xl text-white'>Harga Sederhana</h1>
              <h1 className='text-xs md:text-xl text-white font-light'>
                Penetapan harga yang mudah sesuai dengan kebutuhan bisnis Anda. Pilih paket yang paling sesuai dan mulai tingkatkan operasional bisnis Anda dengan Beil POS. Semua paket kami menawarkan fitur lengkap yang dapat membantu Anda mengelola transaksi, inventaris, dan pegawai secara efisien.
              </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4'>
              <div className='bg-white p-3 md:p-6 rounded-md shadow-md text-center space-y-2 md:space-y-4'>
                <h1 className='text-xl md:text-2xl font-bold text-gray-900'>Paket Dasar</h1>
                <h1 className='text-3xl md:text-5xl text-black font-bold'>Rp.450.000</h1>
                <h1 className='text-xs md:text-lg text-black font-semibold'>/Untuk 3 bulan</h1>
                <h1 className='text-gray-700 text-xs md:text-lg'>
                  Cocok untuk bisnis kecil yang baru mulai. Dapatkan semua fitur dasar untuk mengelola transaksi dengan mudah.
                </h1>
              </div>
              <div className='bg-white p-3 md:p-6 rounded-md shadow-md text-center space-y-2 md:space-y-4'>
                <h1 className='text-xl md:text-2xl font-bold text-gray-900'>Paket Ekonomis</h1>
                <h1 className='text-3xl md:text-5xl text-black font-bold'>Rp.750.000</h1>
                <h1 className='text-xs md:text-lg text-black font-semibold'>/Untuk 6 bulan</h1>
                <p className='text-gray-700 text-xs md:text-lg'>
                  Paket ideal untuk bisnis yang sedang berkembang. Lebih banyak fitur dengan harga lebih hemat.
                </p>
              </div>
              <div className='bg-white p-3 md:p-6 rounded-md shadow-md text-center space-y-2 md:space-y-4'>
                <h1 className='text-xl md:text-2xl font-bold text-gray-900'>Paket Eksekutif</h1>
                <h1 className='text-3xl md:text-5xl text-black font-bold'>Rp.1.100.000</h1>
                <h1 className='text-xs md:text-lg text-black font-semibold'>/Untuk 12 bulan</h1>
                <p className='text-gray-700 text-xs md:text-lg'>
                  Paket premium untuk bisnis besar yang membutuhkan fitur lengkap dan dukungan prioritas. Hemat lebih banyak dengan berlangganan jangka panjang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Price
