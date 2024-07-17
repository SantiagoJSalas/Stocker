import { Edit3, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { FoodModal } from '../../components/RegisterModals';
import Swal from 'sweetalert2';

const FoodItems = [
    { id: 2, alimento: 'Arroz', marca: 'Tio Pelon', cantidad: 3, fechaCaducidad: '2/5/24' },
    { id: 3, alimento: 'Arroz', marca: 'Tio Pelon', cantidad: 3, fechaCaducidad: '2/5/24' },
    { id: 4, alimento: 'Arroz', marca: 'Tio Pelon', cantidad: 3, fechaCaducidad: '2/5/24' },
    { id: 5, alimento: 'Arroz', marca: 'Tio Pelon', cantidad: 3, fechaCaducidad: '2/5/24' },
    { id: 6, alimento: 'Arroz', marca: 'Tio Pelon', cantidad: 3, fechaCaducidad: '2/5/24' },
    { id: 7, alimento: 'Arroz', marca: 'Tio Pelon', cantidad: 3, fechaCaducidad: '2/5/24' },
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

function Food() {
    const [modals, setModals] = useState({
        foodmodal: false,
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
                        <h1 className='font-bold'>Seccion de alimentos</h1>
                        <button className="bg-st_green text-white p-3 w-fit rounded-lg" onClick={() => openModal('foodmodal')}>Agregar</button>
                    </div>
                    <div className='h-[90%] overflow-scroll'>
                        <table className="min-w-full text-center text-xl divide-y">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 ">Id</th>
                                    <th className="py-2 px-4 ">Alimento</th>
                                    <th className="py-2 px-4 ">Marca</th>
                                    <th className="py-2 px-4 ">Cantidad</th>
                                    <th className="py-2 px-4 ">Caducidad</th>
                                    <th className="py-2 px-4 "></th>
                                </tr>
                            </thead>
                            <tbody className='divide-y'>
                                {FoodItems.map(item => (
                                    <tr key={item.id}>
                                        <td className="py-2 px-4 ">{item.id}</td>
                                        <td className="py-2 px-4 ">{item.alimento}</td>
                                        <td className="py-2 px-4 ">{item.marca}</td>
                                        <td className="py-2 px-4 ">{item.cantidad}</td>
                                        <td className="py-2 px-4 ">{item.fechaCaducidad}</td>
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
                <FoodModal showModal={modals.foodmodal} setShowModal={() => closeModal('foodmodal')} modalId="foodmodal" />
            </div>
        </>
    );
}

export default Food;