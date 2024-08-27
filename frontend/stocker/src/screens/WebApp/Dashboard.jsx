import { Trash } from "lucide-react";
import { useState } from "react";
import Calendar from 'react-calendar';
import {ResourcesModal, FoodModal, FurnitureModal} from '../../components/RegisterModals';
import Swal from "sweetalert2";

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

function Dashboard() {
    const [modals, setModals] = useState({
        foodmodal: false,
        resourcemodal: false,
        furnituremodal: false,
    });

    const openModal = (modalName) => {
        setModals({ ...modals, [modalName]: true });
    };

    const closeModal = (modalName) => {
        setModals({ ...modals, [modalName]: false });
    };

    const [date, setDate] = useState(new Date());
    return (
        <>
            <div className="w-full h-full grid grid-cols-4 grid-rows-6 text-xl gap-5 animate__animated animate__fadeIn animate__faster font-montserrat">
                <section className="col-span-4 bg-white rounded-lg h-fit p-5 w-full text-2xl">
                    <h1>¡Bienvenido/a de vuelta!</h1>
                    <p>Recuerda siempre echar un vistazo a tu inventario</p>
                </section>

                <section className="col-span-4 row-start-7 grid grid-cols-3 gap-x-5">
                    <div className="bg-white rounded-lg p-3 flex flex-col justify-center items-center space-y-2">
                        <h1>AGREGAR ALIMENTOS</h1>
                        <p>Agrega nuevos alimentos al inventarios</p>
                        <button onClick={() => openModal('foodmodal')} className="w-[80%] rounded-lg p-1 bg-st_green font-bold text-white">Ir</button>
                    </div>
                    <div className="bg-white rounded-lg p-3 flex flex-col justify-center items-center space-y-2">
                        <h1>AGREGAR INSUMOS</h1>
                        <p>Agrega nuevos recursos al inventarios</p>
                        <button onClick={() => openModal('resourcemodal')} className="w-[80%] rounded-lg p-1 bg-st_yellow font-bold text-white">Ir</button>
                    </div>
                    <div className="bg-white rounded-lg p-3 flex flex-col justify-center items-center space-y-2">
                        <h1>AGREGAR MOBILIARIA</h1>
                        <p>Agrega nuevoa mobiliaria al inventarios</p>
                        <button onClick={() => openModal('furnituremodal')} className="w-[80%] rounded-lg p-1 bg-st_blue font-bold text-white">Ir</button>
                    </div>
                </section>
                <FoodModal showModal={modals.foodmodal} setShowModal={() => closeModal('foodmodal')} modalId="foodmodal" />
                <ResourcesModal showModal={modals.resourcemodal} setShowModal={() => closeModal('resourcemodal')} modalId="resourcemodal" />
                <FurnitureModal showModal={modals.furnituremodal} setShowModal={() => closeModal('furnituremodal')} modalId="furnituremodal" />
            </div>
        </>
    );
}

export default Dashboard;