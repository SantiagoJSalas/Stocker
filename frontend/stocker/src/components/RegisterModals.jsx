import { useState, useEffect } from 'react';
import { X } from "lucide-react";
import Swal from 'sweetalert2';
import { createFood } from '../api/food';
import { createSupply } from '../api/supply';
import { createFurniture } from '../api/furniture';

export const FoodModal = ({ showModal, setShowModal, companyId, refetchFoods }) => {
  const [inputs, setInputs] = useState({
      name: '',
      brand: '',
      stock: '',
      spoilingDate: ''
  });
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
      if (showModal) {
          setAnimationClass('animate__animated animate__fadeIn');
      }
  }, [showModal]);

  const handleClose = () => {
      const hasText = Object.values(inputs).some(input => input !== '');
      if (hasText) {
          Swal.fire({
              title: 'Are you sure?',
              text: "Changes you made will not be saved.",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, close it!',
              cancelButtonText: 'No, keep it'
          }).then(result => {
              if (result.isConfirmed) {
                  setAnimationClass('animate__animated animate__fadeOut animate__faster');
                  setTimeout(() => setShowModal(false), 450);
              }
          });
      } else {
          setAnimationClass('animate__animated animate__fadeOut animate__faster');
          setTimeout(() => setShowModal(false), 450);
      }
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      // Verificar que todos los campos están llenos
      if (Object.values(inputs).some(input => input === '')) {
          Swal.fire({
              title: 'Error!',
              text: 'Please fill in all the fields.',
              icon: 'error',
              confirmButtonText: 'Ok'
          });
          return;
      }

      // Crear el objeto con los datos del alimento
      const foodData = {
          name: inputs.name,
          brand: inputs.brand,
          stock: parseInt(inputs.stock, 10),
          spoilingDate: new Date(inputs.spoilingDate),
          companyId: companyId,
      };

      try {
          // Llamar a la API para crear el alimento
          await createFood(foodData);

          Swal.fire({
              title: 'Success!',
              text: 'The data has been registered successfully.',
              icon: 'success',
              confirmButtonText: 'Ok'
          }).then(() => {
              setAnimationClass('animate__animated animate__fadeOut');
              setTimeout(() => {
                  setShowModal(false);
                  setInputs({ name: '', brand: '', stock: '', spoilingDate: '' });
                  refetchFoods(); // Actualizar la lista de alimentos después de la creación
              }, 500);
          });
      } catch (error) {
          Swal.fire({
              title: 'Error!',
              text: 'Failed to create food item. Please try again.',
              icon: 'error',
              confirmButtonText: 'Ok'
          });
      }
  };

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  };

  if (!showModal) return null;

  return (
      <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ${animationClass}`}>
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={handleClose} className="absolute top-2 right-2">
                  <div className="bg-st_yellow rounded-full w-fit p-1 text-white text-xl ">
                      <X />
                  </div>
              </button>
              <h2 className="text-center mb-4 text-2xl">Registrar alimentos</h2>
              <form className="space-y-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-10">
                      <input
                          type="text"
                          name="name"
                          value={inputs.name}
                          onChange={handleInputChange}
                          className="border p-2 rounded"
                          placeholder="Comida"
                      />
                      <input
                          type="text"
                          name="brand"
                          value={inputs.brand}
                          onChange={handleInputChange}
                          className="border p-2 rounded"
                          placeholder="Marca"
                      />
                      <input
                          type="number"
                          name="stock"
                          value={inputs.stock}
                          onChange={handleInputChange}
                          className="border p-2 rounded"
                          placeholder="Cantidad"
                          min={1}
                      />
                      <input 
                          type="date"
                          name="spoilingDate" 
                          value={inputs.spoilingDate} 
                          onChange={handleInputChange} 
                          className="border p-2 rounded"
                      />
                  </div>
                  <button type="submit" className="bg-st_green text-white p-2 rounded-lg w-full mt-4 text-xl">
                      Registrar
                  </button>
              </form>
          </div>
      </div>
  );
};

export const ResourcesModal = ({ showModal, setShowModal, refetchResources, companyId }) => {
  const [inputs, setInputs] = useState({
      name: '',
      brand: '',
      stock: '',
      category: ''
  });
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
      if (showModal) {
          setAnimationClass('animate__animated animate__fadeIn');
      }
  }, [showModal]);

  const handleClose = () => {
      const hasText = Object.values(inputs).some(input => input !== '');
      if (hasText) {
          Swal.fire({
              title: 'Are you sure?',
              text: "Changes you made will not be saved.",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, close it!',
              cancelButtonText: 'No, keep it'
          }).then(result => {
              if (result.isConfirmed) {
                  setAnimationClass('animate__animated animate__fadeOut animate__faster');
                  setTimeout(() => setShowModal(false), 450);
              }
          });
      } else {
          setAnimationClass('animate__animated animate__fadeOut animate__faster');
          setTimeout(() => setShowModal(false), 450);
      }
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      // Verificar que todos los campos están llenos
      if (Object.values(inputs).some(input => input === '')) {
          Swal.fire({
              title: 'Error!',
              text: 'Please fill in all the fields.',
              icon: 'error',
              confirmButtonText: 'Ok'
          });
          return;
      }

      // Crear el objeto con los datos del recurso
      const supplyData = {
          name: inputs.name,
          brand: inputs.brand,
          stock: parseInt(inputs.stock, 10),
          category: inputs.category,
          companyId: companyId,
      };

      try {
          // Llamar a la API para crear el recurso
          await createSupply(supplyData);

          Swal.fire({
              title: 'Success!',
              text: 'The resource has been registered successfully.',
              icon: 'success',
              confirmButtonText: 'Ok'
          }).then(() => {
              setAnimationClass('animate__animated animate__fadeOut');
              setTimeout(() => {
                  setShowModal(false);
                  setInputs({ name: '', brand: '', stock: '', category: '' });
                  refetchResources(); // Actualizar la lista de recursos después de la creación
              }, 500);
          });
      } catch (error) {
          Swal.fire({
              title: 'Error!',
              text: 'Failed to create resource. Please try again.',
              icon: 'error',
              confirmButtonText: 'Ok'
          });
      }
  };

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  };

  if (!showModal) return null;

  return (
      <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ${animationClass}`}>
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={handleClose} className="absolute top-2 right-2">
                  <div className="bg-st_yellow rounded-full w-fit p-1 text-white text-xl ">
                      <X />
                  </div>
              </button>
              <h2 className="text-center mb-4 text-2xl">Registrar recursos</h2>
              <form className="space-y-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-10">
                      <input
                          type="text"
                          name="name"
                          value={inputs.name}
                          onChange={handleInputChange}
                          className="border p-2 rounded"
                          placeholder="Recurso"
                      />
                      <input
                          type="text"
                          name="brand"
                          value={inputs.brand}
                          onChange={handleInputChange}
                          className="border p-2 rounded"
                          placeholder="Marca"
                      />
                      <input
                          type="number"
                          name="stock"
                          value={inputs.stock}
                          onChange={handleInputChange}
                          className="border p-2 rounded"
                          placeholder="Cantidad"
                          min={1}
                      />
                      <select
                          name="category"
                          value={inputs.category}
                          onChange={handleInputChange}
                          className="border p-2 rounded"
                      >
                          <option value="" disabled>Seleccione una categoria</option>
                          <option value="Material Didáctico">Material Didáctico</option>
                          <option value="Material de Limpieza">Material de Limpieza</option>
                          <option value="Suministros de Oficina">Suministros de Oficina</option>
                          <option value="Ropa y Textiles">Ropa y Textiles</option>
                          <option value="Equipos de Cocina">Equipos de Cocina</option>
                          <option value="Tecnología y Electrónica">Tecnología y Electrónica</option>
                          <option value="Otro">Otro</option>
                      </select>
                  </div>
                  <button type="submit" className="bg-st_green text-white p-2 rounded-lg w-full mt-4 text-xl">
                      Registrar
                  </button>
              </form>
          </div>
      </div>
  );
};

