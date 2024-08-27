const API_BASE_URL = "http://localhost:333/foods";

// Crear un nuevo ítem de comida
export async function createFood(foodData) {
    console.log(foodData);
    try {
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(foodData),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to create food item:", error);
        throw error;
    }
}

// Obtener todos los ítems de comida
export async function getAllFoods() {
    try {
        const response = await fetch(API_BASE_URL, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to fetch food items:", error);
        throw error;
    }
}

// Obtener ítems de comida por ID de compañía
export async function getFoodsByCompanyId(companyId) {
    try {
        const response = await fetch(`${API_BASE_URL}/company/${companyId}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to fetch food items by company ID:", error);
        throw error;
    }
}

// Obtener un ítem de comida específico por ID
export async function getFoodById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to fetch food item by ID:", error);
        throw error;
    }
}

// Actualizar un ítem de comida específico por ID
export async function updateFood(id, updatedData) {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to update food item:", error);
        throw error;
    }
}

// Eliminar un ítem de comida específico por ID
export async function deleteFood(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response.data; // Retornar true si fue eliminado exitosamente
    } catch (error) {
        console.error("Failed to delete food item:", error);
        throw error;
    }
}
