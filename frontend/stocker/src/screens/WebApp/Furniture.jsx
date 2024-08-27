import { useState, useEffect } from 'react';
import { getAllFurniture, deleteFurniture } from '../../api/furniture'; // Importa las funciones de la API
import { FurnitureModal } from '../../components/RegisterModals';
import Swal from 'sweetalert2';
import { getUser } from '../../utils/getUser';
import { Trash2 } from 'lucide-react';


function Furniture() {
    const [modals, setModals] = useState({ furnituremodal: false });
    const [furnitureItems, setFurnitureItems] = useState([]);
    const user = getUser();
    const companyId = user.id; 

    useEffect(() => {
        fetchFurnitureItems();
    }, []);

    const fetchFurnitureItems = async () => {
        try {
            const fetchedFurniture = await getAllFurniture();
            setFurnitureItems(fetchedFurniture);
        } catch (error) {
            console.error("Error fetching furniture:", error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to fetch furniture items. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };

    const handleDeleteFurniture = async (id) => {
        Swal.fire({
            title: "¿Estas seguro?",
            text: "Si se elimina, no seras capaz de recuperarlo",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteFurniture(id);
                    Swal.fire({
                        title: "¡Eliminado!",
                        text: "El mueble se eliminó con éxito.",
                        icon: "success"
                    });
                    fetchFurnitureItems(); // Refetch para actualizar la lista de muebles
                } catch (error) {
                    console.error("Error deleting furniture:", error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to delete furniture item. Please try again later.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                }
            }
        });
    };

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
                        <h1 className='font-bold'>Sección de Muebles</h1>
                        <button className="bg-st_green text-white p-3 w-fit rounded-lg" onClick={() => openModal('furnituremodal')}>Agregar</button>
                    </div>
                    <div className='h-[90%] overflow-scroll'>
                        <table className="min-w-full text-center text-xl divide-y">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 ">Id</th>
                                    <th className="py-2 px-4 ">Nombre</th>
                                    <th className="py-2 px-4 ">Estado</th>
                                    <th className="py-2 px-4 "></th>
                                </tr>
                            </thead>
                            <tbody className='divide-y'>
                                {furnitureItems.map(item => (
                                    <tr key={item.id}>
                                        <td className="py-2 px-4 ">{item.id}</td>
                                        <td className="py-2 px-4 ">{item.name}</td>
                                        <td className="py-2 px-4 ">{item.state}</td>
                                        <td className="py-2 px-4 space-x-5">
                                            <button onClick={() => handleDeleteFurniture(item.id)}><Trash2 color='#f00' size={30} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <FurnitureModal showModal={modals.furnituremodal} setShowModal={() => closeModal('furnituremodal')} refetchFurniture={fetchFurnitureItems} companyId={companyId} />
            </div>
        </>
    );
}

export default Furniture;
