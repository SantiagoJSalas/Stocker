import { useState } from 'react';
import { Apple, Armchair, ClipboardX, Instagram, Linkedin, Package, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgLanding from "../../assets/imgLanding.svg";
import 'animate.css';

function LandingPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="space-y-16 text-st_black font-montserrat">

                {/* Navbar */}
                <nav className="flex items-center justify-between p-5 text-xl relative">
                    <ul className="flex items-center space-x-2">
                        <div>
                            <Package size={30} />
                        </div>
                        <li className="text-lg md:text-xl">Stocker</li>
                    </ul>
                    <div className="md:hidden relative">
                        <button onClick={toggleMenu} className="text-st_black">
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
                        <li><a href="#beneficios" className="text-lg md:text-xl">Beneficios</a></li>
                        <li><Link to="/module" className="text-lg md:text-xl">Modulo</Link></li>
                        <li>
                            <button className="bg-[#9FB7A1] text-white py-2 px-6 rounded-lg text-lg md:text-xl">
                                <Link to="/auth">Iniciar Sesion</Link>
                            </button>
                        </li>
                    </ul>
                </nav>

                <main className="flex flex-col-reverse md:flex-row justify-between items-center p-8 md:p-16">
                    <div className="space-y-8">
                        <h1 className="text-3xl md:text-4xl max-w-md">El control del <b className="text-st_blue">inventario,</b> todo en un mismo lugar</h1>
                        <button className="bg-st_blue text-white rounded-lg text-lg md:text-xl py-2 px-8"><Link to="/auth">Empezar</Link></button>
                    </div>
                    <div>
                        <img src={imgLanding} draggable="false" className="w-full max-w-md" />
                    </div>
                </main>

                <section className="bg-st_blue grid grid-flow-row justify-center p-8 md:p-10 space-y-10">
                    <div className="bg-white p-4 rounded-lg text-lg md:text-xl max-w-xl space-y-2 animate__animated animate__fadeInRight" id="beneficios">
                        <div className="flex justify-center items-center space-x-4 font-bold">
                            <Apple />
                            <h1>Optimiza los recursos</h1>
                        </div>
                        <p className="text-center">Controla cuando tus alimentos vencen, o mira que productos tienes en stock</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg text-lg md:text-xl max-w-xl space-y-2 animate__animated animate__fadeInLeft">
                        <div className="flex justify-center items-center space-x-4 font-bold">
                            <Armchair />
                            <h1>Controla tus bienes</h1>
                        </div>
                        <p className="text-center">Conoce en todo momento con que mobiliaria cuentas y en que estado esta</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg text-lg md:text-xl max-w-xl space-y-2 animate__animated animate__fadeInRight">
                        <div className="flex justify-center items-center space-x-4 font-bold">
                            <ClipboardX />
                            <h1>Mejora el orden</h1>
                        </div>
                        <p className="text-center">Ya no necesitas varias hojas de inventario para llevar el control, ten todo en un mismo lugar</p>
                    </div>
                </section>

                <section className="px-8 md:px-16" id="modulo">
                    <div className="space-y-5">
                        <h1 className="text-xl md:text-2xl font-bold">Quieres aprender mas sobre el tema</h1>
                        <p className="text-lg md:text-xl">Prueba nuestro modulo gamificado</p>
                        <button className="bg-st_blue text-white rounded-lg text-lg md:text-xl py-2 px-8"><Link to="/module">Empezar</Link></button>
                    </div>
                </section>

                <footer className="bg-st_blue text-white text-lg md:text-xl flex justify-between p-5">
                    <h1>By Santiago Jiménez</h1>
                    <div className="space-x-10 flex justify-center items-center">
                        <a href="#"><Instagram /></a>
                        <a href="#"><Linkedin /></a>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default LandingPage;