export const FurnitureModal = ({ showModal, setShowModal, refetchFurniture, companyId }) => {
    const [inputs, setInputs] = useState({
        name: '',
        state: '',
    });
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (showModal) {
            setAnimationClass('animate__animated animate__fadeIn');
        }
    }, [showModal]);

    const handleClose = () => {
        const hasText = Object.values(inputs).some(input => input !== '');
        if (hasText) {
            Swal.fire({
                title: 'Are you sure?',
                text: "Changes you made will not be saved.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, close it!',
                cancelButtonText: 'No, keep it'
            }).then(result => {
                if (result.isConfirmed) {
                    setAnimationClass('animate__animated animate__fadeOut animate__faster');
                    setTimeout(() => setShowModal(false), 450);
                }
            });
        } else {
            setAnimationClass('animate__animated animate__fadeOut animate__faster');
            setTimeout(() => setShowModal(false), 450);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificar que todos los campos están llenos
        if (Object.values(inputs).some(input => input === '')) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all the fields.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }

        // Crear el objeto con los datos del mueble
        const furnitureData = {
            name: inputs.name,
            state: inputs.state,
            companyId: companyId,
        };

        try {
            // Llamar a la API para crear el mueble
            await createFurniture(furnitureData);

            Swal.fire({
                title: 'Success!',
                text: 'The furniture item has been registered successfully.',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                setAnimationClass('animate__animated animate__fadeOut');
                setTimeout(() => {
                    setShowModal(false);
                    setInputs({ name: '', state: '' });
                    refetchFurniture(); // Actualizar la lista de muebles después de la creación
                }, 500);
            });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to create furniture item. Please try again.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
    };

    if (!showModal) return null;

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ${animationClass}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
                <button onClick={handleClose} className="absolute top-2 right-2">
                    <div className="bg-st_yellow rounded-full w-fit p-1 text-white text-xl ">
                        <X />
                    </div>
                </button>
                <h2 className="text-center mb-4 text-2xl">Registrar Mueble</h2>
                <form className="space-y-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-10">
                        <input
                            type="text"
                            name="name"
                            value={inputs.name}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                            placeholder="Nombre del mueble"
                        />
                        <select
                            name="state"
                            value={inputs.state}
                            onChange={handleInputChange}
                            className="border p-2 rounded"
                        >
                            <option value="" disabled>Seleccione un estado</option>
                            <option value="Nuevo">Nuevo</option>
                            <option value="Usado">Usado</option>
                            <option value="Dañado">Dañado</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-st_green text-white p-2 rounded-lg w-full mt-4 text-xl">
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
};


export default ResourcesModal;
