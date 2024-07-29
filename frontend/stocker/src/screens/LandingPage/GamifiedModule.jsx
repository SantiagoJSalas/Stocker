import { Package } from "lucide-react";
import React from "react";
import { Link } from 'react-router-dom';

function GamifiedModule() {
    return (
        <>
            <div className="bg-imgModule bg-cover h-screen space-y-10 p-5 font-montserrat">
                <nav class="flex items-center justify-between p-5 text-xl bg-white rounded-lg">
                <ul className="flex items-center space-x-2">
						<div>
							<Package size={30} />
						</div>
						<Link to="/">Stocker</Link>
					</ul>
                    <ul class="flex items-center space-x-16">
                        <li><Link to="/"><a>Principal</a></Link></li>
                        <li><a href="#modulo">Modulo</a></li>
                        <li><button class="bg-[#9FB7A1] text-white py-2 p-6 rounded-lg">Iniciar Sesion</button></li>
                    </ul>
                </nav>
                <section class="flex justify-center">
                    <div class="bg-white rounded-lg p-10 text-xl space-y-8 max-w-[85%]">
                        <div class="flex justify-center">
                            <video class="rounded-lg" preload="metadata" autoplay width="75%" loop controls >
                                {/* <source src="Isaac bailando (isaac dance video original).mp4" > */}
                            </video>
                        </div>
                        <div className="animate__animated animate__fadeIn">
                            <h1 class="font-bold">MODULO GAMIFICADO: COMEDORES INFANTILES</h1>
                            <p>Acaba de ocurrir un desastre natural y tomaras brevemente el rol de administrador del comedor; deberas tomar inventario de lo que quedo con los recursos que tengas</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default GamifiedModule;