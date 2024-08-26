import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function GamifiedModule() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="bg-imgModule bg-cover h-screen space-y-10 p-5 font-montserrat">

                {/* Navbar */}
                <nav className="flex items-center justify-between p-5 text-xl bg-white rounded-lg relative">
                    <ul className="flex items-center space-x-5">
                        <div className="h-5 w-5 bg-black"></div>
                        <li><Link to="/" className="text-lg md:text-xl">Stocker</Link></li>
                    </ul>
                    
                    <div className="md:hidden relative">
                        <button onClick={toggleMenu} className="text-black">
                            <Menu size={30} />
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute right-0 mt-2 bg-[#9FB7A1] text-white p-4 rounded-lg w-40 z-50 flex flex-col">
                                <button className="self-end mb-4" onClick={toggleMenu}>
                                    <X size={30} className="text-white" />
                                </button>
                                <ul className="space-y-4">
                                    <li><Link to="/" onClick={toggleMenu}>Principal</Link></li>
                                    <li><a href="#modulo" onClick={toggleMenu}>Modulo</a></li>
                                    <li>
                                        <Link to="/auth" onClick={toggleMenu} className="bg-white text-[#9FB7A1] py-2 px-4 rounded-lg text-center block">
                                            Iniciar Sesion
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Regular Navbar Links for Larger Screens */}
                    <ul className="hidden md:flex items-center space-x-16">
                        <li><Link to="/" className="text-lg md:text-xl">Principal</Link></li>
                        <li><a href="#modulo" className="text-lg md:text-xl">Modulo</a></li>
                        <li>
                            <button className="bg-[#9FB7A1] text-white py-2 px-6 rounded-lg text-lg md:text-xl">
                                <Link to="/auth">Iniciar Sesion</Link>
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Content Section */}
                <section className="flex justify-center">
                    <div className="bg-white rounded-lg p-10 text-lg md:text-xl space-y-8 max-w-[85%]">
                        <div className="flex justify-center">
                            <video className="rounded-lg" preload="metadata" autoPlay width="75%" loop controls >
                                {/* <source src="Isaac bailando (isaac dance video original).mp4" > */}
                            </video>
                        </div>
                        <div className="animate__animated animate__fadeIn">
                            <h1 className="font-bold">MODULO GAMIFICADO: COMEDORES INFANTILES</h1>
                            <p>Acaba de ocurrir un desastre natural y tomaras brevemente el rol de administrador del comedor; deberas tomar inventario de lo que quedo con los recursos que tengas</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default GamifiedModule;
