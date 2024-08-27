const API_BASE_URL = "http://localhost:333/furniture"; // Ajusta la URL base según tu configuración

// Crear un nuevo ítem de furniture
export const createFurniture = async (furnitureData) => {
    const response = await fetch(`${API_BASE_URL}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(furnitureData),
    });

    if (!response.ok) {
        throw new Error(`Failed to create furniture: ${response.statusText}`);
    }

    return await response.json();
};

// Obtener todos los ítems de furniture
export const getAllFurniture = async () => {
    const response = await fetch(`${API_BASE_URL}/`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch furniture: ${response.statusText}`);
    }

    return await response.json();
};

// Obtener ítems de furniture por ID de compañía
export const getFurnitureByCompanyId = async (companyId) => {
    const response = await fetch(`${API_BASE_URL}/company/${companyId}`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch furniture by company ID: ${response.statusText}`);
    }

    return await response.json();
};

// Obtener un ítem de furniture específico por ID
export const getFurnitureById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch furniture by ID: ${response.statusText}`);
    }

    return await response.json();
};

// Actualizar un ítem de furniture específico por ID
export const updateFurniture = async (id, updatedData) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
        throw new Error(`Failed to update furniture: ${response.statusText}`);
    }

    return await response.json();
};

// Eliminar un ítem de furniture específico por ID
export const deleteFurniture = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Failed to delete furniture: ${response.statusText}`);
    }

    return response.status === 204; // Retornar true si fue eliminado exitosamente
};
