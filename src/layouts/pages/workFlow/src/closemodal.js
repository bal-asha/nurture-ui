import React, { useState } from 'react';
import ContactForm from './sampleForm'; // Import the ContactForm component

const Abc = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Your App</h1>
      <button onClick={openModal}>Open Contact Form</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Abc;
