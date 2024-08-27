import { Edit3, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import ResourcesModal from '../../components/RegisterModals';
import Swal from 'sweetalert2';
import { getUser } from "../../utils/getUser"
import { getAllSupplies, createSupply, deleteSupply } from '../../api/supply'; // Importa las funciones de la API

function Resources() {
    const [modals, setModals] = useState({
        resourcemodal: false,
    });
    const [resources, setResources] = useState([]); // Estado para almacenar los recursos
    const user = getUser()

    const companyId = user.id

    useEffect(() => {
        fetchResources(); // Cargar recursos al montar el componente
    }, []);

    const fetchResources = async () => {
        try {
            const fetchedResources = await getAllSupplies();
            setResources(fetchedResources);
        } catch (error) {
            console.error("Error fetching resources:", error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to fetch resources. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };

    const handleDeleteResource = async (id) => {
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
                    await deleteSupply(id);
                    Swal.fire({
                        title: "¡Eliminado!",
                        text: "El elemento se elimino con exito.",
                        icon: "success"
                    });
                    fetchResources(); // Refetch para actualizar la lista de recursos
                } catch (error) {
                    console.error("Error deleting resource:", error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to delete resource. Please try again later.',
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

    const handleAddResource = async (resourceData) => {
        try {
            await createSupply(resourceData);
            Swal.fire({
                title: 'Success!',
                text: 'Resource added successfully.',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            fetchResources(); // Refetch para actualizar la lista de recursos
        } catch (error) {
            console.error("Error creating resource:", error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add resource. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };

    return (
        <>
            <div className="size-full flex justify-center items-center font-montserrat">
                <div className="bg-white h-[90vh] w-[80vw] rounded-xl p-5 space-y-5 animate__animated animate__fadeIn animate__fast">
                    <div className='flex justify-between items-center text-2xl'>
                        <h1 className='font-bold'>Sección de recursos</h1>
                        <button className="bg-st_green text-white p-3 w-fit rounded-lg" onClick={() => openModal('resourcemodal')}>Agregar</button>
                    </div>
                    <div className='h-[90%] overflow-scroll'>
                        <table className="min-w-full text-center text-xl divide-y">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 ">Recurso</th>
                                    <th className="py-2 px-4 ">Marca</th>
                                    <th className="py-2 px-4 ">Cantidad</th>
                                    <th className="py-2 px-4 ">Categoria</th>
                                    <th className="py-2 px-4 "></th>
                                </tr>
                            </thead>
                            <tbody className='divide-y'>
                                {resources.map(item => (
                                    <tr key={item.id}>
                                        <td className="py-2 px-4 ">{item.name}</td>
                                        <td className="py-2 px-4 ">{item.brand}</td>
                                        <td className="py-2 px-4 ">{item.stock}</td>
                                        <td className="py-2 px-4 ">{item.category}</td>
                                        <td className="py-2 px-4  space-x-5">
                                            <button onClick={() => handleDeleteResource(item.id)}><Trash2 color='#f00' size={30} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ResourcesModal refetchResources={fetchResources} showModal={modals.resourcemodal} setShowModal={() => closeModal('resourcemodal')} companyId={companyId} modalId="resourcemodal" />
            </div>
        </>
    );
}

export default Resources;
