import React, { useState } from 'react';
import { X } from 'lucide-react';

export const Food = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="bg-white rounded-lg p-2 flex flex-col justify-center items-center">
                <h1>AGREGAR ALIMENTOS</h1>
                <p>Agrega nuevos alimentos al inventario</p>
                <button className="w-[80%] rounded-lg p-1 bg-st_green font-bold text-white" onClick={toggleModal}>
                    Ir
                </button>
            </div>
            {modal && (
                <div className="modal w-full h-screen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
                    <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-[#D0D0D0] opacity-50" onClick={toggleModal}></div>
                    <div className="space-x-5  w-[50%] bg-white p-4 rounded-lg z-10 animate__animated animate__fadeIn animate__faster">
                        <h1>Registrar alimentos</h1>
                        <div className='p-1 rounded-full bg-st_yellow w-fit'><X color='#FFF' /></div>
                        <input type="text" className="border-2 rounded-lg border-st_black " />
                        <input type="text" className="border-2 rounded-lg border-st_black " />
                        <select type="text" className="border-2 rounded-lg border-st_black ">
                            <option value="">Seleccione una opcion</option>
                            <option value="">Nigga1</option>
                            <option value="">Nigga2</option>
                        </select>
                        <input type="text" className="border-2 rounded-lg border-st_black " />

                    </div>
                </div>
            )}
        </>
    );
};
export const Resourses = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="bg-white rounded-lg p-2">
                <h1>AGREGAR INSUMOS</h1>
                <p>Agrega nuevos recursos al inventarios</p>
                <button className="w-full rounded-lg p-1 bg-st_yellow font-bold text-white" onClick={toggleModal}>Ir</button>
            </div>
            {modal && (
                <div className="modal w-full h-screen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
                    <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-[#D0D0D0] opacity-50" onClick={toggleModal}></div>
                    <div className="space-x-5  w-[50%] bg-white p-4 rounded-lg z-10 animate__animated animate__fadeIn animate__faster">
                        <h1>Registrar alimentos</h1>
                        <div className='p-1 rounded-full bg-st_yellow w-fit'><X color='#FFF' /></div>
                        <input type="text" className="border-2 rounded-lg border-st_black " />
                        <input type="text" className="border-2 rounded-lg border-st_black " />
                        <select type="text" className="border-2 rounded-lg border-st_black ">
                            <option value="">Nigga2</option>
                            <option value="">Seleccione una opcion</option>
                            <option value="">Nigga1</option>
                        </select>
                        <input type="text" className="border-2 rounded-lg border-st_black " />

                    </div>
                </div>
            )}
        </>
    );
};
export const Forniture = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="bg-white rounded-lg p-2">
                <h1>AGREGAR MOBILIARIA</h1>
                <p>Agrega nuevoa mobiliaria al inventarios</p>
                <button className="w-full rounded-lg p-1 bg-st_blue font-bold text-white" onClick={toggleModal}>Ir</button>
            </div>
            {modal && (
                <div className="modal w-full h-screen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
                    <div className="w-full h-screen fixed top-0 left-0 right-0 bottom-0 bg-[#D0D0D0] opacity-50" onClick={toggleModal}></div>
                    <div className="space-x-5  w-[50%] bg-white p-4 rounded-lg z-10 animate__animated animate__fadeIn animate__faster">
                        <h1>Registrar alimentos</h1>
                        <div className='p-1 rounded-full bg-st_yellow w-fit'><X color='#FFF' /></div>
                        <input type="text" className="border-2 rounded-lg border-st_black " />
                        <input type="text" className="border-2 rounded-lg border-st_black " />
                        <select type="text" className="border-2 rounded-lg border-st_black ">
                            <option value="">Nigga1</option>
                            <option value="">Seleccione una opcion</option>
                            <option value="">Nigga2</option>
                        </select>
                        <input type="text" className="border-2 rounded-lg border-st_black " />

                    </div>
                </div>
            )}
        </>
    );
};
