// api/supply.js

const API_BASE_URL = "http://localhost:333/supply"; // Ajusta la URL base según tu configuración

// Crear un nuevo ítem de supply
export const createSupply = async (supplyData) => {
    const response = await fetch(`${API_BASE_URL}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(supplyData),
    });

    if (!response.ok) {
        throw new Error(`Failed to create supply: ${response.statusText}`);
    }

    return await response.json();
};

// Obtener todos los ítems de supply
export const getAllSupplies = async () => {
    const response = await fetch(`${API_BASE_URL}/`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch supplies: ${response.statusText}`);
    }

    return await response.json();
};

// Obtener ítems de supply por ID de compañía
export const getSuppliesByCompanyId = async (companyId) => {
    const response = await fetch(`${API_BASE_URL}/company/${companyId}`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch supplies by company ID: ${response.statusText}`);
    }

    return await response.json();
};

// Obtener un ítem de supply específico por ID
export const getSupplyById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'GET',
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch supply by ID: ${response.statusText}`);
    }

    return await response.json();
};

// Actualizar un ítem de supply específico por ID
export const updateSupply = async (id, updatedData) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
        throw new Error(`Failed to update supply: ${response.statusText}`);
    }

    return await response.json();
};

// Eliminar un ítem de supply específico por ID
export const deleteSupply = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Failed to delete supply: ${response.statusText}`);
    }

    return response.status === 204; // Retornar true si fue eliminado exitosamente
};
