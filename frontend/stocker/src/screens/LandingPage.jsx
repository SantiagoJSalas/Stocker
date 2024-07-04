import {Apple,Armchair,ClipboardX,Instagram ,Linkedin } from 'lucide-react';
import imgLanding from "../assets/imgLanding.svg"
import 'animate.css';

function LandingPage() {
    return (
        <>
        <div className="space-y-16 text-st_black">
<nav class="flex items-center justify-between p-5 text-xl">
        <ul class="flex items-center space-x-5">
            <div class="h-5 w-5 bg-black"></div>
            <li><a href="#">Stocker</a></li>
        </ul>
        <ul class="flex items-center space-x-16">
            <li><a href="#beneficios">Beneficios</a></li>
            <li><>Modulo</></li>
            <li><button class="bg-[#9FB7A1] text-white py-2 p-6 rounded-lg">Iniciar Sesion</button></li>
        </ul>
	</nav>

    <main class="flex justify-between items-center p-16">
        <div class="space-y-8">
            <h1 class="text-4xl max-w-md">El control del <b class="text-st_blue">inventario,</b> todo en un mismo lugar</h1>
            <button class="bg-st_blue text-white rounded-lg text-xl py-2 px-8">Empezar</button>
        </div>
        <div>
            <img src={imgLanding} draggable="false"/>
        </div>
    </main>

    <section class="bg-st_blue grid grid-flow-row justify-center p-10 space-y-10">

        <div class="bg-white p-4 rounded-lg text-xl max-w-xl space-y-2 animate__animated animate__bounce" id="beneficios">
            <div class="flex justify-center items-center space-x-4 font-bold">
            <Apple />
                <h1>Optimiza los recursos</h1>
            </div>
            <p class="text-center">Controla cuando tus alimentos vencen, o mira que productos tienes en stock</p>
        </div>

        <div class="bg-white p-4 rounded-lg text-xl max-w-xl space-y-2">
            <div class="flex justify-center items-center space-x-4 font-bold">
            <Armchair />
                <h1>Controla tus bienes</h1>
            </div>
            <p class="text-center">Conoce en todo momento con que mobiliaria cuentas y en que estado esta</p>
        </div>

        <div class="bg-white p-4 rounded-lg text-xl max-w-xl space-y-2">
            <div class="flex justify-center items-center space-x-4 font-bold">
            <ClipboardX />
                <h1>Mejora el orden</h1>
            </div>
            <p class="text-center">Ya no necesitas varias hojas de inventario para llevar el control, ten todo en un mismo lugar</p>
        </div>

    </section>

    <section class="px-16" id="modulo">

        <div class="space-y-5">
            <h class="text-2xl font-bold">Quieres aprender mas sobre el tema</h>
            <p class="text-xl">Prueba nuestro modulo gamificado</p>
            <button class="bg-st_blue text-white rounded-lg text-xl py-2 px-8">Empezar</button>
        </div>

    </section>

    <footer class="bg-st_blue text-white text-xl flex justify-between p-5">
        <h1>By Santiago Jiménez</h1>
        <div class="space-x-10 flex justify-center items-center">
            <a href="#"><Instagram/></a>
            <a href="#"><Linkedin/></a>
        </div>
    </footer>

        </div>
    </>
    );
}

export default LandingPage;