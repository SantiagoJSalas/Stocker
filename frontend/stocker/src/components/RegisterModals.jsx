import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";
import Swal from 'sweetalert2';

export const FoodModal = ({ showModal, setShowModal }) => {
  const [inputs, setInputs] = useState({ field1: '', field2: '', field3: '', field4: '' });
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (showModal) {
      setAnimationClass('animate__animated animate__fadeIn');
    }
  }, [showModal]);

  const handleClose = () => {
    const hasText = Object.values(inputs).some((input) => input !== '');
    if (hasText) {
      Swal.fire({
        title: 'Are you sure?',
        text: "Changes you made will not be saved.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, close it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(inputs).every((input) => input !== '')) {
      Swal.fire({
        title: 'Success!',
        text: 'The data has been registered successfully.',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(() => {
        setAnimationClass('animate__animated animate__fadeOut');
        setTimeout(() => {
          setShowModal(false);
          setInputs({ field1: '', field2: '', field3: '', field4: '' });
        }, 500);
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all the fields.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
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
        <>
          <h2 className="text-center mb-4 text-2xl">Registrar alimentos</h2>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-10">
              <input
                type="text"
                name="field1"
                value={inputs.field1}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Comida"
              />
              <input
                type="text"
                name="field2"
                value={inputs.field2}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Marca"
              />
              <input
                type="number"
                name="field3"
                value={inputs.field3}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Cantidad"
                min={1}
              />
              <input 
              type="date"
              name="field4" 
              value={inputs.field4} 
              onChange={handleInputChange} 
              className='border p-2 rounded'
              />
            </div>
            <button type="submit" className="bg-st_green text-white p-2 rounded-lg w-full mt-4 text-xl">
              Registrar
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export const ResourcesModal = ({ showModal, setShowModal, modalId }) => {
  const [inputs, setInputs] = useState({ field1: '', field2: '', field3: '', field4: '' });
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (showModal) {
      setAnimationClass('animate__animated animate__fadeIn');
    }
  }, [showModal]);

  const handleClose = () => {
    const hasText = Object.values(inputs).some((input) => input !== '');
    if (hasText) {
      Swal.fire({
        title: 'Are you sure?',
        text: "Changes you made will not be saved.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, close it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(inputs).every((input) => input !== '')) {
      Swal.fire({
        title: 'Success!',
        text: 'The data has been registered successfully.',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(() => {
        setAnimationClass('animate__animated animate__fadeOut');
        setTimeout(() => {
          setShowModal(false);
          setInputs({ field1: '', field2: '', field3: '', field4: '' });
        }, 500);
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all the fields.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
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
        <>
          <h2 className="text-center mb-4 text-2xl">Registrar recursos</h2>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-10">
              <input
                type="text"
                name="field1"
                value={inputs.field1}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Recurso"
              />
              <input
                type="text"
                name="field2"
                value={inputs.field2}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Marca"
              />
              <input
                type="number"
                name="field3"
                value={inputs.field3}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Cantidad"
                min={1}
              />
              <select name="field4" value={inputs.field4} onChange={handleInputChange} className='border p-2 rounded'>
                <option value="" disabled>Seleccione una categoria</option>
                <option value="option1">Material Didáctico</option>
                <option value="option2">Material de Limpieza</option>
                <option value="option3">Suministros de Oficina</option>
                <option value="option4">Ropa y Textiles</option>
                <option value="option5">Equipos de Cocina</option>
                <option value="option6">Tecnología y Electrónica</option>
                <option value="option7">Otro</option>
              </select>
            </div>
            <button type="submit" className="bg-st_green text-white p-2 rounded w-full mt-4 text-xl">
              Registrar
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export const FurnitureModal = ({ showModal, setShowModal}) => {
  const [inputs, setInputs] = useState({ field1: '', field2: ''});
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (showModal) {
      setAnimationClass('animate__animated animate__fadeIn');
    }
  }, [showModal]);

  const handleClose = () => {
    const hasText = Object.values(inputs).some((input) => input !== '');
    if (hasText) {
      Swal.fire({
        title: 'Are you sure?',
        text: "Changes you made will not be saved.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, close it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(inputs).every((input) => input !== '')) {
      Swal.fire({
        title: 'Success!',
        text: 'The data has been registered successfully.',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(() => {
        setAnimationClass('animate__animated animate__fadeOut');
        setTimeout(() => {
          setShowModal(false);
          setInputs({ field1: '', field2: '', field3: '', field4: '' });
        }, 500);
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all the fields.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
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
        <>
          <h2 className="text-center mb-4 text-2xl">Registrar mobiliaria</h2>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-rows-2 gap-10">
              <input
                type="text"
                name="field1"
                value={inputs.field1}
                onChange={handleInputChange}
                className="border p-2 rounded"
                placeholder="Mobiliaria"
              />
              <select type="text" name="field2" value={inputs.field2} onChange={handleInputChange} className="border p-2 rounded" placeholder="Marca">
                <option value="" selected disabled>Seleccione el estado</option>
                <option value="1">Bien</option>
                <option value="2">Roto</option>
                <option value="3">Reparado</option>
              </select>
            </div>
            <button type="submit" className="bg-st_green text-white p-2 rounded w-full mt-4 text-xl">
              Registrar
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export default ResourcesModal;
