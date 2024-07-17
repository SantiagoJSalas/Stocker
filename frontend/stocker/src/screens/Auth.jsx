import React from "react";
import { Link } from "react-router-dom";
import { Lock, Mail, User } from "lucide-react";

function Auth() {
    return (
        <>
            <div className="h-screen bg-imgModule bg-cover flex justify-center items-center">
                <section className="size-8/12 bg-white rounded-lg grid grid-cols-2 divide-x-2 divide-gray divide-opacity-20">

                    <div className="flex flex-col justify-between items-center p-10">
                        <h1 className="text-4xl">CREAR CUENTA</h1>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <User />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input type="text" className="w-full h-14" placeholder="Nombre del administrador" />
                        </div>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <Mail />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input className="w-full h-14" type="email" placeholder="Correo electronico" />
                        </div>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <Lock />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input className="w-full h-14 border-st_gray " type="password" placeholder="Contraseña" />
                        </div>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <Lock />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input className="w-full h-14 border-st_gray " type="password" placeholder="Confirmar contraseña" />
                        </div>
                        <button className="w-[80%] p-4 rounded-xl bg-st_blue text-white text-2xl">Crear Cuenta</button>
                    </div>

                    <div className="flex flex-col justify-between items-center p-10">
                        <h1 className="text-4xl">INICIAR SESION</h1>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <Mail />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input className="w-full h-14" type="email" placeholder="Correo electronico" />
                        </div>
                        <div className="flex items-center w-full space-x-2  border-2 border-st_gray rounded-lg px-3">
                            <Lock />
                            <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                            <input className="w-full h-14 border-st_gray " type="password" placeholder="Contraseña" />
                        </div>
                        <button className="w-[80%] p-4 rounded-xl bg-st_blue text-white text-2xl"><Link to="/wba">Iniciar Sesion</Link></button>
                    </div>

                </section>
            </div>
        </>
    );
}

export default Auth;