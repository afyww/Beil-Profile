import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/images/Logo.svg'

const navLinks = [
    { title: 'Tentang', href: '#tentang' },
    { title: 'Fitur', href: '#fitur' },
    { title: 'Harga', href: '#harga' },
    { title: 'Hubungi Kami', href: '#hubungi' }
];

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // Adjust this value based on your mobile breakpoint
        };

        handleResize(); // Call once to initialize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const modalVariants = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween', // Set transition type to 'tween'
                duration: 0.3, // Specify duration
            },
        },
        exit: {
            y: '-100vh',
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: 0.3,
            },
        },
    };

    const linkItemVariants = {
        hidden: { opacity: 0, y: '50%' },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" // Add ease-out easing function
            },
        },
        exit: {
            opacity: 0,
            y: '50%',
            transition: {
                duration: 0.1,
                ease: "easeOut" // Add ease-out easing function
            }
        },
    };

    const navLinksVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    return (
        <nav className="bg-white z-10 fixed top-0 right-0 left-0 md:left-0 md:right-0 p-4 md:p-8">
            <div className="flex justify-between xl:mx-12">
                <div className='w-20 h-12 md:w-44 md:h-20'>
                    <a href="/">
                    <img className='w-full h-full' src={Logo} alt="" />
                    </a>
                </div>
                {isMobileView ? (
                    <button className="text-black">
                        {showModal ? (
                            <FaTimes onClick={toggleModal} className="xl:w-10 xl:h-8 w-6 h-6" />
                        ) : (
                            <FaBars onClick={toggleModal} className="xl:w-10 xl:h-8 w-6 h-6" />
                        )}
                    </button>
                ) : (
                    <div className="hidden sm:flex gap-10 my-auto">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="text-black hover:underline hover:text-red-800 transition-all delay-100 text-3xl font-base">
                                {link.title}
                            </a>
                        ))}
                    </div>
                )}
            </div>
            <AnimatePresence>
                {showModal && isMobileView && (
                    <motion.div
                        className="fixed inset-0 flex justify-center items-center bg-red-800"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <FaTimes
                            className="absolute top-7 right-4 text-white cursor-pointer w-6 h-6"
                            onClick={toggleModal}
                        />
                        <motion.div
                            className="relative bg-red-800 w-full"
                            variants={navLinksVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="flex flex-col gap-8 items-end justify-end p-4 h-full ">
                                {navLinks.map((link, index) => (
                                    <motion.span key={index} className="text-white text-5xl font-bold" variants={linkItemVariants} onClick={closeModal}>
                                        <a href={link.href}>{link.title}</a>
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
