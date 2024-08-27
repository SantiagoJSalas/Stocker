import { Edit3, Trash2 } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react'; // Importa useCallback para optimización
import { FoodModal } from '../../components/RegisterModals';
import Swal from 'sweetalert2';
import { getFoodsByCompanyId, deleteFood } from '../../api/food';
import { getUser } from '../../utils/getUser';
function DeleteWarning(refetchFoods, id) {
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
        console.log(result)
        if (result.isConfirmed) {
            deleteFood(id)
            Swal.fire({
                title: "¡Eliminado!",
                text: "El elemento se elimino con exito.",
                icon: "success"
            }).then(() => {
                refetchFoods(); // Llama a la función de refetch
            });
        }
    });
};

function Food() {
    const [modals, setModals] = useState({
        foodmodal: false,
    });
    const [foodItems, setFoodItems] = useState([]);
    const user = getUser();
    const companyId = user.id; // Ajusta esto con el ID de tu empresa

    const fetchFoodItems = useCallback(async () => {
        try {
            const foods = await getFoodsByCompanyId(companyId); // Llama a la API para obtener los alimentos
            setFoodItems(foods);
        } catch (error) {
            console.error("Error fetching food items by company ID:", error);
            Swal.fire({
                title: "Error",
                text: "No se pudieron cargar los alimentos. Por favor, inténtalo de nuevo más tarde.",
                icon: "error"
            });
        }
    }, [companyId]);

    useEffect(() => {
        fetchFoodItems(); // Ejecuta la función al montar el componente
    }, [fetchFoodItems]);

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
                        <h1 className='font-bold'>Sección de alimentos</h1>
                        <button className="bg-st_green text-white p-3 w-fit rounded-lg" onClick={() => openModal('foodmodal')}>Agregar</button>
                    </div>
                    <div className='h-[90%] overflow-scroll'>
                        <table className="min-w-full text-center text-xl divide-y">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 ">Nombre</th>
                                    <th className="py-2 px-4 ">Marca</th>
                                    <th className="py-2 px-4 ">Stock</th>
                                    <th className="py-2 px-4 ">Fecha de Caducidad</th>
                                    <th className="py-2 px-4 "></th>
                                </tr>
                            </thead>
                            <tbody className='divide-y'>
                                {foodItems?.map(item => (
                                    <tr key={item.id}>
                                        <td className="py-2 px-4 ">{item.name}</td>
                                        <td className="py-2 px-4 ">{item.brand}</td>
                                        <td className="py-2 px-4 ">{item.stock}</td>
                                        <td className="py-2 px-4 ">{new Date(item.spoilingDate).toLocaleDateString()}</td>
                                        <td className="py-2 px-4  space-x-5">
                                            <button onClick={() => DeleteWarning(fetchFoodItems, item.id)}><Trash2 color='#f00' size={30} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <FoodModal companyId={companyId} showModal={modals.foodmodal} setShowModal={() => closeModal('foodmodal')} refetchFoods={fetchFoodItems} modalId="foodmodal" />
            </div>
        </>
    );
}

export default Food;
