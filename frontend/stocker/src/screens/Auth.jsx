import React from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, User, House } from "lucide-react";

function Auth() {
    return (
        <>
            <div className="h-screen bg-imgModule backdrop-filter bg-cover flex justify-center items-center font-montserrat">
                <section className="size-9/12 bg-white rounded-lg grid grid-cols-2 divide-x-2 divide-gray divide-opacity-20 animate__animated animate__fadeIn animate__faster">
                    <div className="flex flex-col justify-between items-center p-10">
                        <h1 className="text-4xl">CREAR CUENTA</h1>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <House />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input type="text" className="w-full h-14 outline-none" placeholder="Nombre del comedor" />
                        </div>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <User />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input type="text" className="w-full h-14 outline-none" placeholder="Nombre del administrador" />
                        </div>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <Mail />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input className="w-full h-14 outline-none" type="email" placeholder="Correo electronico" />
                        </div>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <Lock />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input className="w-full h-14 outline-none" type="password" placeholder="Contraseña" />
                        </div>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <Lock />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input className="w-full h-14 outline-none" type="password" placeholder="Confirmar contraseña" />
                        </div>
                        <button className="w-[80%] p-4 rounded-xl bg-st_blue text-white text-2xl">Crear Cuenta</button>
                    </div>

                    <div className="flex flex-col justify-between items-center p-10">
                        <h1 className="text-4xl">INICIAR SESION</h1>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <Mail />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input className="w-full h-14 outline-none" type="email" placeholder="Correo electronico" />
                        </div>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <Lock />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input className="w-full h-14 outline-none" type="password" placeholder="Contraseña" />
                        </div>
                        <button className="w-[80%] p-4 rounded-xl bg-st_blue text-white text-2xl"><Link to="/wba">Iniciar Sesion</Link></button>
                    </div>

                </section>
            </div>
        </>
    );
}

export default Auth;