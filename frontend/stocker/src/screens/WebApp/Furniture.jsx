import { Edit3, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { FurnitureModal } from '../../components/RegisterModals';
import Swal from 'sweetalert2';

const FurnitureItems = [
    { id: 1, mueble: 'Mesa', estado: 'Bien' },
    { id: 2, mueble: 'Silla', estado: 'Roto' },
    { id: 3, mueble: 'Mesa', estado: 'Bien' },
    { id: 4, mueble: 'Mesa', estado: 'Reparado' },
    { id: 5, mueble: 'Armario', estado: 'Bien' },
    { id: 6, mueble: 'Mesa', estado: 'Bien' },
    { id: 7, mueble: 'Mesa', estado: 'Roto' },
    { id: 8, mueble: 'Banco', estado: 'Bien' },
];

function DeleteWarning() {
    Swal.fire({
        title: "¿Estas seguro?",
        text: "Si se elimina, no seras capaz de recuperarlo",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "¡Eliminado!",
                text: "El elemento se elimino con exito.",
                icon: "success"
            });
        }
    });
};

function Furniture() {
    const [modals, setModals] = useState({
        furnituremodal: false,
    });

    const openModal = (modalName) => {
        setModals({ ...modals, [modalName]: true });
    };

    const closeModal = (modalName) => {
        setModals({ ...modals, [modalName]: false });
    };
    return (
        <>
            <div className="size-full flex justify-center items-center">
                <div className="bg-white h-[90vh] w-[80vw] rounded-xl p-5 space-y-5 animate__animated animate__fadeIn animate__fast">
                    <div className='flex justify-between items-center text-2xl'>
                        <h1 className='font-bold'>Seccion de mobiliaria</h1>
                        <button className="bg-st_green text-white p-3 w-fit rounded-lg" onClick={() => openModal('furnituremodal')}>Agregar</button>
                    </div>
                    <div className='h-[90%] overflow-scroll'>
                        <table className="min-w-full text-center text-xl divide-y">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 ">Id</th>
                                    <th className="py-2 px-4 ">Alimento</th>
                                    <th className="py-2 px-4 ">Marca</th>
                                    <th className="py-2 px-4 "></th>
                                </tr>
                            </thead>
                            <tbody className='divide-y'>
                                {FurnitureItems.map(item => (
                                    <tr key={item.id}>
                                        <td className="py-2 px-4 ">{item.id}</td>
                                        <td className="py-2 px-4 ">{item.mueble}</td>
                                        <td className="py-2 px-4 ">{item.estado}</td>
                                        <td className="py-2 px-4  space-x-5">
                                            <button><Edit3 size={30} /></button>
                                            <button onClick={DeleteWarning}><Trash2 color='#f00' size={30} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <FurnitureModal showModal={modals.furnituremodal} setShowModal={() => closeModal('furnituremodal')} modalId="furnituremodal" />
            </div>
        </>
    );
}

export default Furniture;