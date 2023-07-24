import React, { useState } from 'react';
import { Header } from '../../sections';
import './Resumeform.css'


const Resumeform = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    education: '',
    experience: '',
    skills: '',
    achievements: '',
  });

  // Fonction de gestion des modifications des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour enregistrer les données du CV dans Firebase
    console.log('CV data submitted:', formData);
  };

  // Définissez un tableau d'objets pour les champs du formulaire
  const formFields = [
    { name: 'fullName', label: 'Full Name:', type: 'text', required: true },
    { name: 'email', label: 'Email:', type: 'email', required: true },
    { name: 'phoneNumber', label: 'Phone Number:', type: 'tel', required: true },
    { name: 'education', label: 'Education:', type: 'textarea', required: true },
    { name: 'experience', label: 'Experience:', type: 'textarea', required: true },
    { name: 'skills', label: 'Skills:', type: 'textarea', required: true },
    { name: 'achievements', label: 'Achievements:', type: 'textarea', required: true },
  ];

  return (
    <>
    <Header />
    <div className=' container main-container '>
    <form onSubmit={handleSubmit} className="form">
        {formFields.map((field) => (
            <div className="" key={field.name}>
                <label htmlFor={field.name} className="">
                    {field.label}
                </label>
                {field.type === 'textarea' ? (
                    <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className=""
                    required={field.required}
                    />
                ) : (
                    <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className=""
                    required={field.required}
                    />
                )}
            </div>
        ))}
        <button type="submit" className="">
            Save CV
        </button>
        </form>
    </div>
    
    </>

  );
}

export default Resumeform;
