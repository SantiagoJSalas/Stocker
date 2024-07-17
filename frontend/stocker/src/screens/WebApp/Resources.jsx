import { Edit3, Trash2 } from 'lucide-react';
import { useState } from 'react';
import ResourcesModal from '../../components/RegisterModals';
import Swal from 'sweetalert2';

const ResourcesItems = [
    { id: 1, recurso: 'Papel Higienico', marca: 'Rosal', cantidad: 3, categoria: 'Baño' },
    { id: 2, recurso: 'Papel Higienico', marca: 'Rosal', cantidad: 3, categoria: 'Baño' },
    { id: 3, recurso: 'Papel Higienico', marca: 'Rosal', cantidad: 3, categoria: 'Baño' },
    { id: 4, recurso: 'Papel Higienico', marca: 'Rosal', cantidad: 3, categoria: 'Baño' },
    { id: 5, recurso: 'Papel Higienico', marca: 'Rosal', cantidad: 3, categoria: 'Baño' },
    { id: 6, recurso: 'Papel Higienico', marca: 'Rosal', cantidad: 3, categoria: 'Baño' },
    { id: 7, recurso: 'Papel Higienico', marca: 'Rosal', cantidad: 3, categoria: 'Baño' },
    { id: 8, recurso: 'Papel Higienico', marca: 'Rosal', cantidad: 3, categoria: 'Baño' },
    { id: 9, recurso: 'Papel Higienico', marca: 'Rosal', cantidad: 3, categoria: 'Baño' },
    { id: 10, recurso: 'Papel Higienico', marca: 'Rosal', cantidad: 3, categoria: 'Baño' },
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

function Resources() {
    const [modals, setModals] = useState({
        resourcemodal: false,
    });

    const openModal = (modalName) => {
        setModals({ ...modals, [modalName]: true });
    };

    const closeModal = (modalName) => {
        setModals({ ...modals, [modalName]: false });
    };
    return (
        <>
            <div className="size-full flex justify-center items-center font-montserrat">
                <div className="bg-white h-[90vh] w-[80vw] rounded-xl p-5 space-y-5 animate__animated animate__fadeIn animate__fast">
                    <div className='flex justify-between items-center text-2xl'>
                        <h1 className='font-bold'>Seccion de recursos</h1>
                        <button className="bg-st_green text-white p-3 w-fit rounded-lg" onClick={() => openModal('resourcemodal')}>Agregar</button>
                    </div>
                    <div className='h-[90%] overflow-scroll'>
                        <table className="min-w-full text-center text-xl divide-y">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 ">Id</th>
                                    <th className="py-2 px-4 ">Recurso</th>
                                    <th className="py-2 px-4 ">Marca</th>
                                    <th className="py-2 px-4 ">Cantidad</th>
                                    <th className="py-2 px-4 ">Categoria</th>
                                    <th className="py-2 px-4 "></th>
                                </tr>
                            </thead>
                            <tbody className='divide-y'>
                                {ResourcesItems.map(item => (
                                    <tr key={item.id}>
                                        <td className="py-2 px-4 ">{item.id}</td>
                                        <td className="py-2 px-4 ">{item.recurso}</td>
                                        <td className="py-2 px-4 ">{item.marca}</td>
                                        <td className="py-2 px-4 ">{item.cantidad}</td>
                                        <td className="py-2 px-4 ">{item.categoria}</td>
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
                <ResourcesModal showModal={modals.resourcemodal} setShowModal={() => closeModal('resourcemodal')} modalId="resourcemodal" />
            </div>
        </>
    );
}

export default Resources;