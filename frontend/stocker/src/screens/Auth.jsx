import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, User } from "lucide-react";

function Auth() {
    const navigate = useNavigate(); // Hook for navigation
    const [signUpData, setSignUpData] = useState({ name: "", email: "", companyName: "", password: "", confirmPassword: "" });
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const handleSignUpChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSignUp = async () => {

        if (signUpData.password !== signUpData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        if(signUpData.email == "" || signUpData.companyName == "" || signUpData.password == ""){
            alert("All the infomation need to be filled")
            return;
        }
        
        try {
            const response = await fetch('http://localhost:333/auth/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signUpData),
            });

            if (response.ok) {
                const userData = await response.json();
                localStorage.setItem('user', JSON.stringify(userData)); // Save user data to localStorage
                navigate('/wbA'); // Navigate to the dashboard
            } else {
                const errorData = await response.json();
                console.error("Error:", errorData);
                alert("Failed to create account");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Network error, unable to connect to the server");
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:333/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const userData = await response.json();
                localStorage.setItem('user', JSON.stringify(userData)); // Save user data to localStorage
                navigate('/wbA'); // Navigate to the dashboard
            } else {
                const errorData = await response.json();
                console.error("Error:", errorData);
                alert("Login failed");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Network error, unable to connect to the server");
        }
    };

    return (
        <div className="h-screen bg-imgModule bg-cover flex justify-center items-center font-montserrat">
            <section className="size-8/12 bg-white rounded-lg grid grid-cols-2 divide-x-2 divide-gray divide-opacity-20 animate__animated animate__fadeIn animate__faster">
                <div className="flex flex-col justify-between items-center p-10">
                    <h1 className="text-4xl">CREAR CUENTA</h1>
                    <div className="flex items-center w-full space-x-2 border-2 border-st_gray rounded-lg px-3">
                        <User />
                        <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                        <input name="name" type="text" className="w-full h-14" placeholder="Nombre del administrador" onChange={handleSignUpChange} />
                    </div>
                    <div className="flex items-center w-full space-x-2 border-2 border-st_gray rounded-lg px-3">
                        <User />
                        <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                        <input name="companyName" type="text" className="w-full h-14" placeholder="Nombre del comedor" onChange={handleSignUpChange} />
                    </div>
                    <div className="flex items-center w-full space-x-2 border-2 border-st_gray rounded-lg px-3">
                        <Mail />
                        <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                        <input name="email" type="email" className="w-full h-14" placeholder="Correo electronico" onChange={handleSignUpChange} />
                    </div>
                    <div className="flex items-center w-full space-x-2 border-2 border-st_gray rounded-lg px-3">
                        <Lock />
                        <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                        <input name="password" type="password" className="w-full h-14" placeholder="Contraseña" onChange={handleSignUpChange} />
                    </div>
                    <div className="flex items-center w-full space-x-2 border-2 border-st_gray rounded-lg px-3">
                        <Lock />
                        <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                        <input name="confirmPassword" type="password" className="w-full h-14" placeholder="Confirmar contraseña" onChange={handleSignUpChange} />
                    </div>
                    <button className="w-[80%] p-4 rounded-xl bg-st_blue text-white text-2xl" onClick={handleSignUp}>Crear Cuenta</button>
                </div>

                <div className="flex flex-col justify-between items-center p-10">
                    <h1 className="text-4xl">INICIAR SESION</h1>
                    <div className="flex items-center w-full space-x-2 border-2 border-st_gray rounded-lg px-3">
                        <Mail />
                        <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                        <input name="email" type="email" className="w-full h-14" placeholder="Correo electronico" onChange={handleLoginChange} />
                    </div>
                    <div className="flex items-center w-full space-x-2 border-2 border-st_gray rounded-lg px-3">
                        <Lock />
                        <span className="h-[90%] w-[2px] rounded-full bg-st_gray"></span>
                        <input name="password" type="password" className="w-full h-14" placeholder="Contraseña" onChange={handleLoginChange} />
                    </div>
                    <button className="w-[80%] p-4 rounded-xl bg-st_blue text-white text-2xl" onClick={handleLogin}>Iniciar Sesion</button>
                </div>
            </section>
        </div>
    );
}

export default Auth;
