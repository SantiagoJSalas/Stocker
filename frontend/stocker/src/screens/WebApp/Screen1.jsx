import React, { useState } from 'react';
import {ResourcesModal, FoodModal, FurnitureModal} from '../../components/RegisterModals';

function Screen1() {
    const [modals, setModals] = useState({
        foodmodal: true,
        resourcemodal: false,
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
            <h1>Test, this shit is working</h1>
            <div>
                <button onClick={() => openModal('foodmodal')} className="bg-blue-500 text-white p-2 rounded ml-4">
                    Open Modal 1
                </button>
                <button onClick={() => openModal('resourcemodal')} className="bg-blue-500 text-white p-2 rounded ml-4">
                    Open Modal 2
                </button>
                <button onClick={() => openModal('furnituremodal')} className="bg-blue-500 text-white p-2 rounded ml-4">
                    Open Modal 2
                </button>
                <FoodModal showModal={modals.foodmodal} setShowModal={() => closeModal('foodmodal')} modalId="foodmodal" />
                <ResourcesModal showModal={modals.resourcemodal} setShowModal={() => closeModal('resourcemodal')} modalId="resourcemodal" />
                <FurnitureModal showModal={modals.furnituremodal} setShowModal={() => closeModal('furnituremodal')} modalId="furnituremodal" />
            </div>
        </>
    );
}

export default Screen1;