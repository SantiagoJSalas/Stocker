import { Apple, Armchair, ClipboardX, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgLanding from "../assets/imgLanding.svg"
import 'animate.css';

function LandingPage() {
	return (
		<>
			<div className="space-y-16 text-st_black">

				<nav className="flex items-center justify-between p-5 text-xl"> {/* This is the nav bar */}
					<ul className="flex items-center space-x-5">
						<div className="h-5 w-5 bg-black"></div>
						<li>Stocker</li>
					</ul>
					<ul className="flex items-center space-x-16">
						<li><a href="#beneficios">Beneficios</a></li>
						<li><a><Link to="/module">Modulo</Link></a></li>
						<li><button className="bg-[#9FB7A1] text-white py-2 p-6 rounded-lg">Iniciar Sesion</button></li>
					</ul>
				</nav>


				<main className="flex justify-between items-center p-16"> {/* This is the main section (the catch frase and image) */}
					<div className="space-y-8">
						<h1 className="text-4xl max-w-md">El control del <b className="text-st_blue">inventario,</b> todo en un mismo lugar</h1>
						<button className="bg-st_blue text-white rounded-lg text-xl py-2 px-8">Empezar</button>
					</div>
					<div>
						<img src={imgLanding} draggable="false" />
					</div>
				</main>


				<section className="bg-st_blue grid grid-flow-row justify-center p-10 space-y-10"> {/* This is the benefits section */}

					<div className="bg-white p-4 rounded-lg text-xl max-w-xl space-y-2 animate__animated animate__fadeInRight" id="beneficios">
						<div className="flex justify-center items-center space-x-4 font-bold">
							<Apple />
							<h1>Optimiza los recursos</h1>
						</div>
						<p className="text-center">Controla cuando tus alimentos vencen, o mira que productos tienes en stock</p>
					</div>

					<div className="bg-white p-4 rounded-lg text-xl max-w-xl space-y-2 animate__animated animate__fadeInLeft">
						<div className="flex justify-center items-center space-x-4 font-bold">
							<Armchair />
							<h1>Controla tus bienes</h1>
						</div>
						<p className="text-center">Conoce en todo momento con que mobiliaria cuentas y en que estado esta</p>
					</div>

					<div className="bg-white p-4 rounded-lg text-xl max-w-xl space-y-2 animate__animated animate__fadeInRight">
						<div className="flex justify-center items-center space-x-4 font-bold">
							<ClipboardX />
							<h1>Mejora el orden</h1>
						</div>
						<p className="text-center">Ya no necesitas varias hojas de inventario para llevar el control, ten todo en un mismo lugar</p>
					</div>

				</section>

				<section className="px-16" id="modulo"> {/* This is the gamified module section */}

					<div className="space-y-5">
						<h className="text-2xl font-bold">Quieres aprender mas sobre el tema</h>
						<p className="text-xl">Prueba nuestro modulo gamificado</p>
						<button className="bg-st_blue text-white rounded-lg text-xl py-2 px-8"><Link to="/module">Empezar</Link></button>
					</div>

				</section>

				<footer className="bg-st_blue text-white text-xl flex justify-between p-5"> {/* This is the footer */}
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